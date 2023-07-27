import Comment from './comment';
import ActionBtn from '../components/action-btn';
export default class CommentActions {
    private comment;
    private get ctx();
    private get data();
    private get cConf();
    constructor(comment: Comment);
    /** 投票操作 */
    vote(type: 'up' | 'down'): void;
    /** 管理员 - 评论状态修改 */
    adminEdit(type: 'collapsed' | 'pending' | 'pinned', btnElem: ActionBtn): void;
    /** 管理员 - 评论删除 */
    adminDelete(btnElem: ActionBtn): void;
    /** 快速跳转到该评论 */
    goToReplyComment(): void;
}
