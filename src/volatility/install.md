---
title: 安装
icon: hand
order: 2
sidebar: structure
---

## 获取 Volatility

可以获取[稳定版本release](https://www.volatilityfoundation.org/releases)，也可直接从github clone。

```bash
$ git clone https://github.com/volatilityfoundation/volatility.git
```

之后将创建一个`volatility`的文件夹，随后可以从目录中直接启动`volatility`

## Volatility的安装

如果使用的是可执行文件，则无需安装，直接使用命令行启动即可，不用安装相关依赖，所有需要的东西都已经在`exe`中打包。

如果使用的是Pyinstaller（仅限Windows）可执行文件，可以双击然后按照安装说明进行操作。再次之前必须预先安装好`Python`。

如果您下载了 zip 或 tar 源代码存档（Windows、Linux、OSX），有两种方法可以“安装”代码：

1. 提取存档并运行`setup.py`. 这将负责将文件复制到磁盘上的正确位置。仅当您想从其他 Python 脚本访问 Volatility 命名空间时才需要运行`setup.py`，例如，如果您计划将 Volatility 作为库导入。优点：作为库易于使用。缺点：更难升级或卸载。
2. 将存档解压缩到您选择的目录。当你想使用 Volatility 时，只需执行 python `/path/to/directory/vol.py`。这是一种更简洁的方法，因为没有文件会移出您选择的目录，这使得在发布新版本时更容易升级到新版本。此外，您可以轻松地同时安装多个版本的 Volatility，只需将它们放在不同的目录中（如`/home/me/vol2.0`和`/home/me/vol2.1`）。优点：干净，易于运行多个版本，易于升级或卸载。缺点：更难用作库。

## 相关依赖

> 注意"相关依赖"内容不支持 可执行版本的Volatility 即：exe,因为相关依赖已经在exe文件中包含

> 同时，大多数的Volatility的功能，也可以在没有 相关依赖 的情况下运行，如果说打算使用相关的插件，或者增强体验，那么只需要安装相关的包

> 并且，如果是在Linux下使用Volatility，那么你可能需要安装相关的包的依赖 例：`apt-get install pcregrep libpcre++-dev python-dev -y`

### 推荐的依赖包

为了获得最全面的插件支持，你应该安装以下库。如果您不安装这些库，您可能会看到一条警告消息，但所有不依赖缺少的库的插件仍将正常工作。

- Distorm3

   

  \- 强大的 x86/AMD64 反汇编程序库

  - 依赖插件
    - apihooks
    - callbacks
    - 即时扫描
    - 适用于 Windows 8/2012 机器的kdbgscan, pslist, modules
    - volshell、linux_volshell 和 mac_volshell 中的反汇编命令

- Yara

   

  \- 恶意软件识别和分类工具

  - 依赖插件
    - yarascan、linux_yarascan、mac_yarascan
  - 注意：需要从主站获取yara，而不是使用pip直接安装。
  - 注意：如果使用的是Linux，那么就可能需要输入如下命令`echo "/usr/local/lib" >> /etc/ld.so.conf && ldconfig`

- PyCrypto

   

  \- Python 密码学工具包

  - 依赖插件
    - lsadump
    - hashdump
  - 注意：需要`python-dev`构建（除非你得到[预构建的二进制文件](http://www.voidspace.org.uk/python/modules.shtml#pycrypto)）

- PIL

   

  \- Python 图像库

  - 依赖插件
    - screenshots截图

- OpenPyxl

   

  \- 用于读取/写入 Excel 2007 xlsx/xlsm 文件的 Python 库

  - 依赖插件
    - 任何已转换为统一格式的插件（带`--output=xlsx`选项）

- ujson

   

  \- 超快速的 JSON 解析库

  - 依赖插件：任何使用`--output=html`