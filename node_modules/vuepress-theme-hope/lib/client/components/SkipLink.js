import { usePageData } from "@vuepress/client";
import { defineComponent, h, onMounted, shallowRef, watch } from "vue";
import { useThemeLocaleData } from "@theme-hope/composables/index";
import "../styles/skip-link.scss";
export default defineComponent({
    name: "SkipLink",
    props: {
        /** @description Content ID */
        content: {
            type: String,
            default: "main-content",
        },
    },
    setup(props) {
        const page = usePageData();
        const themeLocale = useThemeLocaleData();
        const skipToMainContent = shallowRef();
        const focusMainContent = ({ target }) => {
            const el = document.querySelector(target.hash);
            if (el) {
                const removeTabIndex = () => {
                    el.removeAttribute("tabindex");
                    el.removeEventListener("blur", removeTabIndex);
                };
                el.setAttribute("tabindex", "-1");
                el.addEventListener("blur", removeTabIndex);
                el.focus();
                window.scrollTo(0, 0);
            }
        };
        onMounted(() => {
            watch(() => page.value.path, () => skipToMainContent.value.focus());
        });
        return () => [
            h("span", {
                ref: skipToMainContent,
                tabindex: "-1",
            }),
            h("a", {
                href: `#${props.content}`,
                class: "vp-skip-link sr-only",
                onClick: focusMainContent,
            }, themeLocale.value.routeLocales.skipToContent),
        ];
    },
});
//# sourceMappingURL=SkipLink.js.map