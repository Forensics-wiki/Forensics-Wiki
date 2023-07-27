import { usePageData, usePageFrontmatter } from "@vuepress/client";
import { computed, inject } from "vue";
import { useReadingTimeData, useReadingTimeLocale, } from "vuepress-plugin-reading-time2/client";
import { getAuthor, getCategory, getDate, getTag, } from "vuepress-shared/client";
import { useThemeLocaleData } from "./themeData.js";
export const usePageAuthor = () => {
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    return computed(() => {
        const { author } = frontmatter.value;
        if (author)
            return getAuthor(author);
        if (author === false)
            return [];
        return getAuthor(themeLocale.value.author, false);
    });
};
export const usePageCategory = () => {
    const frontmatter = usePageFrontmatter();
    return computed(() => getCategory(frontmatter.value.category).map((name) => ({
        name,
        // this is a hack
        path: ENABLE_BLOG
            ? inject(Symbol.for("categoryMap"))?.value.map[name]
                ?.path || ""
            : "",
    })));
};
export const usePageTag = () => {
    const frontmatter = usePageFrontmatter();
    return computed(() => getTag(frontmatter.value.tag).map((name) => ({
        name,
        // this is a hack
        path: ENABLE_BLOG
            ? inject(Symbol.for("tagMap"))?.value.map[name]?.path || ""
            : "",
    })));
};
export const usePageDate = () => {
    const frontmatter = usePageFrontmatter();
    const page = usePageData();
    return computed(() => {
        const date = getDate(frontmatter.value.date);
        if (date)
            return date;
        const { createdTime } = page.value.git || {};
        if (createdTime)
            return new Date(createdTime);
        return null;
    });
};
export const usePageInfo = () => {
    const themeLocale = useThemeLocaleData();
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const author = usePageAuthor();
    const category = usePageCategory();
    const tag = usePageTag();
    const date = usePageDate();
    const readingTimeData = useReadingTimeData();
    const readingTimeLocale = useReadingTimeLocale();
    const info = computed(() => ({
        author: author.value,
        category: category.value,
        date: date.value,
        localizedDate: page.value.localizedDate,
        tag: tag.value,
        isOriginal: frontmatter.value.isOriginal || false,
        readingTime: readingTimeData.value,
        readingTimeLocale: readingTimeLocale.value,
        pageview: "pageview" in frontmatter.value ? frontmatter.value.pageview : true,
    }));
    const items = computed(() => "pageInfo" in frontmatter.value
        ? frontmatter.value.pageInfo
        : "pageInfo" in themeLocale.value
            ? themeLocale.value.pageInfo
            : null);
    return { info, items };
};
//# sourceMappingURL=pageInfo.js.map