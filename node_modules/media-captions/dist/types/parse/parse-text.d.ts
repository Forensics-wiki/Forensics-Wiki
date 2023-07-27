import type { ParseCaptionsOptions, ParsedCaptionsResult } from './types';
export declare function parseText(text: string, options?: ParseCaptionsOptions): Promise<ParsedCaptionsResult>;
export declare function parseTextStream(stream: ReadableStream<string>, options?: ParseCaptionsOptions): Promise<ParsedCaptionsResult>;
