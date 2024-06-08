---
title: VeraCrypt使用方法
---

许多年前，有一个名为 TrueCrypt 的加密软件。它的源码是可以得到的，尽管没有任何人声称曾对它进行过审计或贡献过。它的作者是（至今仍是）匿名的。不过，它是跨平台的，易于使用，而且真的非常有用。

TrueCrypt 允许你创建一个加密的文件“保险库”，在那里你可以存储任何类型的敏感信息（文本、音频、视频、图像、PDF 等）。只要你有正确的口令，TrueCrypt 就可以解密保险库，并在任何运行 TrueCrypt 的电脑上提供读写权限。这是一项有用的技术，它基本上提供了一个虚拟的、可移动的、完全加密的驱动器（除了文件以外），你可以在其中安全地存储你的数据。

TrueCrypt 最终关闭了，但一个名为 VeraCrypt 的替代项目迅速兴起，填补了这一空白。VeraCrypt 基于 TrueCrypt 7.1a，比原来的版本有许多改进（包括标准加密卷和引导卷的算法的重大变化）。在 VeraCrypt 1.12 及以后的版本中，你可以使用自定义迭代来提高加密安全性。更好的是，VeraCrypt 可以加载旧的 TrueCrypt 卷，所以如果你是 TrueCrypt 用户，可以很容易地将它们转移到 VeraCrypt 上。

## 安装

你可以从 [VeraCrypt 下载页面](https://veracrypt.fr/en/Downloads.html) 下载相应的安装文件，之后在所有主流平台上安装 VeraCrypt。

另外，你也可以自己从源码构建它。在 Linux 上，它需要 wxGTK3、makeself 和通常的开发栈（Binutils、GCC 等）。

当你安装后，从你的应用菜单中启动 VeraCrypt。

## 挂载加密卷

1. 打开VeraCrypt，首先在Setting中设置为中文。
   Setting-Language-简体中文-OK
   ![image-20221119212930254](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221119212930254.png)
2. 选择加密卷加载
   ![image-20221119213032371](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221119213032371.png)
3. 输入密码，如有密钥文件则使用密钥文件，如有PIM值则一同输入，选择加载即可
   ![image-20221119213237860](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221119213237860.png)
4. 加载成功后，在本地中即可显示出新加载的卷
   ![image-20221119213316095](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221119213316095.png)

## 总结

总的来说，VeraCrypt 的加密功能非常强大且安全，可以跨平台在 Win、Mac、Linux 系统上使用，加上支持虚拟磁盘、几乎无需等待的实时加密解密在使用上也很方便。

得益于开源，VeraCrypt 还有「第三方开发的」iOS、Android 客户端可供使用。免费、跨平台、开源这些特性相比 BitLocker 或者大部分加密工具都有优势。