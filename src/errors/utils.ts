/**
 * Log an error to the console. Optionally clear the stack trace and mask the value. If `verbose` is `true`, additional data will be logged. See {@link LogErrorOptions} for more information.
 * @param error - The error to log
 * @param options - The options for logging the error
 * @returns The error that was logged
 * @category Errors
 */
export function logError(error: string | Error, options: LogErrorOptions = {}) {
  const {
    clearStack = /^(true|1)$/i.test(
      process.env.NODE_UTILS_ENV_CLEAR_ERROR_STACK || ''
    ),
    maskValue = /^(true|1)$/i.test(process.env.NODE_UTILS_ENV_MASK_VALUE || ''),
    verbose = /^(true|1)$/i.test(process.env.NODE_UTILS_VERBOSE_ERRORS || ''),
    value,
  } = options;

  // Cast string to Error
  if (typeof error === 'string') {
    error = new Error(error);
  }

  if (clearStack) {
    error.stack = undefined;
  }

  const verboseData: VerboseErrorData = {};
  if (verbose) {
    if (value !== undefined) {
      verboseData.value = maskValue ? '********' : value;
      verboseData.valueType = typeof value;
    }
    if (error.cause) {
      verboseData.cause = String(error.cause);
    }
  }

  console.error(error);
  if (verbose) {
    console.error(verboseData);
  }

  return error;
}

/**
 * Options for logging an error
 * @category Errors
 */
export type LogErrorOptions = {
  /** Whether to clear the stack trace. Defaults with the `ENV_CLEAR_ERROR_STACK` environment variable */
  clearStack?: boolean;

  /** Whether to mask the value. Defaults with the `ENV_MASK_VALUE` environment variable */
  maskValue?: boolean;

  /** Whether to log additional data. Defaults with the `VERBOSE_ERRORS` environment variable */
  verbose?: boolean;

  /** The value to log */
  value?: any;
};

/**
 * Additional data to log when `verbose` is `true`
 * @category Errors
 */
export type VerboseErrorData = {
  /** The cause that originated the error */
  cause?: string;

  /** The value to log */
  value?: any;

  /** The type of the value to log */
  valueType?: string;
};
