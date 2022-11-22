import type { App } from "@vuepress/core";
import type { ThemeStatus } from "../status.js";
import type { HopeThemePluginsOptions } from "../../shared/index.js";
export declare const prepareConfigFile: (app: App, plugins: HopeThemePluginsOptions, { enableBlog, enableEncrypt }: ThemeStatus) => Promise<string>;
