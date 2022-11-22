import type { VNode } from "vue";
import type { ResolvedSidebarItem, ResolvedHopeThemeSidebarHeaderItem } from "../../../../shared/index.js";
export declare const renderItem: (config: ResolvedSidebarItem, props: VNode["props"]) => VNode;
export declare const renderChildren: (children: ResolvedHopeThemeSidebarHeaderItem[]) => VNode | null;
