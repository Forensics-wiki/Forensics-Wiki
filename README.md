[![Netlify Status](https://api.netlify.com/api/v1/badges/046a9ceb-8190-4e15-b8db-432a2eb948d0/deploy-status)](https://app.netlify.com/sites/iridescent-lollipop-b27be2/deploys)

# Forensics-Wiki

## 项目简介🔎

Forensics-Wiki是一个关于电子数据取证的维基百科，网址：https://www.forensics-wiki.com/ 。旨在为国内的取证从业者提供高质量的学习平台。

## 内容完善进程⌚

项目目前处于初始阶段，各个内容方面都尚未完全完善，我们期待各位专业人士的共同编写和补充。

## 加入我们📣

您可以直接[加入我们的群聊](https://jq.qq.com/?_wv=1027&k=2myrMcmN)，加入后即可参与共同编写项目内容。

## 学习后的检验✏️

我们提供相关的[电子数据取证靶场](https://forensics.didctf.com)，您可以通过关注微信公众号获取邀请码。

## 目录结构🏠

- 引言
  - 电子数据取证简介
  - Forensics-Wiki常见问题
  - 商业软件授权问题
- 取证基础
  - 哈希值的作用与计算
  - 使用VeraCrypt进行数据取证
  - 证据文件格式指南
  - 镜像制作方法与工具
  - 镜像仿真：DD、E01格式
  - 镜像仿真：Windows Server环境
  - 常见时间戳转换方法
- Windows取证
  - EFS加密与解密技术
  - Bitlocker加密与解密方法

- Linux与服务器取证
  - 概述
  - 基础命令
  - CDN基础知识

- 内存取证
  - 简介
  - 安装步骤
  - 基本用法
  - Windows内存取证命令参考

- 安卓取证
  - 短信/彩信取证技术
  - Android数据存储技术概述

- IOS取证
  - 短信/彩信取证方法

- 赛题解析
  - 首届盘古石电子数据取证大赛晋级赛解析
  - 第四届长安杯电子数据取证大赛解析

## 本地部署指南💬

### 环境配置🍀

请参考：[VuePress Theme Hope](https://theme-hope.vuejs.press/zh/cookbook/tutorial/env.html)

### 基本命令🎍

```
pnpm docs:dev  # 启动开发服务器
pnpm docs:build  # 构建项目并输出
pnpm docs:clean-dev  # 清除缓存并启动开发服务器
```

## 如何贡献👥

> 注意：每个分类的侧边栏在`src/.vuepress/sidebar.ts`中定义，导航栏位于`src/.vuepress/navbar.ts`中，完成编写后，请使用`pnpm docs:build`进行构建。

1. 参考离线部署文档，配置本地开发环境。
2. Fork本项目到您的GitHub仓库。
3. 在本地进行内容编写。
4. 向本项目提交Pull Request。

具体的贡献方式可以参考：[基本贡献方式 - CTF Wiki](https://ctf-wiki.org/contribute/basic-contribute-approach/)

> 尊敬的贡献者，
>
> 感谢您对Forensics-Wiki项目的兴趣，以及您愿意为项目贡献时间和才华！我们热忱欢迎新的作者和贡献者加入我们的团队，共同推动数字取证领域知识的分享。
>
> 在您开始撰写内容之前，请仔细阅读以下注意事项，以确保您的贡献能够与项目整体保持一致并得到有效整合：
>
> 1. **明确项目范围：** 请确保您的内容与项目的主题和目标相符。在编写之前，建议查阅项目的README或相关文档，了解项目的定位和范围。
> 2. **使用清晰语言：** 在编写内容时，请尽量使用简洁明了的语言。考虑到可能有不同背景的读者阅读您的内容，尽量避免使用过于专业或晦涩的术语。
> 3. **提供示例和截图：** 如果可行，请为您的内容提供相关示例代码和截图。这将有助于读者更好地理解您的解释和演示。如有需要，您可联系我，我将为您提供免费的第三方付费图床。
> 4. **注重文档格式：** 请确保您的文档格式清晰，包括正确的标题、列表、段落和代码块等。适当的文档格式能够提升内容的可读性和易于维护。
> 5. **准确性为本：** 我们非常重视内容的准确性和可靠性。在编写内容时，请确保您提供的信息经过验证，尽量避免误导性陈述。
> 6. **避免版权问题：** 如果您引用了其他来源的内容，请确保您有权使用该内容，并正确标注出处。
> 7. **尊重他人贡献：** 如果您对其他作者的贡献有疑问或建议，欢迎通过适当的方式提出。尊重他人的贡献是维护开源社区友好氛围的重要一环。
> 8. **及时交流：** 如果在编写过程中遇到问题或需要帮助，请随时与我们的团队取得联系。我们乐意提供支持和解答疑问。
> 9. **感谢您的贡献：** 最后，衷心感谢您为Forensics-Wiki项目做出的贡献！您的努力将有助于项目的持续发展和数字取证知识的传播。
>
> 如果您有疑问或需要进一步帮助，请随时与我们联系。期待您优秀的贡献！

## Star History ✨

[![Star History Chart](https://api.star-history.com/svg?repos=Forensics-wiki/Forensics-Wiki&type=Date)](https://star-history.com/#Forensics-wiki/Forensics-Wiki&Date)


## Copyleft

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a>进行许可。