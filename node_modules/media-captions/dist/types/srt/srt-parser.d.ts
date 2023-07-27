import type { CaptionsParser } from '../parse/types';
import { VTTParser } from '../vtt/vtt-parser';
export declare class SRTParser extends VTTParser implements CaptionsParser {
    parse(line: string, lineCount: number): void;
    protected _parseTimestamp(line: string, lineCount: number): readonly [number, number, string[]] | undefined;
}
export default function createSRTParser(): SRTParser;
