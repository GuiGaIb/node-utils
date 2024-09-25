/**
 * Log an error to the console. Optionally clear the stack trace and mask the value. If `verbose` is `true`, additional data will be logged. See {@link LogErrorOptions} for more information.
 * @param error - The error to log
 * @param options - The options for logging the error
 * @returns The error that was logged
 * @category Errors
 */
export declare function logError(error: string | Error, options?: LogErrorOptions): Error;
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
