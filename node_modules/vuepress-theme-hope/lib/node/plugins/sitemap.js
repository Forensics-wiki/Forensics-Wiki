import { sitemapPlugin } from "vuepress-plugin-sitemap2";
export const getSitemapPlugin = (options, hostname, legacy = false) => {
    if (options === false)
        return null;
    // disable sitemap if `hostname` is not set and no options for sitemap plugin
    if (!Object.keys(options || {}).length && !hostname)
        return null;
    return sitemapPlugin({ hostname, ...(options || {}) }, legacy);
};
//# sourceMappingURL=sitemap.js.map