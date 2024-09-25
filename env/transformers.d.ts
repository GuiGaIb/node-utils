/**
 * Converts a string to a boolean. The following values are considered `true`: `"true"` (case insensitive), `"1"`.
 * @param value - The string to convert.
 * @returns The boolean value.
 * @throws If the value cannot be converted to a boolean.
 * @category EnvTransformers
 */
export declare function toBoolean(value: string): boolean;
/**
 * Converts a string to a number.
 * @param value - The string to convert.
 * @returns The number value.
 * @throws If the value cannot be converted to a number.
 * @category EnvTransformers
 */
export declare function toNumber(value: string): number;
/**
 * Converts a string to a base 10 integer.
 * @param value - The string to convert.
 * @returns The integer value.
 * @throws If the value cannot be converted to an integer.
 * @category EnvTransformers
 */
export declare function toInt(value: string): number;
/**
 * Parses a JSON string into an object.
 * @param value - The JSON string to parse.
 * @returns The parsed object.
 * @throws If the string cannot be parsed as JSON.
 * @category EnvTransformers
 */
export declare function toJSON<T>(value: string): T;
