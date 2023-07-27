import { Transition, defineComponent, h } from "vue";
import { useScrollPromise } from "@theme-hope/composables/index";
import "../../styles/fade-slide-y.scss";
export default defineComponent({
    name: "FadeSlideY",
    slots: Object,
    setup(_props, { slots }) {
        // handle scrollBehavior with transition
        const { resolve: onBeforeEnter, pending: onBeforeLeave } = useScrollPromise();
        return () => h(Transition, {
            name: "fade-slide-y",
            mode: "out-in",
            onBeforeEnter,
            onBeforeLeave,
        }, () => slots.default?.());
    },
});
//# sourceMappingURL=FadeSlideY.js.map