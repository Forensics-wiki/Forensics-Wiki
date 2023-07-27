import type { PropType, SlotsType, VNode } from "vue";
import type { AutoLinkOptions as AutoLinkType, NavGroup } from "../../../../shared/index.js";
import "../styles/dropdown-link.scss";
declare const _default: import("vue").DefineComponent<{
    /**
     * Dropdown config
     *
     * 下拉列表配置
     */
    config: {
        type: PropType<NavGroup<AutoLinkType | NavGroup<AutoLinkType>>>;
        required: true;
    };
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Dropdown config
     *
     * 下拉列表配置
     */
    config: {
        type: PropType<NavGroup<AutoLinkType | NavGroup<AutoLinkType>>>;
        required: true;
    };
}>>, {}, SlotsType<{
    title: () => VNode;
}>>;
export default _default;
