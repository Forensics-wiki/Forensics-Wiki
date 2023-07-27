import { defineComponent, h } from "vue";
import { AuthorIcon } from "@theme-hope/modules/info/components/icons";
import { useMetaLocale } from "@theme-hope/modules/info/composables/index";
import "../styles/author-info.scss";
export default defineComponent({
    name: "AuthorInfo",
    inheritAttrs: false,
    props: {
        /**
         * Author information
         *
         * 作者信息
         */
        author: {
            type: Array,
            required: true,
        },
        /**
         * Whether in pure mode
         *
         * 是否处于纯净模式
         */
        pure: Boolean,
    },
    setup(props) {
        const metaLocale = useMetaLocale();
        return () => props.author.length
            ? h("span", {
                class: "page-author-info",
                "aria-label": `${metaLocale.value.author}${props.pure ? "" : "🖊"}`,
                ...(props.pure ? {} : { "data-balloon-pos": "down" }),
            }, [
                h(AuthorIcon),
                h("span", props.author.map((item) => item.url
                    ? h("a", {
                        class: "page-author-item",
                        href: item.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                    }, item.name)
                    : h("span", { class: "page-author-item" }, item.name))),
                h("span", {
                    property: "author",
                    content: props.author.map((item) => item.name).join(", "),
                }),
            ])
            : null;
    },
});
//# sourceMappingURL=AuthorInfo.js.map