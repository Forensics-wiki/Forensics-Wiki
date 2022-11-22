import type { PropType, VNode } from "vue";
import type { AutoLink as AutoLinkType, HopeThemeNavGroup } from "../../../../shared/index.js";
import "../styles/dropdown-link.scss";
declare const _default: import("vue").DefineComponent<{
    config: {
        type: PropType<HopeThemeNavGroup<AutoLinkType | HopeThemeNavGroup<AutoLinkType>>>;
        required: true;
    };
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    config: {
        type: PropType<HopeThemeNavGroup<AutoLinkType | HopeThemeNavGroup<AutoLinkType>>>;
        required: true;
    };
}>>, {}>;
export default _default;
