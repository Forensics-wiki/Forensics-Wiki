import type { App } from "@vuepress/core";
import type { ThemeStatus } from "./status.js";
import { HopeThemeConfig, HopeThemeOptions } from "../shared/index.js";
/**
 * Get client-side `themeConfig`
 */
export declare const getThemeConfig: (app: App, themeOptions: HopeThemeOptions, { enableBlog }: ThemeStatus) => HopeThemeConfig;
