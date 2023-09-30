import { defineClientConfig } from "@vuepress/client";
import ChartJS from "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/reveal.js/dist/reveal.css";
import Presentation from "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import { injectRevealConfig } from "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Playground from "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/katex/dist/katex.min.css";
import "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";
import { injectVuePlaygroundConfig } from "/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    injectRevealConfig(app);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    injectVuePlaygroundConfig(app);
    app.component("VuePlayground", defineAsyncComponent(() => import("/Users/gszf/Documents/GitHub/Forensics-Wiki/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
  },
  setup: () => {

  }
});
