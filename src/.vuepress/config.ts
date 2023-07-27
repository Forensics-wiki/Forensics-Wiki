import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Forensics-Wiki",
  description: "电子数据取证综合文库",

  // Enable it with pwa
  // shouldPrefetch: false,
  theme,
  
});
