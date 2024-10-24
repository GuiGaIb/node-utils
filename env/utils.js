import { EnvMissingError, EnvTransformError, EnvValidationError, } from '../errors/env.js';
import { logError } from '../errors/utils.js';
import Config from '../config.js';
const envCache = new Map();
export function requireEnv(name, options = {}, prefix = '') {
    const prefixedName = prefix ? `${prefix}_${name}` : name;
    const cacheKey = JSON.stringify({ prefixedName, options });
    if (envCache.has(cacheKey)) {
        return envCache.get(cacheKey);
    }
    const value = process.env[prefixedName];
    const { defaultValue, validators = [], transformer = (val) => val, defaultWarning = Config.defaultWarnings, maskValue = Config.maskValues, } = options;
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
        throw logError(new EnvMissingError(prefixedName));
    }
    let transformedValue;
    try {
        transformedValue = transformer(value);
    }
    catch (error) {
        throw logError(new EnvTransformError(`Failed to transform "${prefixedName}"`, {
            cause: error,
            verboseData: { value },
        }));
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
            throw logError(new EnvValidationError(name, errorMessage, { verboseData: { value } }));
        }
    });
}
/**
 * Clear the environment cache
 * @category Env
 */
export function clearEnvCache() {
    envCache.clear();
}
