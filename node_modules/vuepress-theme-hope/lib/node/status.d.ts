import type { HopeThemeOptions } from "../shared/index.js";
export interface ThemeStatus {
    enableBlog: boolean;
    enableEncrypt: boolean;
    enableSlide: boolean;
    supportPageview: boolean;
}
export declare const getStatus: (themeOptions: HopeThemeOptions) => ThemeStatus;
