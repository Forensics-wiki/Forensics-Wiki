import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Forensics-Wiki",
  description: "电子数据取证综合文库",

  // Enable it with pwa
  // shouldPrefetch: false,
  theme,

  head: [
    ['script', { charset: 'UTF-8', id: 'LA_COLLECT', src: '//sdk.51.la/js-sdk-pro.min.js' }],
    ['script', {}, `
      window.LA = window.LA || {};
      LA.id = "K2xUaYGSFQf9s7gd";
      LA.ck = "K2xUaYGSFQf9s7gd";
      (function () {
        var la = document.createElement('script'); la.type = 'text/javascript'; la.async = true;
        la.src = '//sdk.51.la/js-sdk-pro.min.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(la, s);
      })();
    `],
  ],
  
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
});
