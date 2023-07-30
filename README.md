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

- 安卓取证
  - 短信/彩信取证
  - Android数据存储技术

- IOS取证
  - 短信/彩信取证

- 赛题Writeup
  - 首届盘古石电子数据取证大赛晋级赛Writeup 
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

## 贡献👥

> 注意：单个分类的侧边栏在`src/.vuepress/sidebar.ts`中，导航栏位于`src/.vuepress/navbar.ts`中，编写完成后请使用`pnpm docs:build`进行build

1. 根据离线部署中的文档，配置本地环境
2. 在本地fork本项目
3. 本地编写
4. PR项目

具体贡献方式可参考：[基本贡献方式 - CTF Wiki](https://ctf-wiki.org/contribute/basic-contribute-approach/)

> 亲爱的贡献者，
>
> 感谢您对 Forensics-Wiki 项目的兴趣和愿意为其贡献您的时间和才能！我们非常欢迎新的作者和贡献者加入我们的团队，共同推进数字取证领域的知识共享。
>
> 在您开始编写内容之前，请仔细阅读以下注意事项，以确保您的贡献能够与项目整体保持一致并得到有效的整合：
>
> 1. **明确项目范围：** 请确保您的内容与项目的主题和目标相符。在编写之前，建议查看项目的 README 或相关文档，了解项目的定位和范围。
> 2. **使用清晰的语言：** 在编写内容时，请尽量使用简洁明了的语言。考虑到可能会有不同背景的读者阅读您的内容，尽量避免使用过于专业或晦涩的术语。
> 3. **提供示例和截图：** 如有可能，请为您的内容提供相关示例代码和截图。这将有助于读者更好地理解您的解释和演示。如有需要，可联系我，我将为您免费提供第三方付费图床。
> 4. **注重文档格式：** 请确保您的文档格式清晰，包括正确的标题、列表、段落和代码块等。合适的文档格式可以提高内容的可读性和易于维护。
> 5. **文档的准确性：** 我们非常重视内容的准确性和可靠性。在编写内容时，请确保您提供的信息是经过验证的，并且尽量避免误导性的陈述。
> 6. **避免版权问题：** 如果您引用了其他来源的内容，请确保您有权使用该内容，并正确地标注出处。
> 7. **尊重他人的贡献：** 如果您对其他作者的贡献有意见或建议，欢迎通过合适的方式提出。尊重他人的贡献是维护开源社区友好氛围的重要一环。
> 8. **及时交流：** 如果您在编写过程中遇到问题或需要帮助，请随时与我们的团队交流。我们乐于提供支持和解答疑问。
> 9. **感谢您的贡献：** 最后，感谢您为 Forensics-Wiki 项目做出的贡献！您的努力将有助于项目的持续发展和数字取证知识的传播。
>
> 如果您有任何疑问或需要进一步的帮助，请不要犹豫与我们联系。期待您的优秀贡献！

## Star History ✨

[![Star History Chart](https://api.star-history.com/svg?repos=Forensics-wiki/Forensics-Wiki&type=Date)](https://star-history.com/#Forensics-wiki/Forensics-Wiki&Date)


## Copyleft

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a>进行许可。
