import { withBase } from "@vuepress/client";
import { isLinkHttp } from "@vuepress/shared";
import { h, resolveComponent } from "vue";
import { isAbsoluteUrl } from "vuepress-shared/client";
const HopeIcon = (props) => {
    const { icon = "", color, size } = props;
    const style = {};
    if (color)
        style["color"] = color;
    if (size)
        style["height"] = Number.isNaN(Number(size)) ? size : `${size}px`;
    return isLinkHttp(icon)
        ? h("img", { class: "icon", src: icon, "no-view": "", style })
        : isAbsoluteUrl(icon)
            ? h("img", { class: "icon", src: withBase(icon), "no-view": "", style })
            : h(resolveComponent("FontIcon"), props);
};
HopeIcon.displayName = "HopeIcon";
export default HopeIcon;
//# sourceMappingURL=HopeIcon.js.map