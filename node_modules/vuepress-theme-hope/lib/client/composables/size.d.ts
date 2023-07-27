import type { Ref } from "vue";
export interface WindowSizeRef {
    isMobile: Ref<boolean>;
    isPC: Ref<boolean>;
}
export declare const useWindowSize: () => WindowSizeRef;
