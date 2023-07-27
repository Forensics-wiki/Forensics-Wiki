import type { PropType, VNode } from "vue";
import type { ReadingTime, ReadingTimeLocale } from "vuepress-plugin-reading-time2/client";
declare const _default: import("vue").DefineComponent<{
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
        type: PropType<ReadingTime | null>;
        default: () => null;
    };
    /**
     * Reading time locale
     *
     * 阅读时间语言环境
     */
    readingTimeLocale: {
        type: PropType<ReadingTimeLocale | null>;
        default: () => null;
    };
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: BooleanConstructor;
}, () => VNode | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
        type: PropType<ReadingTime | null>;
        default: () => null;
    };
    /**
     * Reading time locale
     *
     * 阅读时间语言环境
     */
    readingTimeLocale: {
        type: PropType<ReadingTimeLocale | null>;
        default: () => null;
    };
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: BooleanConstructor;
}>>, {
    readingTime: ReadingTime | null;
    pure: boolean;
    readingTimeLocale: ReadingTimeLocale | null;
}, {}>;
export default _default;
