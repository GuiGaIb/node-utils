/* ---------------- Booleans ---------------- */
/**
 * Check if the value is true
 * @param value - The value to check
 * @returns `true` if the value is `true`
 * @category EnvValidators
 */
export function isTrue(value) {
    return value === true;
}
/**
 * Check if the value is false
 * @param value - The value to check
 * @returns `true` if the value is `false`
 * @category EnvValidators
 */
export function isFalse(value) {
    return value === false;
}
/**
 * Check if the value is truthy
 * @param value - The value to check
 * @returns `true` if the value is truthy
 * @category EnvValidators
 */
export function isTruthy(value) {
    return !!value;
}
/**
 * Check if the value is falsy
 * @param value - The value to check
 * @returns `true` if the value is falsy
 * @category EnvValidators
 */
export function isFalsy(value) {
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
export function gt(min) {
    return (value) => value > min;
}
/**
 * Utility function to create a validator that checks if a number is greater than or equal to a minimum value
 * @param min - The minimum value
 * @returns A validator that checks if a number is greater than or equal to the minimum value
 * @category EnvValidators
 */
export function gte(min) {
    return (value) => value >= min;
}
/**
 * Utility function to create a validator that checks if a number is less than a maximum value
 * @param max - The maximum value
 * @returns A validator that checks if a number is less than the maximum value
 * @category EnvValidators
 */
export function lt(max) {
    return (value) => value < max;
}
/**
 * Utility function to create a validator that checks if a number is less than or equal to a maximum value
 * @param max - The maximum value
 * @returns A validator that checks if a number is less than or equal to the maximum value
 * @category EnvValidators
 */
export function lte(max) {
    return (value) => value <= max;
}
/**
 * Utility function to create a validator that checks if a number is within a range
 * @param min - The minimum value
 * @param max - The maximum value
 * @returns A validator that checks if a number is within the range
 * @category EnvValidators
 */
export function gtLt(min, max) {
    return (value) => value > min && value < max;
}
/**
 * Utility function to create a validator that checks if a number is within a range
 * @param min - The minimum value
 * @param max - The maximum value inclusive
 * @returns A validator that checks if a number is within the range
 * @category EnvValidators
 */
export function gteLt(min, max) {
    return (value) => value >= min && value < max;
}
/**
 * Utility function to create a validator that checks if a number is within a range
 * @param min - The minimum value inclusive
 * @param max - The maximum value
 * @returns A validator that checks if a number is within the range
 * @category EnvValidators
 */
export function gtLte(min, max) {
    return (value) => value > min && value <= max;
}
/**
 * Utility function to create a validator that checks if a number is within a range
 * @param min - The minimum value inclusive
 * @param max - The maximum value inclusive
 * @returns A validator that checks if a number is within the range
 * @category EnvValidators
 */
export function gteLte(min, max) {
    return (value) => value >= min && value <= max;
}
/**
 * Check if the value is not `NaN`
 * @param value - The value to check
 * @returns `true` if the value is not `NaN`
 * @category EnvValidators
 */
export function noNaN(value) {
    return !Number.isNaN(value);
}
/**
 * Check if the value is finite
 * @param value - The value to check
 * @returns `true` if the value is finite
 * @category EnvValidators
 */
export function isFinite(value) {
    return Number.isFinite(value);
}
