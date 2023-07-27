import Context from '../../types/context';
import Component from '../lib/component';
import Layer from './layer';
export interface SidebarShowPayload {
    view?: 'comments' | 'sites' | 'pages' | 'transfer';
}
export default class SidebarLayer extends Component {
    layer?: Layer;
    $header: HTMLElement;
    $closeBtn: HTMLElement;
    $iframeWrap: HTMLElement;
    $iframe?: HTMLIFrameElement;
    constructor(ctx: Context);
    private firstShow;
    /** 显示 */
    show(conf?: SidebarShowPayload): Promise<void>;
    /** 隐藏 */
    hide(): void;
    private iframeLoad;
}
