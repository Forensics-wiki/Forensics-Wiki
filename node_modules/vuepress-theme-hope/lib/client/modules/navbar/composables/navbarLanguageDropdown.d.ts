import type { ComputedRef } from "vue";
import type { AutoLink, HopeThemeNavGroup } from "../../../../shared/index.js";
/**
 * Get navbar config of select language dropdown
 */
export declare const useNavbarLanguageDropdown: () => ComputedRef<HopeThemeNavGroup<AutoLink> | null>;
