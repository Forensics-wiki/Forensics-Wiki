import type { AutoLink } from "../../shared/index.js";
/**
 * Resolve AutoLink props from string
 *
 * @example
 * - Input: '/README.md'
 * - Output: { text: 'Home', link: '/' }
 */
export declare const useAutoLink: (item: string, preferFull?: boolean) => AutoLink;
