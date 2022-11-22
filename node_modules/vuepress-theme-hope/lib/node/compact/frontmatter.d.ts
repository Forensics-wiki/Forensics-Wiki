import type { HopeThemePageFrontmatter } from "../../shared/index.js";
/**
 * @deprecated You should use V2 standard frontmatter and avoid using it
 */
export declare const convertFrontmatter: (frontmatter: Record<string, unknown>, filePathRelative?: string) => HopeThemePageFrontmatter & Record<string, unknown>;
