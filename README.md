[![Netlify Status](https://api.netlify.com/api/v1/badges/046a9ceb-8190-4e15-b8db-432a2eb948d0/deploy-status)](https://app.netlify.com/sites/iridescent-lollipop-b27be2/deploys)

# Forensics-Wiki

## 这是什么？🔎

这是一个关于电子数据取证的Wiki，地址是：https://www.forensics-wiki.com 。目的是为国内取证者提供一个高质量的取证学习平台。

## 为什么没有我想要的内容⌚

因为本项目还处于刚开始的阶段，各个方面的内容均未完善，期待各位师傅们一同编写本wiki。

## 如何加入Forensics-Wiki📣

可以直接[添加我们的群聊](https://jq.qq.com/?_wv=1027&k=2myrMcmN)，进入后即可共同编写本wiki。

## 学习后应该如何检验？✏️

配套有相关的[电子数据取证靶场](https://forensics.didctf.com)，可以发送相关身份证明来获得邀请码

## 目录结构🏠

- 引入
  - 电子数据取证引入
  - Forensics-Wiki常见问题
  - 商业软件授权问题
- 取证基础
  - 哈希值
  - VeraCrypt使用
  - 证据文件格式
  - 镜像制作
  - 镜像仿真-DD、E01
  - 镜像仿真-Windows Server
  - 常见的时间戳转换
- Windows取证
  - EFS加密与解密
  - Bitlocker加密与解密

- Linux&服务器取证
  - 介绍
  - 基础命令
  - CDN基础

- 内存取证
  - 介绍
  - 安装
  - 基本用法
  - Windows命令参考

- 赛题Writeup
  - 首届盘古石电子数据取证大赛晋级赛Writeup   (修改中)
  - 第四届长安杯电子数据取证大赛Writeup

## 离线部署💬

### 环境配置🍀

请参考：[VuePress Theme Hope](https://theme-hope.vuejs.press/zh/cookbook/tutorial/env.html)

### 基本指令🎍

```
pnpm docs:dev 启动开发服务器
pnpm docs:build 构建项目并输出
pnpm docs:clean-dev 清除缓存并启动开发服务器
```

## 共同编写🔱

1. 根据离线部署中的文档，配置本地环境
2. 在本地fork本项目
3. 本地编写
4. PR项目

> 注意：单个分类的侧边栏在`src/.vuepress/sidebar.ts`中，导航栏位于`src/.vuepress/navbar.ts`中，编写完成后请使用`pnpm docs:build`进行build

## Stars ✨

[![Star History Chart](https://api.star-history.com/svg?repos=Forensics-wiki/Forensics-Wiki&type=Date)](https://star-history.com/#Forensics-wiki/Forensics-Wiki&Date)

## Copyleft

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a>进行许可。
