import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  { text: "引入", icon: "yinru", link: "/forensics-yinru/" },
  { text: "基础工具使用", icon: "tool", link: "/forensics-base/" },
  { text: "Windows取证", icon: "windows", link: "/demo/" },
  { text: "Linux取证", icon: "linux", link: "/forensics-linux/" },
  { text: "内存取证", icon: "ram", link: "/forensics-ram/" },
  { text: "安卓取证", icon: "android", link: "/forensics-android/" },
  { text: "苹果取证", icon: "apple", link: "/forensics-apple/" },
  { text: "磁盘分析", icon: "harddisk", link: "/forensics-disk/" },
  { text: "apk分析", icon: "apk", link: "/forensics-apk/" },
  { text: "恶意程序分析", icon: "exe", link: "/forensics-exe/" },
  { text: "流量分析", icon: "liuliang", link: "/forensics-liuliang/" },
]);
