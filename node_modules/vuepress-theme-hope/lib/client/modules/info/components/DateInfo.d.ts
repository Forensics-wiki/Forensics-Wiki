import type { PropType, VNode } from "vue";
declare const _default: import("vue").DefineComponent<{
    /**
     * Date information
     *
     * 日期信息
     */
    date: {
        type: PropType<Date | null>;
        default: null;
    };
    /**
     * Localized date text
     *
     * 本地化的日期文字
     */
    localizedDate: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: BooleanConstructor;
}, () => VNode | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Date information
     *
     * 日期信息
     */
    date: {
        type: PropType<Date | null>;
        default: null;
    };
    /**
     * Localized date text
     *
     * 本地化的日期文字
     */
    localizedDate: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: BooleanConstructor;
}>>, {
    date: Date | null;
    pure: boolean;
    localizedDate: string;
}, {}>;
export default _default;
