import type { Plugin } from "@vuepress/core";
import type { FeedOptions } from "vuepress-plugin-feed2";
import type { HopeThemeConfig } from "../../shared/index.js";
export declare const getFeedPlugin: (themeConfig: HopeThemeConfig, options?: Omit<FeedOptions, "hostname"> | false, hostname?: string, legacy?: boolean) => Plugin | null;
