import type { VNode } from "vue";
import "vuepress-shared/client/styles/message.scss";
import "../styles/pagination.scss";
declare const _default: import("vue").DefineComponent<{
    /**
     * Number of total items
     *
     * 项目总数
     */
    total: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Items per page
     *
     * 每页项目数
     */
    perPage: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Current page number
     *
     * 当前页面
     */
    current: {
        type: NumberConstructor;
        default: number;
    };
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "updateCurrentPage"[], "updateCurrentPage", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Number of total items
     *
     * 项目总数
     */
    total: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Items per page
     *
     * 每页项目数
     */
    perPage: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Current page number
     *
     * 当前页面
     */
    current: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onUpdateCurrentPage?: (...args: any[]) => any;
}, {
    total: number;
    perPage: number;
    current: number;
}, {}>;
export default _default;
