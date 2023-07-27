import { usePageData, usePageFrontmatter } from "@vuepress/client";
import { computed, defineComponent, h } from "vue";
import { useBlogType } from "vuepress-plugin-blog2/client";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import ArticleList from "@theme-hope/modules/blog/components/ArticleList";
import ArticleType from "@theme-hope/modules/blog/components/ArticleType";
import BlogWrapper from "@theme-hope/modules/blog/components/BlogWrapper";
import InfoPanel from "@theme-hope/modules/blog/components/InfoPanel";
import { useArticles, useStars, } from "@theme-hope/modules/blog/composables/index";
import "../styles/page.scss";
export default defineComponent({
    name: "BlogPage",
    setup() {
        const blogType = useBlogType();
        const frontmatter = usePageFrontmatter();
        const page = usePageData();
        const articles = useArticles();
        const stars = useStars();
        const items = computed(() => {
            const { key = "", type } = frontmatter.value.blog || {};
            return key === "star"
                ? stars.value.items
                : type === "type" && key
                    ? blogType.value.items
                    : articles.value.items;
        });
        return () => h(BlogWrapper, () => h("div", { class: "vp-page vp-blog" }, h("div", { class: "blog-page-wrapper" }, [
            h("main", { id: "main-content", class: "vp-blog-main" }, [
                h(DropTransition, () => h(ArticleType)),
                h(DropTransition, { appear: true, delay: 0.24 }, () => h(ArticleList, { key: page.value.path, items: items.value })),
            ]),
            h(DropTransition, { delay: 0.16 }, () => h(InfoPanel, { key: "blog" })),
        ])));
    },
});
//# sourceMappingURL=BlogType.js.map