export declare class Queue<QueueRecord> {
    protected _queue: Map<keyof QueueRecord, Set<any>>;
    /**
     * Queue the given `item` under the given `key` to be processed at a later time by calling
     * `serve(key)`.
     */
    _enqueue<T extends keyof QueueRecord>(key: T, item: QueueRecord[T]): void;
    /**
     * Process all items in queue for the given `key`.
     */
    _serve<T extends keyof QueueRecord>(key: T, callback: (item: QueueRecord[T]) => void): void;
    /**
     * Removes all queued items under the given `key`.
     */
    _delete(key: keyof QueueRecord): void;
    /**
     * The number of items currently queued under the given `key`.
     */
    _size(key: keyof QueueRecord): number;
    /**
     * Clear all items in the queue.
     */
    _reset(): void;
}
