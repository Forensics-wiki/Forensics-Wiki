import type { PropType, VNode } from "vue";
import type { ResolvedHopeThemeSidebarHeaderItem, ResolvedHopeThemeSidebarPageItem } from "../../../../shared/index.js";
import "../styles/sidebar-child.scss";
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<ResolvedHopeThemeSidebarHeaderItem | ResolvedHopeThemeSidebarPageItem>;
        required: true;
    };
}, () => (VNode | null)[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<ResolvedHopeThemeSidebarHeaderItem | ResolvedHopeThemeSidebarPageItem>;
        required: true;
    };
}>>, {}>;
export default _default;
