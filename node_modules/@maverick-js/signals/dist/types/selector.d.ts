import { ReadSignal } from './types';
export interface SelectorSignal<T> {
    (key: T): ReadSignal<Boolean>;
}
/**
 * Creates a signal that observes the given `source` and returns a new signal who only notifies
 * observers when entering or exiting a specified key.
 */
export declare function selector<T>(source: ReadSignal<T>): SelectorSignal<T>;
