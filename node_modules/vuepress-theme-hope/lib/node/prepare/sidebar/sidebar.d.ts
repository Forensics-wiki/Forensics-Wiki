import type { App } from "@vuepress/core";
import type { HopeThemeConfig, HopeThemeSidebarConfig, HopeThemeSidebarSorter } from "../../../shared/index.js";
export declare const getSidebarData: (app: App, themeConfig: HopeThemeConfig, sorter?: HopeThemeSidebarSorter) => HopeThemeSidebarConfig;
export declare const prepareSidebarData: (app: App, themeConfig: HopeThemeConfig, sorter?: HopeThemeSidebarSorter) => Promise<void>;
