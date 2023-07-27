import Editor from '../editor';
import EditorPlug from './editor-plug';
export default class HeaderInputPlug extends EditorPlug {
    static Name: string;
    constructor(editor: Editor);
    queryUserInfo: {
        timeout: number | null;
        abortFunc: (() => void) | null;
    };
    /** 远程获取用户数据 */
    fetchUserInfo(): void;
    showLoginDialog(): void;
}
