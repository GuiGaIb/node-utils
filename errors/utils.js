"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = logError;
/**
 * Log an error to the console. Optionally clear the stack trace and mask the value. If `verbose` is `true`, additional data will be logged. See {@link LogErrorOptions} for more information.
 * @param error - The error to log
 * @param options - The options for logging the error
 * @returns The error that was logged
 * @category Errors
 */
function logError(error, options = {}) {
    const { clearStack = /^(true|1)$/i.test(process.env.NODE_UTILS_ENV_CLEAR_ERROR_STACK || ''), maskValue = /^(true|1)$/i.test(process.env.NODE_UTILS_ENV_MASK_VALUE || ''), verbose = /^(true|1)$/i.test(process.env.NODE_UTILS_VERBOSE_ERRORS || ''), value, } = options;
    // Cast string to Error
    if (typeof error === 'string') {
        error = new Error(error);
    }
    if (clearStack) {
        error.stack = undefined;
    }
    const verboseData = {};
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
