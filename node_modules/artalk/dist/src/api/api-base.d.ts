import Context from '../../types/context';
import Api from '.';
declare abstract class ApiBase {
    protected api: Api;
    protected ctx: Context;
    constructor(api: Api, ctx: Context);
    protected POST<T>(path: string, data?: {
        [key: string]: any;
    }): Promise<T>;
    protected Fetch(path: string, init: RequestInit, timeout?: number): Promise<any>;
}
interface ApiBase {
}
export default ApiBase;
