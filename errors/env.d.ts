import { CustomError, type CustomErrorOptions } from './base.js';
/**
 * Abstract base class for all environment variable errors
 * @extends Error
 * @category Errors
 */
export declare abstract class EnvError extends CustomError {
    /**
     * Creates an instance of EnvError.
     * @param message - The error message.
     * @param options - {@link CustomErrorOptions}
     */
    constructor(message: string, options?: CustomErrorOptions);
}
/**
 * Error thrown when a required environment variable is missing
 * @extends EnvError
 * @category Errors
 */
export declare class EnvMissingError extends EnvError {
    /**
     * Creates an instance of `EnvMissingError`.
     * @param name - The name of the missing environment variable
     * @param options - {@link CustomErrorOptions}
     */
    constructor(name: string, options?: CustomErrorOptions);
}
/**
 * Error thrown when a default value for an environment variable is invalid.
 * @extends EnvError
 * @category Errors
 */
export declare class EnvDefaultError extends EnvError {
    /**
     * Creates an instance of `EnvDefaultError`.
     * @param name - The name of the environment variable
     * @param options - {@link CustomErrorOptions}
     */
    constructor(name: string, options?: CustomErrorOptions);
}
/**
 * Error thrown when a transformation function for an environment variable fails
 * @extends EnvError
 * @category Errors
 */
export declare class EnvTransformError extends EnvError {
    /**
     * Creates an instance of `EnvTransformError`.
     * @param name - The name of the environment variable
     * @param options - {@link CustomErrorOptions}
     */
    constructor(name: string, options: CustomErrorOptions);
}
/**
 * Error thrown when a validation function for an environment variable fails.
 * @extends EnvError
 * @category Errors
 */
export declare class EnvValidationError extends EnvError {
    /**
     * Creates an instance of `EnvValidationError`.
     * @param name - The name of the environment variable
     * @param message - The error message
     * @param options - {@link CustomErrorOptions}
     */
    constructor(name: string, message?: string, options?: CustomErrorOptions);
}
