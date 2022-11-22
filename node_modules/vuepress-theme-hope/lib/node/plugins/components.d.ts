import type { AvailableComponent } from "vuepress-plugin-components";
import type { Plugin } from "@vuepress/core";
import type { HopeThemeOptions } from "../../shared/index.js";
export declare const getComponentsPlugin: (components: AvailableComponent[] | undefined, options: Pick<HopeThemeOptions, "addThis" | "backToTop" | "hostname" | "iconAssets" | "iconPrefix">) => Plugin;
