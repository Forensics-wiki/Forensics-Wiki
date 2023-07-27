import * as vue from 'vue';
import { PropType, VNode } from 'vue';
import { PageData } from '@vuepress/client';

type ShareAction = "open" | "navigate" | "popup" | "qrcode";
interface ShareServiceConfig {
    /**
     * Share link
     *
     * @description You can use `[` and `]` to wrap the variable name, and the variable will be replaced with the value of the page.:
     *
     * - `title` will be replaced with the title of the page
     * - `description` will be replaced with the description of the page
     * - `url` will be replaced with the url of the page
     * - `summary` will be replaced with the summary of the page
     * - `tags` will be replaced with the tags of the page
     * - `cover` will be replaced with the cover/banner of the page
     * - `image` will be replaced with the first image of the page
     *
     * 分享链接
     *
     * @description 你可以使用 `[` 和 `]` 包裹变量名，变量将会被替换为页面的值：
     *
     * - `title` 将会被替换为页面的标题
     * - `description` 将会被替换为页面的描述
     * - `url` 将会被替换为页面的链接
     * - `summary` 将会被替换为页面的综述
     * - `tags` 将会被替换为页面的标签
     * - `cover` 将会被替换为页面的封面
     * - `image` 将会被替换为页面的第一张图片
     */
    link: string;
    /**
     * Action of share button
     *
     * @description
     * - `open` will open the link in a new tab
     * - `navigate` will navigate to the link
     * - `popup` will open a popup window
     * - `qrcode` will show a QR code with link
     *
     * 分享按钮的行为
     *
     * @description
     * - `open` 将会在新标签页打开链接
     * - `navigate` 将会跳转到链接
     * - `popup` 将会打开一个弹窗
     * - `qrcode` 将会显示一个二维码
     *
     * @default "popup"
     */
    action?: ShareAction;
    /**
     * Theme color of icon
     *
     * 图标的主题色
     *
     * @default 'currentColor'
     */
    color?: string;
    /**
     * Plain icon shape
     *
     * 纯色图标的形状
     */
    shape: string;
    /**
     * Colorful icon
     *
     * 彩色图标
     */
    icon?: string;
}
interface ShareServiceOptions extends ShareServiceConfig {
    /**
     * Service name
     *
     * 服务名称
     */
    name: string;
}

declare const _default: vue.DefineComponent<{
    /**
     * Share services
     *
     * PDF 文件链接，应为完整链接
     */
    services: {
        type: PropType<string | (string | ShareServiceOptions)[]>;
        default: () => string[];
    };
    /**
     * Getter for page title
     */
    titleGetter: {
        type: PropType<(page: PageData) => string>;
        default: (page: PageData) => string;
    };
    /**
     * Getter for page description
     */
    descriptionGetter: {
        type: PropType<(page: PageData) => string | undefined | null>;
        default: (page: PageData) => string | undefined;
    };
    /**
     * Getter for page summary
     */
    summaryGetter: {
        type: PropType<(page: PageData) => string | undefined | null>;
        default: (page: PageData<{
            summary?: string;
        }>) => string | undefined;
    };
    /**
     * Getter for page summary
     */
    coverGetter: {
        type: PropType<(page: PageData) => string | undefined | null>;
        default: (page: PageData<{
            cover?: string;
        }>) => string | undefined;
    };
    /**
     * Getter for page summary
     */
    tagGetter: {
        type: PropType<(page: PageData) => string | string[] | undefined | null>;
        default: ({ frontmatter, }: PageData<Record<never, never>, {
            tag?: string | string[];
            tags?: string | string[];
        }>) => string | string[] | undefined;
    };
    /**
     * Whether to display the share component inline
     */
    inline: BooleanConstructor;
    /**
     * Use colorful icon
     */
    colorful: BooleanConstructor;
}, () => VNode, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    /**
     * Share services
     *
     * PDF 文件链接，应为完整链接
     */
    services: {
        type: PropType<string | (string | ShareServiceOptions)[]>;
        default: () => string[];
    };
    /**
     * Getter for page title
     */
    titleGetter: {
        type: PropType<(page: PageData) => string>;
        default: (page: PageData) => string;
    };
    /**
     * Getter for page description
     */
    descriptionGetter: {
        type: PropType<(page: PageData) => string | undefined | null>;
        default: (page: PageData) => string | undefined;
    };
    /**
     * Getter for page summary
     */
    summaryGetter: {
        type: PropType<(page: PageData) => string | undefined | null>;
        default: (page: PageData<{
            summary?: string;
        }>) => string | undefined;
    };
    /**
     * Getter for page summary
     */
    coverGetter: {
        type: PropType<(page: PageData) => string | undefined | null>;
        default: (page: PageData<{
            cover?: string;
        }>) => string | undefined;
    };
    /**
     * Getter for page summary
     */
    tagGetter: {
        type: PropType<(page: PageData) => string | string[] | undefined | null>;
        default: ({ frontmatter, }: PageData<Record<never, never>, {
            tag?: string | string[];
            tags?: string | string[];
        }>) => string | string[] | undefined;
    };
    /**
     * Whether to display the share component inline
     */
    inline: BooleanConstructor;
    /**
     * Use colorful icon
     */
    colorful: BooleanConstructor;
}>>, {
    inline: boolean;
    services: string | (string | ShareServiceOptions)[];
    titleGetter: (page: PageData) => string;
    descriptionGetter: (page: PageData) => string | undefined | null;
    summaryGetter: (page: PageData) => string | undefined | null;
    coverGetter: (page: PageData) => string | undefined | null;
    tagGetter: (page: PageData) => string | string[] | undefined | null;
    colorful: boolean;
}, {}>;

export { _default as default };
