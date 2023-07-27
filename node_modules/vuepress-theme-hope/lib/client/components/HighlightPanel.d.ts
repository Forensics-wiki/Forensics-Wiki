import type { FunctionalComponent, VNode } from "vue";
import type { ThemeProjectHomeHighlightItem, ThemeProjectHomeHighlightOptions } from "../../shared/index.js";
import "../styles/highlight-panel.scss";
declare const HighlightPanel: FunctionalComponent<ThemeProjectHomeHighlightOptions, Record<never, never>, {
    image?: (props: ThemeProjectHomeHighlightOptions) => VNode[] | VNode | null;
    info?: (props: ThemeProjectHomeHighlightOptions) => VNode[] | VNode | null;
    highlights?: (props: ThemeProjectHomeHighlightItem[]) => VNode[] | VNode | null;
}>;
export default HighlightPanel;
