import { defineComponent, h } from "vue";
import { useThemeData, useThemeLocaleData, } from "@theme-hope/composables/index";
import { PrintIcon } from "@theme-hope/modules/info/components/icons";
import "../styles/print-button.scss";
export default defineComponent({
    name: "PrintButton",
    setup() {
        const themeData = useThemeData();
        const themeLocale = useThemeLocaleData();
        return () => themeData.value.print === false
            ? null
            : h("button", {
                type: "button",
                class: "print-button",
                title: themeLocale.value.metaLocales.print,
                onClick: () => {
                    window.print();
                },
            }, h(PrintIcon));
    },
});
//# sourceMappingURL=PrintButton.js.map