declare function Detect(userAgent?: string): {
    os: string;
    osVersion: string;
    engine: string;
    browser: string;
    device: string;
    language: string;
    version: string;
};
export default Detect;
