import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";
import { searchProPlugin } from "vuepress-plugin-search-pro";

const statisticsPlugin = (options, context) => ({
  name: 'statistics-plugin',
  clientAppEnhanceFiles: context => {
    return context.isProd
      ? require.resolve('./statistics.client.js')
      : require.resolve('./statistics.client.dev.js')
  }
});

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Forensics-Wiki",
  description: "电子数据取证综合文库",
  theme,
  
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
    statisticsPlugin, // 在这里添加统计插件
  ],
});
