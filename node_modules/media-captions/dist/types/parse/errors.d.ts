import { ParseError } from './parse-error';
export declare const ParseErrorBuilder: {
    _badVTTHeader(): ParseError;
    _badStartTimestamp(startTime: string, line: number): ParseError;
    _badEndTimestamp(endTime: string, line: number): ParseError;
    _badRangeTimestamp(startTime: number, endTime: number, line: number): ParseError;
    _badCueSetting(name: string, value: string, line: number): ParseError;
    _unknownCueSetting(name: string, value: string, line: number): ParseError;
    _badRegionSetting(name: string, value: string, line: number): ParseError;
    _unknownRegionSetting(name: string, value: string, line: number): ParseError;
    _missingFormat(type: 'Style' | 'Dialogue', line: number): ParseError;
};
