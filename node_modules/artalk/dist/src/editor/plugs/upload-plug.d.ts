import Editor from '../editor';
import EditorPlug from './editor-plug';
export default class UploadPlug extends EditorPlug {
    static Name: string;
    $imgUploadInput?: HTMLInputElement;
    /** 允许的图片格式 */
    allowImgExts: string[];
    constructor(editor: Editor);
    uploadImg(file: File): Promise<void>;
}
