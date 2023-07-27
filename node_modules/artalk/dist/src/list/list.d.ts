import { ListData, NotifyData } from '../../types/artalk-data';
import Context from '../../types/context';
import ListLite from './list-lite';
export default class List extends ListLite {
    private $closeCommentBtn;
    private $openSidebarBtn;
    private $unreadBadge;
    private $commentCount;
    private $commentCountNum;
    private $dropdownWrap?;
    constructor(ctx: Context);
    private initListActionBtn;
    /** 刷新界面 */
    refreshUI(): void;
    protected onLoad(data: ListData, offset: number): void;
    private goToCommentFounded;
    goToCommentDelay: boolean;
    /** 跳到评论项位置 - 根据 `location.hash` */
    checkGoToCommentByUrlHash(): void;
    /** 管理员设置页面信息 */
    adminPageEditSave(): void;
    showUnreadBadge(count: number): void;
    /** 初始化选择下拉层 */
    protected initDropdown(): void;
    updateUnread(notifies: NotifyData[]): void;
}
