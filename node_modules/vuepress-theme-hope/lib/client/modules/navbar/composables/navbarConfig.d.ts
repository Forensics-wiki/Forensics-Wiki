import type { ComputedRef } from "vue";
import type { HopeThemeNavbarItem, HopeThemeNavbarGroup, ResolvedHopeThemeNavbarItem } from "../../../../shared/index.js";
export declare const resolveNavbarItem: (item: HopeThemeNavbarItem | HopeThemeNavbarGroup | string, prefix?: string) => ResolvedHopeThemeNavbarItem;
export declare const useNavbarConfig: () => ComputedRef<ResolvedHopeThemeNavbarItem[]>;
