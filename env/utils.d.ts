import { Validator } from './validators';
/**
 * Require an environment variable
 * @param name - The name of the environment variable
 * @returns The value of the environment variable
 * @throws {EnvMissingError} If the environment variable is undefined
 * @category Env
 */
export declare function requireEnv(name: string): string;
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
export declare function requireEnv<T = string>(name: string, options?: RequireEnvOptions<T>, prefix?: string): T;
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
export declare function clearEnvCache(): void;
