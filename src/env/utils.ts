import {
  EnvMissingError,
  EnvTransformError,
  EnvValidationError,
} from '../errors/env';
import { logError } from '../errors/utils';
import { Validator } from './validators';

const envCache = new Map<string, any>();

/**
 * Require an environment variable
 * @param name - The name of the environment variable
 * @returns The value of the environment variable
 * @throws {EnvMissingError} If the environment variable is undefined
 * @category Env
 */
export function requireEnv(name: string): string;
/**
 * Require an environment variable. Supports options for default values, validators, and transformers. See {@link RequireEnvOptions} for more information
 * @param name - The name of the environment variable
 * @param options - Options for requiring the environment variable
 * @param prefix - Optional prefix to add to the environment variable name
 * @returns The value of the environment variable
 * @throws {EnvMissingError} If the environment variable is undefined and no default is provided.
 * @throws {EnvTransformError} If the transformation fails.
 * @throws {EnvValidationError} If the validation fails.
 * @category Env
 */
export function requireEnv<T = string>(
  name: string,
  options?: RequireEnvOptions<T>,
  prefix?: string
): T;

export function requireEnv<T = string>(
  name: string,
  options: RequireEnvOptions<T> = {},
  prefix = ''
): T {
  const prefixedName = prefix ? `${prefix}_${name}` : name;

  const cacheKey = JSON.stringify({ prefixedName, options });
  if (envCache.has(cacheKey)) {
    return envCache.get(cacheKey);
  }

  const value = process.env[prefixedName];
  const {
    defaultValue,
    validators = [],
    transformer = (val) => val as T,
    defaultWarning = /^(true|1)$/i.test(
      process.env.NODE_UTILS_ENV_CLEAR_ERROR_STACK || ''
    ),
    maskValue = /^(true|1)$/i.test(
      process.env.NODE_UTILS_ENV_ENV_MASK_VALUE || ''
    ),
  } = options;

  if (defaultValue !== undefined) {
    runValidators(prefixedName, defaultValue, validators);
  }

  if (value === undefined) {
    if (defaultValue !== undefined) {
      if (defaultWarning) {
        console.warn(
          `Environment variable "${name}" is missing, using default value "${
            maskValue ? '********' : defaultValue
          }"`
        );
      }
      envCache.set(cacheKey, defaultValue);
      return defaultValue;
    }
    throw logError(new EnvMissingError(prefixedName));
  }

  let transformedValue: T;
  try {
    transformedValue = transformer(value);
  } catch (error) {
    throw logError(
      new EnvTransformError(`Failed to transform "${prefixedName}"`, {
        cause: String(error),
      }),
      { value }
    );
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
function runValidators<T>(name: string, value: T, validators: Validator<T>[]) {
  validators.forEach((validator) => {
    const errorMessage = validator(value);
    if (errorMessage) {
      throw logError(new EnvValidationError(name, errorMessage), { value });
    }
  });
}

/**
 * Options for requiring an environment variable
 * @category Env
 */
export type RequireEnvOptions<T = string> = {
  /** Optional array of validators. These functions must not throw, instead return a `string` with the failure cause or `null` to signal successful validation */
  validators?: Validator<T>[];

  /** Optional transformer function to convert the value to the desired type */
  transformer?: (val: string) => T;

  /** Optional default value to use if the environment variable is missing */
  defaultValue?: T;

  /** Whether to log a warning when using a default value */
  defaultWarning?: boolean;

  /** Whether to mask the value in logs */
  maskValue?: boolean;
};

/**
 * Clear the environment cache
 * @category Env
 */
export function clearEnvCache() {
  envCache.clear();
}
