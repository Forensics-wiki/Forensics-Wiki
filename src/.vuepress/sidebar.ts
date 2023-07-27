import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/demo/": [
    "",
    {
      text: "电子数据取证引入",
      icon: "1",
      prefix: "yr/",
      link: "yr/",
      children: "structure",
    },
    {
      text: "常见问题",
      icon: "2",
      prefix: "cj/",
      link: "cj/",
      children: "structure",
    },
    {
      text: "商业软件授权问题",
      icon: "3",
      prefix: "sq/",
      link: "sq/",
      children: "structure",
    },
  ],
  "/base/": [
    "",
    {
      text: "哈希值",
      icon: "hashtag",
      prefix: "hash/",
      link: "hash/",
      children: "structure",
    },
    {
      text: "VeraCrypt使用方法",
      icon: "lock",
      prefix: "vc/",
      link: "vc/",
      children: "structure",
    },
    {
      text: "证据文件格式",
      icon: "file",
      prefix: "gs/",
      link: "gs/",
      children: "structure",
    },
    {
      text: "镜像制作",
      icon: "wand-magic",
      prefix: "zz/",
      link: "zz/",
      children: "structure",
    },
    {
      text: "镜像仿真-DD、E01",
      icon: "info",
      prefix: "dd/",
      link: "dd/",
      children: "structure",
    },
    {
      text: "镜像仿真-Windows Server",
      icon: "info",
      prefix: "win/",
      link: "win/",
      children: "structure",
    },
    {
      text: "常见的时间戳转换",
      icon: "clock",
      prefix: "time/",
      link: "time/",
      children: "structure",
    },
  ],
  "/windows/": [
    "",
    {
      text: "Bitlocker加密与解密",
      icon: "unlock",
      prefix: "bitlocker/",
      link: "bitlocker/",
      children: "structure",
    },
    {
      text: "EFS加密与解密",
      icon: "unlock",
      prefix: "efs/",
      link: "efs/",
      children: "structure",
    },
  ],
  "/linux/": [
    "",
    {
      text: "介绍",
      icon: "play",
      prefix: "intr/",
      link: "intr/",
      children: "structure",
    },
    {
      text: "基础命令",
      icon: "terminal",
      prefix: "basecommand/",
      link: "basecommand/",
      children: "structure",
    },
    {
      text: "CDN基础",
      icon: "shield",
      prefix: "cdn/",
      link: "cdn/",
      children: "structure",
    },
  ],
  "/volatility/": [
    "",
    {
      text: "介绍",
      icon: "play",
      prefix: "js/",
      link: "js/",
      children: "structure",
    },
    {
      text: "安装",
      icon: "hand",
      prefix: "install/",
      link: "install/",
      children: "structure",
    },
    {
      text: "基本用法",
      icon: "star",
      prefix: "base/",
      link: "base/",
      children: "structure",
    },
    {
      text: "Windows命令参考",
      icon: "fab fa-windows",
      prefix: "winvol/",
      link: "winvol/",
      children: "structure",
    },
  ],
  "/android/": [
    "",
    {
      text: "彩信/短信取证",
      icon: "message",
      prefix: "dx/",
      link: "dx/",
      children: "structure",
    },
  ],
  "/ios/": [
    "",
    {
      text: "彩信/短信取证",
      icon: "message",
      prefix: "dx/",
      link: "dx/",
      children: "structure",
    },
  ],
  "/writeup/": [
    "",
    {
      text: "2022年第四届长安杯",
      icon: "award",
      prefix: "2022changancup/",
      link: "2022changancup/",
      children: "structure",
    },
  ]
});
