"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBoolean = toBoolean;
exports.toNumber = toNumber;
exports.toInt = toInt;
exports.toJSON = toJSON;
// env/transformers.ts
/**
 * Converts a string to a boolean. The following values are considered `true`: `"true"` (case insensitive), `"1"`.
 * @param value - The string to convert.
 * @returns The boolean value.
 * @throws If the value cannot be converted to a boolean.
 * @category EnvTransformers
 */
function toBoolean(value) {
    const lower = value.toLowerCase();
    if (lower === 'true' || lower === '1')
        return true;
    if (lower === 'false' || lower === '0')
        return false;
    throw new Error(`Cannot convert "${value}" to boolean.`);
}
/**
 * Converts a string to a number.
 * @param value - The string to convert.
 * @returns The number value.
 * @throws If the value cannot be converted to a number.
 * @category EnvTransformers
 */
function toNumber(value) {
    const num = Number(value);
    if (isNaN(num))
        throw new Error(`Cannot convert "${value}" to number.`);
    return num;
}
/**
 * Converts a string to a base 10 integer.
 * @param value - The string to convert.
 * @returns The integer value.
 * @throws If the value cannot be converted to an integer.
 * @category EnvTransformers
 */
function toInt(value) {
    const int = parseInt(value, 10);
    if (isNaN(int))
        throw new Error(`Cannot convert "${value}" to integer.`);
    return int;
}
/**
 * Parses a JSON string into an object.
 * @param value - The JSON string to parse.
 * @returns The parsed object.
 * @throws If the string cannot be parsed as JSON.
 * @category EnvTransformers
 */
function toJSON(value) {
    try {
        return JSON.parse(value);
    }
    catch (error) {
        throw new Error(`Cannot parse "${value}" as JSON.`);
    }
}
