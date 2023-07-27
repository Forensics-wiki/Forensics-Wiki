import type { VTTCue } from '../vtt/vtt-cue';
import type { VTTHeaderMetadata } from '../vtt/vtt-header';
import type { VTTRegion } from '../vtt/vtt-region';
import type { ParseError } from './parse-error';
export type CaptionsFileFormat = 'vtt' | 'srt' | 'ssa' | 'ass';
export interface CaptionsParserFactory {
    (): CaptionsParser;
}
export interface CaptionsParser {
    /**
     * Called when initializing the parser before the parsing process begins.
     */
    init(init: CaptionsParserInit): void | Promise<void>;
    /**
     * Called when a new line of text has been found and requires parsing. This includes empty lines
     * which can be used to separate caption blocks.
     */
    parse(line: string, lineCount: number): void;
    /**
     * Called when parsing has been cancelled, or has naturally ended as there are no more lines of
     * text to be parsed.
     */
    done(cancelled: boolean): ParsedCaptionsResult;
}
export interface ParsedCaptionsResult {
    metadata: VTTHeaderMetadata;
    regions: VTTRegion[];
    cues: VTTCue[];
    errors: ParseError[];
}
export interface CaptionsParserInit extends ParseCaptionsOptions {
    cancel: () => void;
}
export interface ParseCaptionsOptions {
    /**
     * Whether strict mode should be enabled. In strict mode:
     *
     * - If the file header is not valid the parsing process will be cancelled.
     * - If a parser error is found, the parsing process will be cancelled and an error will be
     * thrown instead of invoking the `onError` callback .
     *
     * @defaultValue false
     */
    strict?: boolean;
    /**
     * Whether errors should be collected and reported in the final parser result. By default, this
     * value will be true in dev mode or if `strict` mode is true. If set to true and `strict` mode
     * is false, the `onError` callback will be invoked.
     *
     * Do note, setting this to true will dynamically load error builders which will slightly
     * increase bundle size (~1kB).
     */
    errors?: boolean;
    /**
     * The captions file format to be parsed or a custom parser factory (functions that returns a
     * captions parser). Supported types include: 'vtt', 'srt', 'ssa', and 'ass'.
     */
    type?: CaptionsFileFormat | CaptionsParserFactory;
    /**
     * Invoked with metadata that was parsed from the VTT header.
     */
    onHeaderMetadata?(data: VTTHeaderMetadata): void;
    /**
     * Invoked when a new VTT Cue has been parsed and constructed.
     */
    onCue?(cue: VTTCue): void;
    /**
     * Invoked when a new VTT Region has been parsed and constructed.
     */
    onRegion?(region: VTTRegion): void;
    /**
     * Invoked when a loading or parser error is encountered. This is only invoked if the
     * `errors` option is true.
     */
    onError?(error: ParseError): void;
}
export interface ParseByteStreamOptions extends ParseCaptionsOptions {
    /**
     * The text encoding type to be used when decoding data bytes to text.
     *
     * @defaultValue utf-8
     */
    encoding?: string;
}
