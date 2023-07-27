import type { ParseErrorBuilder } from '../parse/errors';
import type { ParseError } from '../parse/parse-error';
import type { CaptionsParser, CaptionsParserInit } from '../parse/types';
import { VTTCue } from '../vtt/vtt-cue';
declare const enum Section {
    None = 0,
    Style = 1,
    Event = 2
}
export declare class SSAParser implements CaptionsParser {
    protected _init: CaptionsParserInit;
    protected _section: Section;
    protected _cue: VTTCue | null;
    protected _cues: VTTCue[];
    protected _errors: ParseError[];
    protected _format: string[] | null;
    protected _errorBuilder?: typeof ParseErrorBuilder;
    protected _styles: Record<string, Record<string, any>>;
    init(init: any): Promise<void>;
    parse(line: string, lineCount: number): void;
    done(): {
        metadata: {};
        cues: VTTCue[];
        regions: never[];
        errors: ParseError[];
    };
    protected _commitCue(): void;
    protected _parseStyles(values: string[]): void;
    protected _parseDialogue(values: string[], lineCount: number): VTTCue | undefined;
    protected _buildFields(values: string[]): Record<string, any>;
    protected _parseTimestamp(startTimeText: string, endTimeText: string, lineCount: number): number[] | undefined;
    protected _handleError(error?: ParseError): void;
}
export default function createSSAParser(): SSAParser;
export {};
