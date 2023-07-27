import * as vue from 'vue';
import { PropType, VNode } from 'vue';
import { RouteMeta } from 'vue-router';

declare const _default: vue.DefineComponent<{
    /**
     * Catalog Base
     *
     * 目录的基础路径
     *
     * @default current route base
     */
    base: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Max level of catalog
     *
     * @description only 1,2,3 are supported
     *
     * Catalog 的最大层级
     *
     * @description 目前仅支持 1,2,3
     *
     * @default 3
     */
    level: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Page title getter
     *
     * 页面标题获取器
     */
    titleGetter: {
        type: PropType<(meta: RouteMeta) => string>;
        default: (meta: RouteMeta) => unknown;
    };
    /**
     * Page icon getter
     *
     * 页面图标获取器
     */
    iconGetter: {
        type: PropType<(meta: RouteMeta) => string>;
        default: (meta: RouteMeta) => unknown;
    };
    /**
     * Page order getter
     *
     * 页面排序获取器
     */
    orderGetter: {
        type: PropType<(meta: RouteMeta) => number>;
        default: (meta: RouteMeta) => {};
    };
    /**
     * Whether page should be indexed
     *
     * 页面是否应该被索引
     */
    shouldIndex: {
        type: PropType<(meta: RouteMeta) => boolean>;
        default: (meta: RouteMeta) => boolean;
    };
}, () => VNode, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    /**
     * Catalog Base
     *
     * 目录的基础路径
     *
     * @default current route base
     */
    base: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Max level of catalog
     *
     * @description only 1,2,3 are supported
     *
     * Catalog 的最大层级
     *
     * @description 目前仅支持 1,2,3
     *
     * @default 3
     */
    level: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Page title getter
     *
     * 页面标题获取器
     */
    titleGetter: {
        type: PropType<(meta: RouteMeta) => string>;
        default: (meta: RouteMeta) => unknown;
    };
    /**
     * Page icon getter
     *
     * 页面图标获取器
     */
    iconGetter: {
        type: PropType<(meta: RouteMeta) => string>;
        default: (meta: RouteMeta) => unknown;
    };
    /**
     * Page order getter
     *
     * 页面排序获取器
     */
    orderGetter: {
        type: PropType<(meta: RouteMeta) => number>;
        default: (meta: RouteMeta) => {};
    };
    /**
     * Whether page should be indexed
     *
     * 页面是否应该被索引
     */
    shouldIndex: {
        type: PropType<(meta: RouteMeta) => boolean>;
        default: (meta: RouteMeta) => boolean;
    };
}>>, {
    base: string;
    level: number;
    titleGetter: (meta: RouteMeta) => string;
    iconGetter: (meta: RouteMeta) => string;
    orderGetter: (meta: RouteMeta) => number;
    shouldIndex: (meta: RouteMeta) => boolean;
}, {}>;

export { _default as default };
