import type { PropType, VNode } from "vue";
import "./hitokoto-blog-hero.scss";
declare const _default: import("vue").DefineComponent<{
    /** Hero text */
    text: {
        type: StringConstructor;
        required: true;
    };
    /** Hero image */
    image: {
        type: StringConstructor;
        default: null;
    };
    /** Hero image dark */
    imageDark: {
        type: StringConstructor;
        default: null;
    };
    /** Hero image alt */
    alt: {
        type: StringConstructor;
        required: true;
    };
    /** Hero image style */
    heroStyle: {
        type: PropType<string | Record<string, string>>;
        default: null;
    };
}, () => VNode[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /** Hero text */
    text: {
        type: StringConstructor;
        required: true;
    };
    /** Hero image */
    image: {
        type: StringConstructor;
        default: null;
    };
    /** Hero image dark */
    imageDark: {
        type: StringConstructor;
        default: null;
    };
    /** Hero image alt */
    alt: {
        type: StringConstructor;
        required: true;
    };
    /** Hero image style */
    heroStyle: {
        type: PropType<string | Record<string, string>>;
        default: null;
    };
}>>, {
    image: string;
    imageDark: string;
    heroStyle: string | Record<string, string>;
}, {}>;
export default _default;
