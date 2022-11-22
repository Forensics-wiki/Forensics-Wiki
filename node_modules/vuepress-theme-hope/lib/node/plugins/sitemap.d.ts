import type { Plugin } from "@vuepress/core";
import type { SitemapOptions } from "vuepress-plugin-sitemap2";
export declare const getSitemapPlugin: (options?: Omit<SitemapOptions, "hostname"> | false, hostname?: string, legacy?: boolean) => Plugin | null;
