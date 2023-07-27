import Context from '../../types/context';
interface ActionBtnConf {
    /** 按钮文字 (动态/静态) */
    text: (() => string) | string;
    /** 仅管理员可用 */
    adminOnly?: boolean;
    /** 确认操作 */
    confirm?: boolean;
    /** 确认时提示文字 */
    confirmText?: string;
}
/**
 * 通用操作按钮
 */
export default class ActionBtn {
    private ctx;
    private conf;
    $el: HTMLElement;
    isLoading: boolean;
    msgRecTimer?: number;
    msgRecTimerFunc?: Function;
    get isMessaging(): boolean;
    isConfirming: boolean;
    confirmRecTimer?: number;
    /** 构造函数 */
    constructor(ctx: Context, conf: ActionBtnConf | string | (() => string));
    /** 将按钮装载到指定元素 */
    appendTo(dom: HTMLElement): this;
    /** 获取按钮文字（动态/静态） */
    private getText;
    /** 设置点击事件 */
    setClick(func: Function): void;
    /** 文字刷新（动态/静态） */
    updateText(text?: (() => string) | string): void;
    /** 设置加载状态 */
    setLoading(value: boolean, loadingText?: string): void;
    /** 错误消息 */
    setError(text: string): void;
    /** 警告消息 */
    setWarn(text: string): void;
    /** 成功消息 */
    setSuccess(text: string): void;
    /** 设置消息 */
    setMsg(text: string, className?: string, duringTime?: number, after?: Function): void;
    /** 设置消息复原操作定时器 */
    private setMsgRecTimer;
    /** 立刻触发器复原定时器 */
    private fireMsgRecTimer;
    /** 仅清除 timer */
    private clearMsgRecTimer;
}
export {};
