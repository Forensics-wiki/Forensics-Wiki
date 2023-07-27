export declare class RequestQueue {
    protected _serving: boolean;
    protected _pending: import("maverick.js/std").DeferredPromise<void, void>;
    protected _queue: Map<string | symbol, () => void | Promise<void>>;
    /**
     * The number of callbacks that are currently in queue.
     */
    get _size(): number;
    /**
     * Whether items in the queue are being served immediately, otherwise they're queued to
     * be processed later.
     */
    get _isServing(): boolean;
    /**
     * Waits for the queue to be flushed (ie: start serving).
     */
    _waitForFlush(): Promise<void>;
    /**
     * Queue the given `callback` to be invoked at a later time by either calling the `serve()` or
     * `start()` methods. If the queue has started serving (i.e., `start()` was already called),
     * then the callback will be invoked immediately.
     *
     * @param key - Uniquely identifies this callback so duplicates are ignored.
     * @param callback - The function to call when this item in the queue is being served.
     */
    _enqueue(key: string | symbol, callback: () => void): void;
    /**
     * Invokes the callback with the given `key` in the queue (if it exists).
     */
    _serve(key: string | symbol): void;
    /**
     * Flush all queued items and start serving future requests immediately until `stop()` is called.
     */
    _start(): void;
    /**
     * Stop serving requests, they'll be queued until you begin processing again by calling `start()`.
     */
    _stop(): void;
    /**
     * Stop serving requests, empty the request queue, and release any promises waiting for the
     * queue to flush.
     */
    _reset(): void;
    protected _flush(): void;
    protected _release(): void;
}
