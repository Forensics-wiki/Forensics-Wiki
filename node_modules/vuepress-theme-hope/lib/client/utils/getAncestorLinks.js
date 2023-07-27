import { removeEndingSlash } from "@vuepress/shared";
export const getAncestorLinks = (path, routeLocale) => {
    const routePaths = path.replace(routeLocale, "/").split("/");
    const result = [];
    let link = removeEndingSlash(routeLocale);
    // generate links
    routePaths.forEach((name, index) => {
        if (index !== routePaths.length - 1) {
            link += `${name}/`;
            result.push({ link, name: name || "Home" });
        }
        else if (name !== "") {
            link += name;
            result.push({ link, name });
        }
    });
    return result;
};
//# sourceMappingURL=getAncestorLinks.js.map