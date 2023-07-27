import type { ReadSignal } from 'maverick.js';
export declare function ariaBool(value: boolean): 'true' | 'false';
export declare function $ariaBool(signal: ReadSignal<boolean>): ReadSignal<'true' | 'false'>;
