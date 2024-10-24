import { CustomError } from './base.js';
/**
 * Abstract base class for all environment variable errors
 * @extends Error
 * @category Errors
 */
export class EnvError extends CustomError {
    /**
     * Creates an instance of EnvError.
     * @param message - The error message.
     * @param options - {@link CustomErrorOptions}
     */
    constructor(message, options) {
        super(message, options);
    }
}
/**
 * Error thrown when a required environment variable is missing
 * @extends EnvError
 * @category Errors
 */
export class EnvMissingError extends EnvError {
    /**
     * Creates an instance of `EnvMissingError`.
     * @param name - The name of the missing environment variable
     * @param options - {@link CustomErrorOptions}
     */
    constructor(name, options) {
        super(`Missing required environment variable "${name}"`, options);
    }
}
/**
 * Error thrown when a default value for an environment variable is invalid.
 * @extends EnvError
 * @category Errors
 */
export class EnvDefaultError extends EnvError {
    /**
     * Creates an instance of `EnvDefaultError`.
     * @param name - The name of the environment variable
     * @param options - {@link CustomErrorOptions}
     */
    constructor(name, options) {
        super(`Invalid default value for environment variable "${name}"`, options);
    }
}
/**
 * Error thrown when a transformation function for an environment variable fails
 * @extends EnvError
 * @category Errors
 */
export class EnvTransformError extends EnvError {
    /**
     * Creates an instance of `EnvTransformError`.
     * @param name - The name of the environment variable
     * @param options - {@link CustomErrorOptions}
     */
    constructor(name, options) {
        super(`Failed to transform environment variable "${name}"`, options);
    }
}
/**
 * Error thrown when a validation function for an environment variable fails.
 * @extends EnvError
 * @category Errors
 */
export class EnvValidationError extends EnvError {
    /**
     * Creates an instance of `EnvValidationError`.
     * @param name - The name of the environment variable
     * @param message - The error message
     * @param options - {@link CustomErrorOptions}
     */
    constructor(name, message, options) {
        super(`Invalid value for environment variable "${name}": ${message || ''}`, options);
    }
}
