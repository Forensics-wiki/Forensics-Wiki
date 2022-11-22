import type { PageHeader } from "@vuepress/client";
import type { HopeThemeSidebarArrayConfig, HopeThemeSidebarObjectConfig, ResolvedSidebarItem, ResolvedHopeThemeSidebarHeaderItem } from "../../../../shared/index.js";
/**
 * Util to transform page header to sidebar item
 */
export declare const headerToSidebarItem: (header: PageHeader, headerDepth: number) => ResolvedHopeThemeSidebarHeaderItem;
export declare const headersToSidebarItemChildren: (headers: PageHeader[], headerDepth: number) => ResolvedHopeThemeSidebarHeaderItem[];
/**
 * Resolve sidebar items if the config is `heading`
 */
export declare const resolveHeadingSidebarItems: (headerDepth: number) => ResolvedHopeThemeSidebarHeaderItem[];
/**
 * Resolve sidebar items if the config is an array
 */
export declare const resolveArraySidebarItems: (sidebarConfig: HopeThemeSidebarArrayConfig, headerDepth: number, prefix?: string) => ResolvedSidebarItem[];
/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 */
export declare const resolveMultiSidebarItems: (sidebarConfig: HopeThemeSidebarObjectConfig, headerDepth: number) => ResolvedSidebarItem[];
/**
 * Resolve sidebar items global computed
 *
 * It should only be resolved and provided once
 */
export declare const resolveSidebarItems: () => ResolvedSidebarItem[];
