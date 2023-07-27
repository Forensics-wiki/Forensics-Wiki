import { h } from "vue";
import "../styles/toggle-navbar-button.scss";
const ToggleNavbarButton = ({ active = false }, { emit }) => h("button", {
    type: "button",
    class: ["vp-toggle-navbar-button", { "is-active": active }],
    "aria-label": "Toggle Navbar",
    "aria-expanded": active,
    "aria-controls": "nav-screen",
    onClick: () => emit("toggle"),
}, h("span", [
    h("span", { class: "vp-top" }),
    h("span", { class: "vp-middle" }),
    h("span", { class: "vp-bottom" }),
]));
ToggleNavbarButton.displayName = "ToggleNavbarButton";
export default ToggleNavbarButton;
//# sourceMappingURL=ToggleNavbarButton.js.map