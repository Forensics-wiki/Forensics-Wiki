import { SiteData } from '../../types/artalk-data';
import ApiBase from './api-base';
/**
 * 站点 API
 */
export default class SiteApi extends ApiBase {
    /** 站点 · 获取 */
    siteGet(): Promise<SiteData[]>;
    /** 站点 · 创建 */
    siteAdd(name: string, urls: string): Promise<SiteData>;
    /** 站点 · 修改 */
    siteEdit(data: SiteData): Promise<SiteData>;
    /** 站点 · 删除 */
    siteDel(id: number, delContent?: boolean): Promise<unknown>;
    /** 导出 */
    export(): Promise<any>;
}
