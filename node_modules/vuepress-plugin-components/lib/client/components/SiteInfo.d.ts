import * as vue from 'vue';
import { VNode } from 'vue';

declare const _default: vue.DefineComponent<{
    /**
     * Name of site
     *
     * 站点名称
     */
    name: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Site description
     *
     * 站点描述
     */
    desc: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Site logo
     *
     * 站点图标
     */
    logo: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Site link
     *
     * 站点链接
     */
    url: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Site preview image
     *
     * 站点预览
     */
    preview: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Site repo
     *
     * 站点仓库
     */
    repo: {
        type: StringConstructor;
        default: string;
    };
}, () => VNode, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    /**
     * Name of site
     *
     * 站点名称
     */
    name: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Site description
     *
     * 站点描述
     */
    desc: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Site logo
     *
     * 站点图标
     */
    logo: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Site link
     *
     * 站点链接
     */
    url: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Site preview image
     *
     * 站点预览
     */
    preview: {
        type: StringConstructor;
        required: true;
    };
    /**
     * Site repo
     *
     * 站点仓库
     */
    repo: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    desc: string;
    logo: string;
    repo: string;
}, {}>;

export { _default as default };
