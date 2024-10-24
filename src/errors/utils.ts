import { CustomError, type CustomErrorOptions } from './base.js';

/**
 * Creates a {@link CustomError} and logs it to the console.
 * @param error - The error message.
 * @param options - The options for creating the error ({@link CustomErrorOptions}).
 * @returns The error that was logged.
 * @category Utils
 */
export function logError(
  error: string,
  options?: CustomErrorOptions
): CustomError;
/**
 * Logs a {@link CustomError} to the console and returns it.
 * @param error - The error to log.
 * @returns The error that was logged.
 * @category Utils
 */
export function logError<E extends CustomError>(error: E): E;
export function logError<E extends CustomError>(
  error: string | E,
  options: CustomErrorOptions = {}
) {
  let customError: CustomError | null = null;
  if (typeof error === 'string') {
    customError = new CustomError(error, options);
  }
  if (customError) {
    console.error(customError);
    return customError;
  }
  console.error(error);
  return error;
}
