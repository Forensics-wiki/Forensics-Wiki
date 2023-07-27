import { usePageData, usePageFrontmatter } from "@vuepress/client";
import { isPlainObject, isString } from "@vuepress/shared";
import { useEventListener } from "@vueuse/core";
import { computed, defineComponent, h } from "vue";
import { useRouter } from "vue-router";
import AutoLink from "@theme-hope/components/AutoLink";
import HopeIcon from "@theme-hope/components/HopeIcon";
import { useNavigate, useThemeLocaleData } from "@theme-hope/composables/index";
import { useSidebarItems } from "@theme-hope/modules/sidebar/composables/index";
import { resolveLinkInfo } from "@theme-hope/utils/index";
import "../styles/page-nav.scss";
/**
 * Resolve `prev` or `next` config from frontmatter
 */
const resolveFromFrontmatterConfig = (conf) => {
    const router = useRouter();
    if (conf === false)
        return false;
    if (isString(conf))
        return resolveLinkInfo(router, conf, true);
    if (isPlainObject(conf))
        return conf;
    return null;
};
/**
 * Resolve `prev` or `next` config from sidebar items
 */
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
    const index = sidebarItems.findIndex((item) => item.link === currentPath);
    if (index !== -1) {
        const targetItem = sidebarItems[index + offset];
        if (!targetItem?.link)
            return null;
        return targetItem;
    }
    for (const item of sidebarItems)
        if (item.children) {
            const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
            if (childResult)
                return childResult;
        }
    return null;
};
export default defineComponent({
    name: "PageNav",
    setup() {
        const themeLocale = useThemeLocaleData();
        const frontmatter = usePageFrontmatter();
        const sidebarItems = useSidebarItems();
        const page = usePageData();
        const navigate = useNavigate();
        const prevNavLink = computed(() => {
            const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
            return prevConfig === false
                ? null
                : prevConfig ||
                    (themeLocale.value.prevLink === false
                        ? null
                        : resolveFromSidebarItems(sidebarItems.value, page.value.path, -1));
        });
        const nextNavLink = computed(() => {
            const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
            return nextConfig === false
                ? null
                : nextConfig ||
                    (themeLocale.value.nextLink === false
                        ? null
                        : resolveFromSidebarItems(sidebarItems.value, page.value.path, 1));
        });
        useEventListener("keydown", (event) => {
            if (event.altKey)
                if (event.key === "ArrowRight") {
                    if (nextNavLink.value) {
                        navigate(nextNavLink.value.link);
                        event.preventDefault();
                    }
                }
                else if (event.key === "ArrowLeft") {
                    if (prevNavLink.value) {
                        navigate(prevNavLink.value.link);
                        event.preventDefault();
                    }
                }
        });
        return () => prevNavLink.value || nextNavLink.value
            ? h("nav", { class: "vp-page-nav" }, [
                prevNavLink.value
                    ? h(AutoLink, { class: "prev", config: prevNavLink.value }, () => [
                        h("div", { class: "hint" }, [
                            h("span", { class: "arrow start" }),
                            themeLocale.value.metaLocales.prev,
                        ]),
                        h("div", { class: "link" }, [
                            h(HopeIcon, {
                                icon: prevNavLink.value?.icon,
                            }),
                            prevNavLink.value?.text,
                        ]),
                    ])
                    : null,
                nextNavLink.value
                    ? h(AutoLink, { class: "next", config: nextNavLink.value }, () => [
                        h("div", { class: "hint" }, [
                            themeLocale.value.metaLocales.next,
                            h("span", { class: "arrow end" }),
                        ]),
                        h("div", { class: "link" }, [
                            nextNavLink.value?.text,
                            h(HopeIcon, {
                                icon: nextNavLink.value?.icon,
                            }),
                        ]),
                    ])
                    : null,
            ])
            : null;
    },
});
//# sourceMappingURL=PageNav.js.map