import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  
  lang: "zh-CN",

  theme,

  shouldPrefetch: false,
});
