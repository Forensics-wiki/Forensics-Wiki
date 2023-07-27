import { defineComponent, h } from "vue";
import BlogHome from "@theme-hope/modules/blog/components/BlogHome";
import BlogWrapper from "@theme-hope/modules/blog/components/BlogWrapper";
export default defineComponent({
    name: "BlogHome",
    setup() {
        return () => h(BlogWrapper, () => h(BlogHome));
    },
});
//# sourceMappingURL=BlogHome.js.map