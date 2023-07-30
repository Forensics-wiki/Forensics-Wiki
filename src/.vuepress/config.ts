import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Forensics-Wiki",
  description: "电子数据取证综合文库",
  theme,
  head: [
    // 添加统计代码的 <script> 标签
    [
      "script",
      {
        charset: "UTF-8",
        id: "LA_COLLECT",
        src: "//sdk.51.la/js-sdk-pro.min.js",
      },
    ],
    [
      "script",
      {},
      `LA.init({id:"K2xUaYGSFQf9s7gd",ck:"K2xUaYGSFQf9s7gd"})`,
    ],
  ],
  plugins: [
    searchProPlugin({
      indexContent: true,
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
