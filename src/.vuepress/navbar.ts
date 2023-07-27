import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  "/base",
  "/windows",
  "/linux",
  "/volatility",
  "/android",
  "/ios",
  "/writeup",
  {
    text: "快捷跳转",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "电子数据取证靶场",
        icon: "bullseye",
        prefix: "bar/",
        link: "https://forensics.didctf.com",
      },
    ],
  },
]);
