import type { App, ComputedRef, InjectionKey, Ref } from "vue";
import type { DarkmodeOptions } from "../../../../shared/index.js";
export type DarkmodeStatus = "light" | "dark" | "auto";
export type DarkModeRef = ComputedRef<boolean>;
export type DarkModeStatusRef = Ref<DarkmodeStatus>;
export interface DarkMode {
    isDarkmode: DarkModeRef;
    config: ComputedRef<DarkmodeOptions>;
    status: DarkModeStatusRef;
    canToggle: ComputedRef<boolean>;
}
export declare const darkModeSymbol: InjectionKey<DarkMode>;
/**
 * Inject dark mode global computed
 */
export declare const useDarkmode: () => DarkMode;
export declare const injectDarkmode: (app: App) => void;
export declare const setupDarkmode: () => void;
declare module "vue" {
    interface ComponentCustomProperties {
        $isDarkmode: boolean;
    }
}
