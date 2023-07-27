import type { FunctionalComponent } from "vue";
import "../styles/toggle-sidebar-button.scss";
declare const ToggleSidebarButton: FunctionalComponent<{
    onToggle: () => void;
}, {
    toggle: () => void;
}>;
export default ToggleSidebarButton;
