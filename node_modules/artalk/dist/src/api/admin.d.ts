import ApiBase from './api-base';
/**
 * 管理员 API
 */
export default class AdminApi extends ApiBase {
    /** 缓存清除 */
    cacheFlushAll(): Promise<unknown>;
    /** 缓存预热 */
    cacheWarmUp(): Promise<unknown>;
}
