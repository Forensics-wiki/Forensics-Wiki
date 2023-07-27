import { isString } from "@vuepress/shared";
import { h } from "vue";
import { useRoute } from "vue-router";
import AutoLink from "@theme-hope/components/AutoLink";
import HopeIcon from "@theme-hope/components/HopeIcon";
import { isActiveSidebarItem } from "@theme-hope/modules/sidebar/utils/index";
export const renderItem = (config, props) => isString(config.link)
    ? // if the item has link, render it as `<AutoLink>`
        h(AutoLink, {
            ...props,
            config: config,
        })
    : // if the item only has text, render it as `<p>`
        h("p", props, [h(HopeIcon, { icon: config.icon }), config.text]);
export const renderChildren = (children) => {
    const route = useRoute();
    if (!children)
        return null;
    return h("ul", { class: "vp-sidebar-sub-headers" }, children.map((child) => {
        const active = isActiveSidebarItem(route, child, true);
        return h("li", { class: "vp-sidebar-sub-header" }, [
            renderItem(child, {
                class: ["vp-sidebar-link", "vp-heading", { active }],
            }),
            renderChildren(child.children),
        ]);
    }));
};
//# sourceMappingURL=render.js.map