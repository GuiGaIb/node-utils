"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvValidationError = exports.EnvTransformError = exports.EnvDefaultError = exports.EnvMissingError = exports.EnvError = void 0;
/**
 * Abstract base class for all environment variable errors
 * @extends Error
 * @category Errors
 */
class EnvError extends Error {
    /**
     * Creates an instance of EnvError.
     * @param message - The error message.
     * @param cause - The original error or reason for the failure.
     */
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        Object.setPrototypeOf(this, new.target.prototype);
    }
    /** The cause that originated the error */
    cause;
}
exports.EnvError = EnvError;
/**
 * Error thrown when a required environment variable is missing
 * @extends EnvError
 * @category Errors
 */
class EnvMissingError extends EnvError {
    /**
     * Creates an instance of `EnvMissingError`.
     * @param name - The name of the missing environment variable
     * @param cause - The cause that originated the error
     */
    constructor(name, cause) {
        super(`Missing required environment variable "${name}"`, cause);
    }
}
exports.EnvMissingError = EnvMissingError;
/**
 * Error thrown when a default value for an environment variable is invalid.
 * @extends EnvError
 * @category Errors
 */
class EnvDefaultError extends EnvError {
    /**
     * Creates an instance of `EnvDefaultError`.
     * @param name - The name of the environment variable
     * @param cause - The cause that originated the error
     */
    constructor(name, cause) {
        super(`Invalid default value for environment variable "${name}"`, cause);
    }
}
exports.EnvDefaultError = EnvDefaultError;
/**
 * Error thrown when a transformation function for an environment variable fails
 * @extends EnvError
 * @category Errors
 */
class EnvTransformError extends EnvError {
    /**
     * Creates an instance of `EnvTransformError`.
     * @param name - The name of the environment variable
     * @param cause - The cause that originated the error
     */
    constructor(name, cause) {
        super(`Failed to transform environment variable "${name}"`, cause);
    }
}
exports.EnvTransformError = EnvTransformError;
/**
 * Error thrown when a validation function for an environment variable fails.
 * @extends EnvError
 * @category Errors
 */
class EnvValidationError extends EnvError {
    /**
     * Creates an instance of `EnvValidationError`.
     * @param name - The name of the environment variable
     * @param message - The error message
     * @param cause - The cause that originated the error
     */
    constructor(name, message, cause) {
        super(`Invalid value for environment variable "${name}": ${message || ''}`, cause);
    }
}
exports.EnvValidationError = EnvValidationError;
