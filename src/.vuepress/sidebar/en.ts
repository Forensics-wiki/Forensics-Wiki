import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      icon: "yinru",
      text: "引入",
      prefix: "forensics-yinru/",
      link: "forensics-yinru/",
      children: "structure",
    },
    {
      icon: "windows",
      text: "Windows取证",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      icon: "linux",
      text: "Linux取证",
      prefix: "forensics-linux/",
      link: "forensics-linux/",
      children: "structure",
    },
    {
      icon: "ram",
      text: "内存取证",
      prefix: "forensics-ram/",
      link: "forensics-ram/",
      children: "structure",
    },
    {
      icon: "tool",
      text: "基础工具使用",
      prefix: "forensics-base/",
      link: "forensics-base/",
      children: "structure",
    },
    {
      icon: "android",
      text: "安卓取证",
      prefix: "forensics-android/",
      link: "forensics-android/",
      children: "structure",
    },
    {
      icon: "apple",
      text: "苹果取证",
      prefix: "forensics-apple/",
      link: "forensics-apple/",
      children: "structure",
    },
    {
      icon: "harddisk",
      text: "磁盘分析",
      prefix: "forensics-disk/",
      link: "forensics-disk/",
      children: "structure",
    },
    {
      icon: "apk",
      text: "apk分析",
      prefix: "forensics-apk/",
      link: "forensics-apk/",
      children: "structure",
    },
    {
      icon: "exe",
      text: "恶意程序分析",
      prefix: "forensics-exe/",
      link: "forensics-exe/",
      children: "structure",
    },
    {
      icon: "liuliang",
      text: "流量分析",
      prefix: "forensics-liuliang/",
      link: "forensics-liuliang/",
      children: "structure",
    },
  ],
});
