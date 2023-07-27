import ContextApi from '../../types/context';
import ArtalkPlug from '../../types/plug';
export interface CountConf {
    ctx: ContextApi;
    /** 是否增加当前页面 PV 数 */
    pvAdd?: boolean;
}
export declare const PvCountWidget: ArtalkPlug;
/** 初始化评论数和 PV 数量展示元素 */
export declare function initCountWidget(p: CountConf): Promise<void>;
export declare function handleStatCount(p: CountConf, args: {
    api: 'page_pv' | 'page_comment';
    countEl: string;
    curtPageCount?: number;
}): Promise<void>;
