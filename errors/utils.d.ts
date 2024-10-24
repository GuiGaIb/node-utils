import { CustomError, type CustomErrorOptions } from './base.js';
/**
 * Creates a {@link CustomError} and logs it to the console.
 * @param error - The error message.
 * @param options - The options for creating the error ({@link CustomErrorOptions}).
 * @returns The error that was logged.
 * @category Utils
 */
export declare function logError(error: string, options?: CustomErrorOptions): CustomError;
/**
 * Logs a {@link CustomError} to the console and returns it.
 * @param error - The error to log.
 * @returns The error that was logged.
 * @category Utils
 */
export declare function logError<E extends CustomError>(error: E): E;
