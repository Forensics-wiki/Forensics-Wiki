import type { PropType, VNode } from "vue";
import type { ResolvedHopeThemeSidebarGroupItem } from "../../../../shared/index.js";
import "../styles/sidebar-group.scss";
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<ResolvedHopeThemeSidebarGroupItem>;
        required: true;
    };
    open: {
        type: BooleanConstructor;
        required: true;
    };
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "toggle"[], "toggle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<ResolvedHopeThemeSidebarGroupItem>;
        required: true;
    };
    open: {
        type: BooleanConstructor;
        required: true;
    };
}>> & {
    onToggle?: (...args: any[]) => any;
}, {}>;
export default _default;
