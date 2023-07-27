import Context from '../../types/context';
/** 公共请求函数 */
export declare function Fetch(ctx: Context, input: RequestInfo, init: RequestInit, timeout?: number): Promise<any>;
/** 公共 POST 请求 */
export declare function POST<T>(ctx: Context, url: string, data?: {
    [key: string]: any;
}): Promise<T>;
/** 公共 GET 请求 (无 GET 方式 API) */
/** 对象转 FormData */
export declare function ToFormData(object: {
    [key: string]: any;
}): FormData;
