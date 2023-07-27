import type { ComputedRef, Ref } from "vue";
import type { AuthorInfo } from "vuepress-shared/client";
import type { PageInfoProps } from "@theme-hope/modules/info/components/PageInfo";
import type { PageCategory, PageTag } from "@theme-hope/modules/info/utils/index";
import type { ArticleInfo, PageInfo } from "../../../../shared/index.js";
export type AuthorRef = ComputedRef<AuthorInfo[]>;
export declare const useArticleAuthor: (info: Ref<ArticleInfo>) => AuthorRef;
export type CategoryRef = ComputedRef<PageCategory[]>;
export declare const useArticleCategory: (info: Ref<ArticleInfo>) => CategoryRef;
export type TagRef = ComputedRef<PageTag[]>;
export declare const useArticleTag: (info: Ref<ArticleInfo>) => TagRef;
export type DateRef = ComputedRef<Date | null>;
export declare const useArticleDate: (info: Ref<ArticleInfo>) => DateRef;
export declare const useArticleInfo: (props: {
    info: ArticleInfo;
    path: string;
}) => {
    info: ComputedRef<PageInfoProps>;
    items: ComputedRef<PageInfo[] | false | undefined>;
};
