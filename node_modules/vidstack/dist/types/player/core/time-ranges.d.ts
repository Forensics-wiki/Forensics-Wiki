export declare class TimeRange implements TimeRanges {
    private readonly _ranges;
    get length(): number;
    constructor(start?: number | [number, number][], end?: number);
    start(index: number): number;
    end(index: number): number;
}
export declare function getTimeRangesStart(range: TimeRanges): number | null;
export declare function getTimeRangesEnd(range: TimeRanges): number | null;
