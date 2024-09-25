/**
 * Abstract base class for all environment variable errors
 * @extends Error
 * @category Errors
 */
export abstract class EnvError extends Error {
  /**
   * Creates an instance of EnvError.
   * @param message - The error message.
   * @param cause - The original error or reason for the failure.
   */
  constructor(message: string, cause?: any) {
    super(message);

    this.cause = cause;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  /** The cause that originated the error */
  cause?: any;
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
   * @param cause - The cause that originated the error
   */
  constructor(name: string, cause?: any) {
    super(`Missing required environment variable "${name}"`, cause);
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
   * @param cause - The cause that originated the error
   */
  constructor(name: string, cause?: any) {
    super(`Invalid default value for environment variable "${name}"`, cause);
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
   * @param cause - The cause that originated the error
   */
  constructor(name: string, cause: any) {
    super(`Failed to transform environment variable "${name}"`, cause);
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
   * @param cause - The cause that originated the error
   */
  constructor(name: string, message?: string, cause?: any) {
    super(
      `Invalid value for environment variable "${name}": ${message || ''}`,
      cause
    );
  }
}
