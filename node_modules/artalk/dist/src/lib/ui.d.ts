/** 显示加载 */
export declare function showLoading(parentElem: HTMLElement, conf?: {
    transparentBg?: boolean;
}): void;
/** 隐藏加载 */
export declare function hideLoading(parentElem: HTMLElement): void;
/** 元素加载动画 */
export declare function setLoading(val: boolean, parentElem: HTMLElement): void;
/** 元素是否用户可见 */
export declare function isVisible(el: HTMLElement, viewport?: HTMLElement): boolean;
/** 滚动到元素中心 */
export declare function scrollIntoView(elem: HTMLElement, enableAnim?: boolean): void;
/** 显示消息 */
export declare function showNotify(wrapElem: HTMLElement, msg: string, type: 's' | 'e' | 'w' | 'i'): void;
/** fade 动画 */
export declare function playFadeAnim(elem: HTMLElement, after?: () => void, type?: 'in' | 'out'): void;
/** 渐入动画 */
export declare function playFadeInAnim(elem: HTMLElement, after?: () => void): void;
/** 渐出动画 */
export declare function playFadeOutAnim(elem: HTMLElement, after?: () => void): void;
/** 设置全局错误 */
export declare function setError(parentElem: HTMLElement, html: string | HTMLElement | null, title?: string): void;
export declare function getScrollBarWidth(): number;
