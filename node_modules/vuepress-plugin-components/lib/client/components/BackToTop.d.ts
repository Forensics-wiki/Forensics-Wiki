import * as vue from 'vue';
import { VNode } from 'vue';

declare const _default: vue.DefineComponent<{
    /**
     * Threshold distance in pixels to display the button
     *
     * 显示按钮的阈值距离，单位为像素
     */
    threshold: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 是否隐藏浏览进度条
     */
    noProgress: BooleanConstructor;
}, () => VNode, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    /**
     * Threshold distance in pixels to display the button
     *
     * 显示按钮的阈值距离，单位为像素
     */
    threshold: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 是否隐藏浏览进度条
     */
    noProgress: BooleanConstructor;
}>>, {
    threshold: number;
    noProgress: boolean;
}, {}>;

export { _default as default };
