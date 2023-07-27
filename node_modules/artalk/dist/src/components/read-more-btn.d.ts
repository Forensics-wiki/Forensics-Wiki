export interface ReadMoreBtnConf {
    /** 回调函数 */
    onClick: (offset: number) => void;
    pageSize: number;
    text?: string;
}
/**
 * 阅读更多按钮
 */
export default class ReadMoreBtn {
    conf: ReadMoreBtnConf;
    $el: HTMLElement;
    private $loading;
    private $text;
    private offset;
    private total;
    private origText;
    /** 是否有更多内容 */
    get hasMore(): boolean;
    constructor(conf: ReadMoreBtnConf);
    click(): void;
    /** 显示 */
    show(): void;
    /** 隐藏 */
    hide(): void;
    /** 加载 */
    setLoading(isLoading: boolean): void;
    /** 错误提示 */
    showErr(errMsg: string): void;
    /** 更新数据 */
    update(offset: number, total: number): void;
    checkDisabled(): void;
}
