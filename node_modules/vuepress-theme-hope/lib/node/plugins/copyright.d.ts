import type { Plugin } from "@vuepress/core";
import type { CopyrightOptions } from "vuepress-plugin-copyright2";
import type { HopeThemeConfig } from "../../shared/index.js";
export declare const getCopyrightPlugin: (themeConfig: HopeThemeConfig, options?: Partial<CopyrightOptions> | true, hostname?: string) => Plugin | null;
