/**
 * Check if the value is true
 * @param value - The value to check
 * @returns `true` if the value is `true`
 * @category EnvValidators
 */
export declare function isTrue(value: boolean): boolean;
/**
 * Check if the value is false
 * @param value - The value to check
 * @returns `true` if the value is `false`
 * @category EnvValidators
 */
export declare function isFalse(value: boolean): boolean;
/**
 * Check if the value is truthy
 * @param value - The value to check
 * @returns `true` if the value is truthy
 * @category EnvValidators
 */
export declare function isTruthy(value: any): boolean;
/**
 * Check if the value is falsy
 * @param value - The value to check
 * @returns `true` if the value is falsy
 * @category EnvValidators
 */
export declare function isFalsy(value: any): boolean;
/**
 * Utility function to create a validator that checks if a number is greater than a minimum value
 * @param min - The minimum value
 * @returns A validator that checks if a number is greater than the minimum value
 * @category EnvValidators
 */
export declare function gt(min: number): (value: number) => boolean;
/**
 * Utility function to create a validator that checks if a number is greater than or equal to a minimum value
 * @param min - The minimum value
 * @returns A validator that checks if a number is greater than or equal to the minimum value
 * @category EnvValidators
 */
export declare function gte(min: number): (value: number) => boolean;
/**
 * Utility function to create a validator that checks if a number is less than a maximum value
 * @param max - The maximum value
 * @returns A validator that checks if a number is less than the maximum value
 * @category EnvValidators
 */
export declare function lt(max: number): (value: number) => boolean;
/**
 * Utility function to create a validator that checks if a number is less than or equal to a maximum value
 * @param max - The maximum value
 * @returns A validator that checks if a number is less than or equal to the maximum value
 * @category EnvValidators
 */
export declare function lte(max: number): (value: number) => boolean;
/**
 * Utility function to create a validator that checks if a number is within a range
 * @param min - The minimum value
 * @param max - The maximum value
 * @returns A validator that checks if a number is within the range
 * @category EnvValidators
 */
export declare function gtLt(min: number, max: number): (value: number) => boolean;
/**
 * Utility function to create a validator that checks if a number is within a range
 * @param min - The minimum value
 * @param max - The maximum value inclusive
 * @returns A validator that checks if a number is within the range
 * @category EnvValidators
 */
export declare function gteLt(min: number, max: number): (value: number) => boolean;
/**
 * Utility function to create a validator that checks if a number is within a range
 * @param min - The minimum value inclusive
 * @param max - The maximum value
 * @returns A validator that checks if a number is within the range
 * @category EnvValidators
 */
export declare function gtLte(min: number, max: number): (value: number) => boolean;
/**
 * Utility function to create a validator that checks if a number is within a range
 * @param min - The minimum value inclusive
 * @param max - The maximum value inclusive
 * @returns A validator that checks if a number is within the range
 * @category EnvValidators
 */
export declare function gteLte(min: number, max: number): (value: number) => boolean;
/**
 * Check if the value is not `NaN`
 * @param value - The value to check
 * @returns `true` if the value is not `NaN`
 * @category EnvValidators
 */
export declare function noNaN(value: number): boolean;
/**
 * Check if the value is finite
 * @param value - The value to check
 * @returns `true` if the value is finite
 * @category EnvValidators
 */
export declare function isFinite(value: number): boolean;
/**
 * Validator function type.
 * @param val - The value to validate.
 * @returns A string containing the error message if validation fails, or `null` if it passes.
 */
export type Validator<T> = (val: T) => string | null;
