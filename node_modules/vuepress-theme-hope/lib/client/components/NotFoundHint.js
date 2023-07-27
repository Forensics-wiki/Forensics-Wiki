import { defineComponent, h } from "vue";
import { useThemeLocaleData } from "@theme-hope/composables/index";
import "../styles/not-found-hint.scss";
export default defineComponent({
    name: "NotFoundHint",
    setup() {
        const themeLocale = useThemeLocaleData();
        const getMsg = () => {
            const messages = themeLocale.value.routeLocales["notFoundMsg"];
            return messages[Math.floor(Math.random() * messages.length)];
        };
        return () => h("div", { class: "not-found-hint" }, [
            h("p", { class: "error-code" }, "404"),
            h("h1", { class: "error-title" }, themeLocale.value.routeLocales["notFoundTitle"]),
            h("p", { class: "error-hint" }, getMsg()),
        ]);
    },
});
//# sourceMappingURL=NotFoundHint.js.map