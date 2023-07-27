import { CommentData, ListData } from '../../types/artalk-data';
import ApiBase from './api-base';
/**
 * 评论 API
 */
export default class CommentApi extends ApiBase {
    /** 评论 · 获取 */
    get(offset: number, pageSize: number, flatMode?: boolean, paramsEditor?: (params: any) => void): Promise<ListData>;
    /** 评论 · 创建 */
    add(comment: {
        nick: string;
        email: string;
        link: string;
        content: string;
        rid: number;
        page_key: string;
        page_title?: string;
        site_name?: string;
    }): Promise<CommentData>;
    /** 评论 · 修改 */
    commentEdit(data: Partial<CommentData>): Promise<CommentData>;
    /** 评论 · 删除 */
    commentDel(commentID: number, siteName?: string): Promise<unknown>;
    /** 投票 */
    vote(targetID: number, type: string): Promise<{
        up: number;
        down: number;
    }>;
}
