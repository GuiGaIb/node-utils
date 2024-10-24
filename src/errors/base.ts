import Config from '../config.js';

/**
 * Base class for custom errors.
 * @category Errors
 */
export class CustomError extends Error implements CustomErrorVerboseData {
  value?: any;

  /**
   * Creates an instance of {@link CustomError}.
   * @param message - The error message.
   * @param options - {@link CustomErrorOptions}
   */
  constructor(message: string, options?: CustomErrorOptions) {
    super(message);
    this.cause = options?.cause;
    const {
      clearStack = Config.clearErrorStack,
      maskValue = Config.maskValues,
      verbose = Config.verboseErrors,
      verboseData,
    } = options ?? {};

    Object.defineProperty(this, 'value', {
      value: maskValue ? '********' : verboseData?.value,
      enumerable: !maskValue && !!verboseData?.value,
    });

    Object.defineProperty(this, 'valueType', {
      value: typeof verboseData?.value,
      enumerable: verbose && !!verboseData?.value,
    });

    if (clearStack) {
      this.stack = undefined;
    }

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Error for validation failures. Extends {@link CustomError}.
 * @category Errors
 */
export class ValidationError extends CustomError {
  /**
   * Creates an instance of {@link ValidationError}.
   * @param message - The error message.
   * @param options - {@link CustomErrorOptions}
   */
  constructor(message: string, options?: CustomErrorOptions) {
    super(message, options);
  }
}

/**
 * Options for creating a custom error.
 * @category Types
 */
export type CustomErrorOptions = {
  /**
   * The original error or reason for the failure.
   */
  cause?: any;
  /**
   * Whether to clear the stack trace. Defaults with the `NODE_UTILS_ENV_CLEAR_ERROR_STACK` environment variable.
   */
  clearStack?: boolean;
  /**
   * Whether to log additional data. Defaults with the `NODE_UTILS_VERBOSE_ERRORS` environment variable.
   */
  verbose?: boolean;
  /**
   * Additional data to log when `verbose` is `true`.
   */
  verboseData?: CustomErrorVerboseData;
  /**
   * Whether to mask the value. Defaults with the `NODE_UTILS_MASK_VALUES` environment variable.
   */
  maskValue?: boolean;
};

/**
 * Additional data to log when `verbose` is `true`
 * @category Types
 */
export type CustomErrorVerboseData = {
  /** The value to log */
  value?: any;
};
