/**
 * Configuration options. Use this to set global options for the library.
 * @category Config
 */
export const options = {
    clearErrorStack: /^(true|1)$/i.test(process.env.NODE_UTILS_ENV_CLEAR_ERROR_STACK || ''),
    defaultWarnings: /^(true|1)$/i.test(process.env.NODE_UTILS_ENV_DEFAULT_WARNINGS || ''),
    maskValues: /^(true|1)$/i.test(process.env.NODE_UTILS_MASK_VALUES || ''),
    verboseErrors: /^(true|1)$/i.test(process.env.NODE_UTILS_VERBOSE_ERRORS || ''),
};
export default options;
