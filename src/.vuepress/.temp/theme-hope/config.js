import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "D:/aforensicswiki/forensics-wiki/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "D:/aforensicswiki/forensics-wiki/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogIconComponent } from "D:/aforensicswiki/forensics-wiki/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import Slide from "D:/aforensicswiki/forensics-wiki/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "D:/aforensicswiki/forensics-wiki/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,
    Slide,
  }
});