import type { Callable, Computation, ComputedSignalOptions, Dispose, MaybeDisposable, Scope } from './types';
/**
 * Creates a computation root which is given a `dispose()` function to dispose of all inner
 * computations.
 *
 * @see {@link https://github.com/maverick-js/signals#root}
 */
export declare function root<T>(init: (dispose: Dispose) => T): T;
/**
 * Returns the current value stored inside the given compute function without triggering any
 * dependencies. Use `untrack` if you want to also disable scope tracking.
 *
 * @see {@link https://github.com/maverick-js/signals#peek}
 */
export declare function peek<T>(fn: () => T): T;
/**
 * Returns the current value inside a signal whilst disabling both scope _and_ observer
 * tracking. Use `peek` if only observer tracking should be disabled.
 *
 * @see {@link https://github.com/maverick-js/signals#untrack}
 */
export declare function untrack<T>(fn: () => T): T;
/**
 * By default, signal updates are batched on the microtask queue which is an async process. You can
 * flush the queue synchronously to get the latest updates by calling `tick()`.
 *
 * @see {@link https://github.com/maverick-js/signals#tick}
 */
export declare function tick(): void;
/**
 * Returns the currently executing parent scope.
 *
 * @see {@link https://github.com/maverick-js/signals#getscope}
 */
export declare function getScope(): Scope | null;
/**
 * Runs the given function in the given scope so context and error handling continue to work.
 *
 * @see {@link https://github.com/maverick-js/signals#scoped}
 */
export declare function scoped<T>(run: () => T, scope: Scope | null): T | undefined;
/**
 * Attempts to get a context value for the given key. It will start from the parent scope and
 * walk up the computation tree trying to find a context record and matching key. If no value can
 * be found `undefined` will be returned.
 *
 * @see {@link https://github.com/maverick-js/signals#getcontext}
 */
export declare function getContext<T>(key: string | symbol, scope?: Scope | null): T | undefined;
/**
 * Attempts to set a context value on the parent scope with the given key. This will be a no-op if
 * no parent is defined.
 *
 * @see {@link https://github.com/maverick-js/signals#setcontext}
 */
export declare function setContext<T>(key: string | symbol, value: T, scope?: Scope | null): void;
/**
 * Runs the given function when an error is thrown in a child scope. If the error is thrown again
 * inside the error handler, it will trigger the next available parent scope handler.
 *
 * @see {@link https://github.com/maverick-js/signals#onerror}
 */
export declare function onError<T = Error>(handler: (error: T) => void): void;
/**
 * Runs the given function when the parent scope computation is being disposed.
 *
 * @see {@link https://github.com/maverick-js/signals#ondispose}
 */
export declare function onDispose(disposable: MaybeDisposable): Dispose;
export declare function dispose(this: Scope, self?: boolean): void;
export declare function compute<Result>(scope: Scope | null, compute: Callable<Scope | null, Result>, observer: Computation | null): Result;
export declare function read(this: Computation): any;
export declare function write(this: Computation, newValue: any): any;
export declare function createScope(): Scope;
export declare function createComputation<T>(initialValue: T, compute: (() => T) | null, options?: ComputedSignalOptions<T>): Computation<T>;
export declare function isNotEqual(a: unknown, b: unknown): boolean;
export declare function isFunction(value: unknown): value is Function;
export declare function update(node: Computation): void;
