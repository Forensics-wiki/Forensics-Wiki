import { defineClientConfig } from "@vuepress/client";
import { h } from "vue";

import { useStyleTag } from "E:/github/Forensics-Wiki/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "E:/github/Forensics-Wiki/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "E:/github/Forensics-Wiki/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "E:/github/Forensics-Wiki/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Badge", Badge);
    app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/c/font_3784713_b33y2e3dhjg.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
