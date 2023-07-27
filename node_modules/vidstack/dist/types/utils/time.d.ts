/**
 * 🤖 This section was generously ~stolen from~... err... donated by Furf. Cheers!
 *
 * @see https://github.snooguts.net/david-furfero/reddit-media-player/blob/main/src/lib/formatTime/index.ts
 */
/**
 * Casts a number to a string and pads it to match the given `expectedLength`.
 *
 * @param num - A number to pad.
 * @param expectedLength - The expected length of the numbers as a string.
 */
export declare function padNumberWithZeroes(num: number, expectedLength: number): string;
export type TimeUnit = 'hours' | 'minutes' | 'seconds' | 'fraction';
export type ParsedTime = {
    [P in TimeUnit]: number;
};
/**
 * Parses the given `duration` into the following units of time: hours, minutes,
 * seconds, fraction (fraction of a second).
 *
 * @param duration - The length of time to parse in seconds.
 */
export declare function parseTime(duration: number): ParsedTime;
/**
 * Formats the given `duration` into a human readable form that can be displayed to the user.
 *
 * @param duration - The length of time to parse in seconds.
 * @param shouldPadHours - Whether to pad the hours to be length of 2.
 * @param shouldPadMinutes - Whether to pad the minutes to be length of 2.
 * @param shouldAlwaysShowHours - Whether to always show the hours unit.
 * @example `01:20 -> minutes:seconds`
 * @example `3:01:20 -> hours:minutes:seconds`
 * @example If `shouldPadHours` is `true` - `03:01:20`
 * @example If `shouldAlwaysShowHours` is `true` - `0:01:20`
 */
export declare function formatTime(duration: number, shouldPadHours?: boolean | null, shouldPadMinutes?: boolean | null, shouldAlwaysShowHours?: boolean): string;
/**
 * Formats the given `duration` into human spoken form.
 *
 * @param duration - The length of time to parse in seconds.
 * @example `2 hour 3 min 4 sec`
 */
export declare function formatSpokenTime(duration: number): string;
/**
 * Formats the given `duration` into a valid HTML5 duration as specified in the linked
 * spec below.
 *
 * @param duration - The length of time to parse in seconds.
 * @see {@link https://www.w3.org/TR/2014/REC-html5-20141028/infrastructure.html#valid-duration-string}
 */
export declare function formatHtml5Duration(duration: number): string;
