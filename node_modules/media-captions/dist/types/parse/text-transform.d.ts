/**
 * A WebVTT line terminator consists of one of the following:
 *
 * - A U+000D CARRIAGE RETURN U+000A LINE FEED (CRLF) character pair.
 * - A single U+000A LINE FEED (LF) character.
 * - A single U+000D CARRIAGE RETURN (CR) character.
 */
export declare const LINE_TERMINATOR_RE: RegExp;
export declare class TextLineTransformStream implements TransformStream<Uint8Array, string> {
    readonly writable: WritableStream<Uint8Array>;
    readonly readable: ReadableStream<string>;
    constructor(encoding: string);
}
export declare class TextStreamLineIterator {
    private _buffer;
    private _decoder;
    onLine: (line: string) => void;
    onClose: () => void;
    constructor(encoding: string);
    transform(chunk: Uint8Array): void;
    close(): void;
}
