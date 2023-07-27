import type { ComputedSignalOptions, Effect, MaybeSignal, ReadSignal, SignalOptions, StopEffect, WriteSignal } from './types';
/**
 * Wraps the given value into a signal. The signal will return the current value when invoked
 * `fn()`, and provide a simple write API via `set()`. The value can now be observed
 * when used inside other computations created with `computed` and `effect`.
 *
 * @see {@link https://github.com/maverick-js/signals#signal}
 */
export declare function signal<T>(initialValue: T, options?: SignalOptions<T>): WriteSignal<T>;
/**
 * Whether the given value is a readonly signal.
 *
 * @see {@link https://github.com/maverick-js/signals#isreadsignal}
 */
export declare function isReadSignal<T>(fn: MaybeSignal<T>): fn is ReadSignal<T>;
/**
 * Creates a new signal whose value is computed and returned by the given function. The given
 * compute function is _only_ re-run when one of it's dependencies are updated. Dependencies are
 * are all signals that are read during execution.
 *
 * @see {@link https://github.com/maverick-js/signals#computed}
 */
export declare function computed<T, R = never>(compute: () => T, options?: ComputedSignalOptions<T, R>): ReadSignal<T | R>;
/**
 * Invokes the given function each time any of the signals that are read inside are updated
 * (i.e., their value changes). The effect is immediately invoked on initialization.
 *
 * @see {@link https://github.com/maverick-js/signals#effect}
 */
export declare function effect(effect: Effect, options?: {
    id?: string;
}): StopEffect;
/**
 * Takes in the given signal and makes it read only by removing access to write operations
 * (i.e., `set()`).
 *
 * @see {@link https://github.com/maverick-js/signals#readonly}
 */
export declare function readonly<T>(signal: ReadSignal<T>): ReadSignal<T>;
/**
 * Whether the given value is a write signal (i.e., can produce new values via write API).
 *
 * @see {@link https://github.com/maverick-js/signals#iswritesignal}
 */
export declare function isWriteSignal<T>(fn: MaybeSignal<T>): fn is WriteSignal<T>;
