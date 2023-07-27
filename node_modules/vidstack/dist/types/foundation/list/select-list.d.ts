import { DOMEvent } from 'maverick.js/std';
import { List, type ListEvents, type ListItem } from './list';
import { LIST_ADD, LIST_ON_REMOVE, LIST_ON_USER_SELECT, LIST_SELECT } from './symbols';
export interface SelectListItem extends ListItem {
    selected: boolean;
}
export declare class SelectList<Item extends SelectListItem, Events extends SelectListEvents<Item>> extends List<Item, Events> {
    get selected(): Item | null;
    get selectedIndex(): number;
    protected [LIST_ON_REMOVE](item: Item, trigger?: Event): void;
    protected [LIST_ON_USER_SELECT]?(): void;
    [LIST_ADD](item: Omit<Item, 'selected'>, trigger?: Event): void;
    [LIST_SELECT](item: Item, selected: boolean, trigger?: Event): void;
}
export interface SelectListEvents<Item extends SelectListItem = SelectListItem> extends ListEvents<Item> {
    change: SelectListChangeEvent<Item>;
}
export interface SelectListChangeEvent<Item extends SelectListItem> extends DOMEvent<SelectListChangeEventDetail<Item>> {
}
export interface SelectListChangeEventDetail<Item extends SelectListItem> {
    prev: Item | null;
    current: Item;
}
