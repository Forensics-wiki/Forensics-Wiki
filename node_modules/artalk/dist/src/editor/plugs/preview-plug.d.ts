import Editor from '../editor';
import EditorPlug from './editor-plug';
export default class PreviewPlug extends EditorPlug {
    static Name: string;
    protected $panel: HTMLElement;
    private isBind;
    constructor(editor: Editor);
    onPanelShow(): void;
    updateContent(): void;
}
