import { EmoticonListData } from '../../../types/artalk-data';
import EditorPlug from './editor-plug';
import Editor from '../editor';
export default class EmoticonsPlug extends EditorPlug {
    editor: Editor;
    static Name: string;
    protected $panel: HTMLElement;
    emoticons: EmoticonListData;
    loadingTask: Promise<void> | null;
    $grpWrap: HTMLElement;
    $grpSwitcher: HTMLElement;
    constructor(editor: Editor);
    onPanelShow(): void;
    onPanelHide(): void;
    isListLoaded: boolean;
    isImgLoaded: boolean;
    loadEmoticonsData(): Promise<void>;
    private handleData;
    /** 远程加载 */
    private remoteLoad;
    /** 避免表情 item.key 为 null 的情况 */
    private solveNullKey;
    /** 避免相同 item.key */
    private solveSameKey;
    /** 判断是否为 OwO 格式 */
    private isOwOFormat;
    /** 转换 OwO 格式数据 */
    private convertOwO;
    /** 初始化表情列表界面 */
    private initEmoticonsList;
    /** 打开一个表情组 */
    openGrp(index: number): void;
    private changeListHeight;
    /** 处理评论 content 中的表情内容 */
    transEmoticonImageText(text: string): string;
}
