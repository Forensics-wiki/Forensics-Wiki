import { convertFrontmatter, convertNavbarConfig, convertSidebarConfig, convertThemeConfig, config, navbarConfig, sidebarConfig, themeConfig, defineHopeConfig, defineThemeConfig, defineNavbarConfig, defineSidebarArrayConfig, defineSidebarConfig, defineSidebarObjectConfig } from "./compact/index.js";
export { config, navbarConfig, sidebarConfig, themeConfig, convertFrontmatter, convertNavbarConfig, convertSidebarConfig, convertThemeConfig, defineHopeConfig, defineThemeConfig, defineNavbarConfig, defineSidebarArrayConfig, defineSidebarConfig, defineSidebarObjectConfig, };
export * from "./themeConfig.js";
export * from "./helpers.js";
export * from "./locales/index.js";
export * from "./theme.js";
export * from "../shared/index.js";
declare const _default: {
    config: (userConfig: Record<string, unknown>) => import("@vuepress/cli").UserConfig;
    navbarConfig: (config: import("../shared/navbar.js").HopeThemeNavbarConfig) => import("../shared/navbar.js").HopeThemeNavbarConfig;
    sidebarConfig: (config: import("../shared/sidebar.js").HopeThemeSidebarConfig) => import("../shared/sidebar.js").HopeThemeSidebarConfig;
    themeConfig: (themeConfig: import("../shared/index.js").HopeThemeOptions) => import("../shared/index.js").HopeThemeOptions;
};
export default _default;
