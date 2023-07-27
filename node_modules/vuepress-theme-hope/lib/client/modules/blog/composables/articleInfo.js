import { computed, toRef } from "vue";
import { getReadingTimeLocale, useReadingTimeLocaleConfig, } from "vuepress-plugin-reading-time2/client";
import { getAuthor, getCategory, getDate, getTag, } from "vuepress-shared/client";
import { useThemeLocaleData } from "@theme-hope/composables/index";
import { useCategoryMap } from "./categoryMap.js";
import { useBlogOptions } from "./options.js";
import { useTagMap } from "./tagMap.js";
import { ArticleInfoType } from "../../../../shared/index.js";
export const useArticleAuthor = (info) => {
    const themeLocale = useThemeLocaleData();
    return computed(() => {
        const { [ArticleInfoType.author]: author } = info.value;
        if (author)
            return getAuthor(author);
        if (author === false)
            return [];
        return getAuthor(themeLocale.value.author, false);
    });
};
export const useArticleCategory = (info) => {
    const categoryMap = useCategoryMap();
    return computed(() => getCategory(info.value[ArticleInfoType.category]).map((name) => ({
        name,
        path: categoryMap.value.map[name].path,
    })));
};
export const useArticleTag = (info) => {
    const tagMap = useTagMap();
    return computed(() => getTag(info.value[ArticleInfoType.tag]).map((name) => ({
        name,
        path: tagMap.value.map[name].path,
    })));
};
export const useArticleDate = (info) => computed(() => {
    const { [ArticleInfoType.date]: timestamp } = info.value;
    return getDate(timestamp);
});
export const useArticleInfo = (props) => {
    const articleInfo = toRef(props, "info");
    const blogOptions = useBlogOptions();
    const author = useArticleAuthor(articleInfo);
    const category = useArticleCategory(articleInfo);
    const tag = useArticleTag(articleInfo);
    const date = useArticleDate(articleInfo);
    const readingTimeLocaleConfig = useReadingTimeLocaleConfig();
    const info = computed(() => ({
        author: author.value,
        category: category.value,
        date: date.value,
        localizedDate: articleInfo.value[ArticleInfoType.localizedDate] || "",
        tag: tag.value,
        isOriginal: articleInfo.value[ArticleInfoType.isOriginal] || false,
        readingTime: articleInfo.value[ArticleInfoType.readingTime] || null,
        readingTimeLocale: articleInfo.value[ArticleInfoType.readingTime] &&
            readingTimeLocaleConfig.value
            ? getReadingTimeLocale(articleInfo.value[ArticleInfoType.readingTime], readingTimeLocaleConfig.value)
            : null,
        pageview: props.path,
    }));
    const items = computed(() => blogOptions.value.articleInfo);
    return { info, items };
};
//# sourceMappingURL=articleInfo.js.map