import { DOMEvent, EventsTarget } from 'maverick.js/std';
import { LIST_ADD, LIST_ON_REMOVE, LIST_ON_RESET, LIST_READONLY, LIST_REMOVE, LIST_RESET, LIST_SET_READONLY } from './symbols';
export interface ListItem {
}
export declare class List<Item extends ListItem, Events extends ListEvents> extends EventsTarget<Events> implements Iterable<Item> {
    [index: number]: Item | undefined;
    protected _items: Item[];
    protected [LIST_READONLY]: boolean;
    protected [LIST_ON_RESET]?(trigger?: Event): void;
    protected [LIST_ON_REMOVE]?(item: Item, trigger?: Event): void;
    get length(): number;
    get readonly(): boolean;
    /**
     * Transform list to an array.
     */
    toArray(): Item[];
    [Symbol.iterator](): IterableIterator<Item>;
    [LIST_ADD](item: Item, trigger?: Event): void;
    [LIST_REMOVE](item: Item, trigger?: Event): void;
    [LIST_RESET](trigger?: Event): void;
    [LIST_SET_READONLY](readonly: boolean, trigger?: Event): void;
}
export interface ListEvents<Item extends ListItem = ListItem> {
    add: ListAddEvent<Item>;
    remove: ListRemoveEvent<Item>;
    'readonly-change': ListReadonlyChangeEvent;
}
/**
 * Fired when an item has been added to the list.
 */
export interface ListAddEvent<Item extends ListItem> extends DOMEvent<Item> {
}
/**
 * Fired when an item has been removed from the list.
 */
export interface ListRemoveEvent<Item extends ListItem> extends DOMEvent<Item> {
}
/**
 * Fired when the readonly state of the list has changed.
 */
export interface ListReadonlyChangeEvent extends DOMEvent<boolean> {
}
