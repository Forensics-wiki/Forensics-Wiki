import type { Plugin } from "@vuepress/core";
import type { HopeThemeBlogLocaleData, HopeThemeBlogPluginOptions, HopeThemeConfig } from "../../shared/index.js";
export declare const getBlogOptions: (options?: HopeThemeBlogPluginOptions | boolean) => HopeThemeBlogPluginOptions;
export declare const getTitleLocales: (themeData: HopeThemeConfig, key: keyof HopeThemeBlogLocaleData) => Record<string, string>;
export declare const getBlogPlugin: (themeData: HopeThemeConfig, options?: HopeThemeBlogPluginOptions | boolean) => Plugin | null;
