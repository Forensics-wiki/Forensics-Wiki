export declare const ParseErrorCode: {
    readonly LoadFail: 0;
    readonly BadSignature: 1;
    readonly BadTimestamp: 2;
    readonly BadSettingValue: 3;
    readonly BadFormat: 4;
    readonly UnknownSetting: 5;
};
export type ParseErrorCodes = (typeof ParseErrorCode)[keyof typeof ParseErrorCode];
export declare class ParseError extends Error {
    readonly code: ParseErrorCodes;
    readonly line: number;
    constructor(init: ParseErrorInit);
}
export interface ParseErrorInit {
    code: ParseErrorCodes;
    reason: string;
    line: number;
}
