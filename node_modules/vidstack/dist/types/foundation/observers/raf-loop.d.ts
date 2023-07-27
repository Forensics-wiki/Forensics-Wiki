export declare class RAFLoop {
    private _callback;
    private _id;
    constructor(_callback: () => void);
    _start(): void;
    _stop(): void;
    private _loop;
}
