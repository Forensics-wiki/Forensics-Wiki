/**
 * Round a number to the given number of `decimalPlaces`.
 */
export declare function round(num: number, decimalPlaces?: number): number;
/**
 * Get the number of decimal places in the given `num`.
 *
 * @example `1 -> 0`
 * @example `1.0 -> 0`
 * @example `1.1 -> 1`
 * @example `1.12 -> 2`
 */
export declare function getNumberOfDecimalPlaces(num: number): number;
/**
 * Clamp a given `value` between a minimum and maximum value.
 */
export declare function clampNumber(min: number, value: number, max: number): number;
