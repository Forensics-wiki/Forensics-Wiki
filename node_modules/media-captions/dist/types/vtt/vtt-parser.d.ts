import type { ParseErrorBuilder } from '../parse/errors';
import type { ParseError } from '../parse/parse-error';
import type { CaptionsParser, CaptionsParserInit } from '../parse/types';
import { VTTCue } from './vtt-cue';
import { VTTRegion } from './vtt-region';
export declare const enum VTTBlock {
    None = 0,
    Header = 1,
    Cue = 2,
    Region = 3,
    Note = 4
}
export declare class VTTParser implements CaptionsParser {
    protected _init: CaptionsParserInit;
    protected _block: VTTBlock;
    protected _metadata: Record<string, any>;
    protected _regions: Record<string, VTTRegion>;
    protected _cues: VTTCue[];
    protected _cue: VTTCue | null;
    protected _region: VTTRegion | null;
    protected _errors: ParseError[];
    protected _errorBuilder?: typeof ParseErrorBuilder;
    protected _prevLine: string;
    init(init: CaptionsParserInit): Promise<void>;
    parse(line: string, lineCount: number): void;
    done(): {
        metadata: Record<string, any>;
        cues: VTTCue[];
        regions: VTTRegion[];
        errors: ParseError[];
    };
    protected _parseHeader(line: string, lineCount: number): void;
    protected _parseTimestamp(line: string, lineCount: number): readonly [number, number, string[]] | undefined;
    /**
     * @see {@link https://www.w3.org/TR/webvtt1/#region-settings-parsing}
     */
    protected _parseRegionSettings(settings: string[], line: number): void;
    /**
     * @see {@link https://www.w3.org/TR/webvtt1/#cue-timings-and-settings-parsing}
     */
    protected _parseCueSettings(settings: string[], line: number): void;
    protected _handleError(error?: ParseError): void;
}
/**
 * @see {@link https://www.w3.org/TR/webvtt1/#collect-a-webvtt-timestamp}
 */
export declare function parseVTTTimestamp(timestamp: string): number | null;
export default function createVTTParser(): VTTParser;
