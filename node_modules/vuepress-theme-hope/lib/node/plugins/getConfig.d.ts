import type { PluginConfig } from "@vuepress/core";
import type { HopeThemeConfig, HopeThemeOptions, HopeThemePluginsOptions } from "../../shared/index.js";
export declare const getPluginConfig: (plugins: HopeThemePluginsOptions, themeData: HopeThemeConfig, options: Pick<HopeThemeOptions, "addThis" | "backToTop" | "hostname" | "iconAssets" | "iconPrefix">, legacy?: boolean) => PluginConfig;
