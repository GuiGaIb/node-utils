/**
 * Configuration options. Use this to set global options for the library.
 * @category Config
 */
export const options: NodeUtilsConfig = {
  clearErrorStack: /^(true|1)$/i.test(
    process.env.NODE_UTILS_ENV_CLEAR_ERROR_STACK || ''
  ),
  defaultWarnings: /^(true|1)$/i.test(
    process.env.NODE_UTILS_ENV_DEFAULT_WARNINGS || ''
  ),
  maskValues: /^(true|1)$/i.test(process.env.NODE_UTILS_MASK_VALUES || ''),
  verboseErrors: /^(true|1)$/i.test(
    process.env.NODE_UTILS_VERBOSE_ERRORS || ''
  ),
};

/**
 * Library configuration options type.
 * @category Types
 */
export type NodeUtilsConfig = {
  /**
   * Whether to clear the stack trace. Defaults with the `NODE_UTILS_ENV_CLEAR_ERROR_STACK` environment variable.
   */
  clearErrorStack: boolean;
  /**
   * Whether to log default value warnings. Defaults with the `NODE_UTILS_ENV_DEFAULT_WARNINGS` environment variable.
   */
  defaultWarnings: boolean;
  /**
   * Whether to mask environment variable values. Defaults with the `NODE_UTILS_MASK_VALUES` environment variable.
   */
  maskValues: boolean;
  /**
   * Whether to log verbose errors. Defaults with the `NODE_UTILS_VERBOSE_ERRORS` environment variable.
   */
  verboseErrors: boolean;
};

export default options;
