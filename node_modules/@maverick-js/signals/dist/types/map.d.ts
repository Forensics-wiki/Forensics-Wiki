import type { Maybe, ReadSignal } from './types';
export * from './selector';
/**
 * Reactive map helper that caches each item by index to reduce unnecessary mapping on updates.
 * It only runs the mapping function once per item and adds/removes as needed. In a non-keyed map
 * like this the index is fixed but value can change (opposite of a keyed map).
 *
 * Prefer `computedKeyedMap` when referential checks are required.
 *
 * @see {@link https://github.com/maverick-js/signals#computedmap}
 */
export declare function computedMap<Item, MappedItem>(list: ReadSignal<Maybe<readonly Item[]>>, map: (value: ReadSignal<Item>, index: number) => MappedItem, options?: {
    id?: string;
}): ReadSignal<MappedItem[]>;
/**
 * Reactive map helper that caches each list item by reference to reduce unnecessary mapping on
 * updates. It only runs the mapping function once per item and then moves or removes it as needed. In
 * a keyed map like this the value is fixed but the index changes (opposite of non-keyed map).
 *
 * Prefer `computedMap` when working with primitives to avoid unncessary re-renders.
 *
 * @see {@link https://github.com/maverick-js/signals#computedkeyedmap}
 */
export declare function computedKeyedMap<Item, MappedItem>(list: ReadSignal<Maybe<readonly Item[]>>, map: (value: Item, index: ReadSignal<number>) => MappedItem, options?: {
    id?: string;
}): ReadSignal<MappedItem[]>;
