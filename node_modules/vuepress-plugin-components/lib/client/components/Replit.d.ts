import * as vue from 'vue';
import { VNode } from 'vue';

declare const _default: vue.DefineComponent<{
    /**
     * Replit link
     *
     * Replit 链接
     */
    link: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Replit username
     *
     * Replit 用户名
     */
    user: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Replit repl name
     *
     * Replit repl 名
     */
    repl: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Component width
     *
     * 组件宽度
     */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * Component height
     *
     * 组件高度
     */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * Component width / height ratio
     *
     * 组件长宽比
     */
    ratio: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * Replit theme
     *
     * Replit 主题
     */
    theme: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The default file to open in the editor
     *
     * 默认打开的文件
     */
    file: {
        type: StringConstructor;
        default: () => null;
    };
    /**
     * show repl link
     *
     * 显示 repl 链接
     */
    plain: BooleanConstructor;
    /**
     * Button text
     *
     * 按钮文字
     */
    text: {
        type: StringConstructor;
        default: string;
    };
}, () => VNode | null, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    /**
     * Replit link
     *
     * Replit 链接
     */
    link: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Replit username
     *
     * Replit 用户名
     */
    user: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Replit repl name
     *
     * Replit repl 名
     */
    repl: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Component width
     *
     * 组件宽度
     */
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * Component height
     *
     * 组件高度
     */
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * Component width / height ratio
     *
     * 组件长宽比
     */
    ratio: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * Replit theme
     *
     * Replit 主题
     */
    theme: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The default file to open in the editor
     *
     * 默认打开的文件
     */
    file: {
        type: StringConstructor;
        default: () => null;
    };
    /**
     * show repl link
     *
     * 显示 repl 链接
     */
    plain: BooleanConstructor;
    /**
     * Button text
     *
     * 按钮文字
     */
    text: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    width: string | number;
    link: string;
    text: string;
    height: string | number;
    ratio: string | number;
    theme: string;
    user: string;
    repl: string;
    file: string;
    plain: boolean;
}, {}>;

export { _default as default };
