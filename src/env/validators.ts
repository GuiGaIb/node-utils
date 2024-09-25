/* ---------------- Booleans ---------------- */
/**
 * Check if the value is true
 * @param value - The value to check
 * @returns `true` if the value is `true`
 * @category EnvValidators
 */
export function isTrue(value: boolean) {
  return value === true;
}

/**
 * Check if the value is false
 * @param value - The value to check
 * @returns `true` if the value is `false`
 * @category EnvValidators
 */
export function isFalse(value: boolean) {
  return value === false;
}

/**
 * Check if the value is truthy
 * @param value - The value to check
 * @returns `true` if the value is truthy
 * @category EnvValidators
 */
export function isTruthy(value: any): boolean {
  return !!value;
}

/**
 * Check if the value is falsy
 * @param value - The value to check
 * @returns `true` if the value is falsy
 * @category EnvValidators
 */
export function isFalsy(value: any): boolean {
  return !value;
}
/* ------------------------------------------ */

/* ---------------- Numbers ----------------- */
/**
 * Utility function to create a validator that checks if a number is greater than a minimum value
 * @param min - The minimum value
 * @returns A validator that checks if a number is greater than the minimum value
 * @category EnvValidators
 */
export function gt(min: number) {
  return (value: number) => value > min;
}

/**
 * Utility function to create a validator that checks if a number is greater than or equal to a minimum value
 * @param min - The minimum value
 * @returns A validator that checks if a number is greater than or equal to the minimum value
 * @category EnvValidators
 */
export function gte(min: number) {
  return (value: number) => value >= min;
}

/**
 * Utility function to create a validator that checks if a number is less than a maximum value
 * @param max - The maximum value
 * @returns A validator that checks if a number is less than the maximum value
 * @category EnvValidators
 */
export function lt(max: number) {
  return (value: number) => value < max;
}

/**
 * Utility function to create a validator that checks if a number is less than or equal to a maximum value
 * @param max - The maximum value
 * @returns A validator that checks if a number is less than or equal to the maximum value
 * @category EnvValidators
 */
export function lte(max: number) {
  return (value: number) => value <= max;
}

/**
 * Utility function to create a validator that checks if a number is within a range
 * @param min - The minimum value
 * @param max - The maximum value
 * @returns A validator that checks if a number is within the range
 * @category EnvValidators
 */
export function gtLt(min: number, max: number) {
  return (value: number) => value > min && value < max;
}

/**
 * Utility function to create a validator that checks if a number is within a range
 * @param min - The minimum value
 * @param max - The maximum value inclusive
 * @returns A validator that checks if a number is within the range
 * @category EnvValidators
 */
export function gteLt(min: number, max: number) {
  return (value: number) => value >= min && value < max;
}

/**
 * Utility function to create a validator that checks if a number is within a range
 * @param min - The minimum value inclusive
 * @param max - The maximum value
 * @returns A validator that checks if a number is within the range
 * @category EnvValidators
 */
export function gtLte(min: number, max: number) {
  return (value: number) => value > min && value <= max;
}

/**
 * Utility function to create a validator that checks if a number is within a range
 * @param min - The minimum value inclusive
 * @param max - The maximum value inclusive
 * @returns A validator that checks if a number is within the range
 * @category EnvValidators
 */
export function gteLte(min: number, max: number) {
  return (value: number) => value >= min && value <= max;
}

/**
 * Check if the value is not `NaN`
 * @param value - The value to check
 * @returns `true` if the value is not `NaN`
 * @category EnvValidators
 */
export function noNaN(value: number) {
  return !Number.isNaN(value);
}

/**
 * Check if the value is finite
 * @param value - The value to check
 * @returns `true` if the value is finite
 * @category EnvValidators
 */
export function isFinite(value: number) {
  return Number.isFinite(value);
}
/* ------------------------------------------ */

/**
 * Validator function type.
 * @param val - The value to validate.
 * @returns A string containing the error message if validation fails, or `null` if it passes.
 */
export type Validator<T> = (val: T) => string | null;
