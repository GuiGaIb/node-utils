"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireEnv = requireEnv;
exports.clearEnvCache = clearEnvCache;
const env_1 = require("../errors/env");
const utils_1 = require("../errors/utils");
const envCache = new Map();
function requireEnv(name, options = {}, prefix = '') {
    const prefixedName = prefix ? `${prefix}_${name}` : name;
    const cacheKey = JSON.stringify({ prefixedName, options });
    if (envCache.has(cacheKey)) {
        return envCache.get(cacheKey);
    }
    const value = process.env[prefixedName];
    const { defaultValue, validators = [], transformer = (val) => val, defaultWarning = /^(true|1)$/i.test(process.env.NODE_UTILS_ENV_CLEAR_ERROR_STACK || ''), maskValue = /^(true|1)$/i.test(process.env.NODE_UTILS_ENV_ENV_MASK_VALUE || ''), } = options;
    if (defaultValue !== undefined) {
        runValidators(prefixedName, defaultValue, validators);
    }
    if (value === undefined) {
        if (defaultValue !== undefined) {
            if (defaultWarning) {
                console.warn(`Environment variable "${name}" is missing, using default value "${maskValue ? '********' : defaultValue}"`);
            }
            envCache.set(cacheKey, defaultValue);
            return defaultValue;
        }
        throw (0, utils_1.logError)(new env_1.EnvMissingError(prefixedName));
    }
    let transformedValue;
    try {
        transformedValue = transformer(value);
    }
    catch (error) {
        throw (0, utils_1.logError)(new env_1.EnvTransformError(`Failed to transform "${prefixedName}"`, {
            cause: String(error),
        }), { value });
    }
    runValidators(prefixedName, transformedValue, validators);
    envCache.set(cacheKey, transformedValue);
    return transformedValue;
}
/**
 * Runs an array of validators on a given value.
 * @param name - The name of the environment variable.
 * @param value - The value to validate.
 * @param validators - An array of validator functions.
 * @throws {EnvValidationError} If any validator fails.
 */
function runValidators(name, value, validators) {
    validators.forEach((validator) => {
        const errorMessage = validator(value);
        if (errorMessage) {
            throw (0, utils_1.logError)(new env_1.EnvValidationError(name, errorMessage), { value });
        }
    });
}
/**
 * Clear the environment cache
 * @category Env
 */
function clearEnvCache() {
    envCache.clear();
}
