import { PageData, CommentData } from '../../types/artalk-data';
import ApiBase from './api-base';
/**
 * 页面 API
 */
export default class PageApi extends ApiBase {
    /** 页面 · 获取 */
    pageGet(siteName?: string, offset?: number, limit?: number): Promise<{
        pages: PageData[];
        total: number;
    }>;
    /** 页面 · 修改 */
    pageEdit(data: PageData): Promise<PageData>;
    /** 页面 · 删除 */
    pageDel(pageKey: string, siteName?: string): Promise<unknown>;
    /** 页面 · 数据更新 */
    pageFetch(id?: number, siteName?: string, getStatus?: boolean): Promise<any>;
    /** PV */
    pv(): Promise<number>;
    /** 统计 */
    stat(type: 'latest_comments' | 'latest_pages' | 'pv_most_pages' | 'comment_most_pages' | 'page_pv' | 'site_pv' | 'page_comment' | 'site_comment', pageKeys?: string | string[], limit?: number): Promise<number | object | CommentData[] | PageData[]>;
}
