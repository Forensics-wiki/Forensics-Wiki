import type { ParseByteStreamOptions, ParsedCaptionsResult } from './types';
export declare function parseResponse(response: Response | Promise<Response>, options?: ParseByteStreamOptions): Promise<ParsedCaptionsResult>;
export declare function parseByteStream(stream: ReadableStream<Uint8Array>, { encoding, ...options }?: ParseByteStreamOptions): Promise<ParsedCaptionsResult>;
