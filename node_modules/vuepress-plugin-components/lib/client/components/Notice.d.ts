import { FunctionalComponent } from 'vue';

interface NoticeActionOption {
    /**
     * Action text
     *
     * 操作文字
     */
    text: string;
    /**
     * Action link
     *
     * 操作链接
     */
    link?: string;
    /**
     * Action type
     *
     * 操作类型
     *
     * @default "default"
     */
    type?: "primary" | "default";
}
interface NoticeItemOptions {
    /**
     * Notice title
     *
     * 通知标题
     */
    title: string;
    /**
     * Notice content
     *
     * 通知内容
     */
    content: string;
    /**
     * Notice key
     *
     * @description Used to identify and store the notice status
     *
     * Notice 的 key
     *
     * @description 用于标识和存储 notice 的状态
     */
    key?: string;
    /**
     * Whether show notice only once or show it in every visit
     *
     * 是否只显示一次通知
     *
     * @default false
     */
    showOnce?: boolean;
    /**
     * Whether the notice shall be confirmed
     *
     * 通知是否需要确认
     *
     * @default false
     */
    confirm?: boolean;
    /**
     * Whether the notice should appear fullscreen
     *
     * 通知是否应该全屏显示
     *
     * @default false
     */
    fullscreen?: boolean;
    /**
     * Notice actions
     *
     * 通知操作
     */
    actions?: NoticeActionOption[];
}

type NoticeClientOption = Omit<NoticeItemOptions, "key"> & {
    noticeKey?: string;
} & ({
    path: string;
} | {
    match: string;
});
declare const Notice: FunctionalComponent<{
    config: NoticeClientOption[];
}>;

export { Notice as default };
