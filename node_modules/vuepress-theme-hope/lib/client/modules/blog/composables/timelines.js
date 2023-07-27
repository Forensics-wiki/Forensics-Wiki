import { computed, inject, provide } from "vue";
import { useBlogType } from "vuepress-plugin-blog2/client";
import { getDate } from "vuepress-shared/client";
import { ArticleInfoType } from "../../../../shared/index.js";
export const timelinesSymbol = Symbol(__VUEPRESS_DEV__ ? "timelines" : "");
/**
 * Inject timelines
 */
export const useTimelines = () => {
    const timelines = inject(timelinesSymbol);
    if (!timelines)
        throw new Error("useTimelines() is called without provider.");
    return timelines;
};
/**
 * Provide timelines
 */
export const setupTimelines = () => {
    const timelines = useBlogType("timeline");
    const timelineItems = computed(() => {
        const timelineItems = [];
        // filter before sort
        timelines.value.items.forEach(({ info, path }) => {
            const date = getDate(info[ArticleInfoType.date]);
            const year = date?.getFullYear();
            const month = date ? date.getMonth() + 1 : null;
            const day = date?.getDate();
            if (year && month && day) {
                if (!timelineItems[0] || timelineItems[0].year !== year)
                    timelineItems.unshift({ year, items: [] });
                timelineItems[0].items.push({
                    date: `${month}/${day}`,
                    info,
                    path,
                });
            }
        });
        return {
            ...timelines.value,
            config: timelineItems.reverse(),
        };
    });
    provide(timelinesSymbol, timelineItems);
};
//# sourceMappingURL=timelines.js.map