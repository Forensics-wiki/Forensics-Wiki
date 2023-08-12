---
title: 介绍
icon: play
order: 1
pageview: true
sidebar: structure
---

2007年，`Volatility`的第一个版本在黑帽DC公开发布。该软件基于多年来对高级内存分析和取证的公开学术研究。在此之前，数字调查主要集中在硬盘图像中发现违禁品。`Volatility`向人们介绍了使用易失性存储（RAM）中的数据分析系统运行时状态的力量。它还提供了一个跨平台、模块化和可扩展的平台，以鼓励在这一激动人心的研究领域开展进一步的工作。该项目的另一个主要目标是鼓励协作、创新和对攻击性软件社区中常见知识的可访问性。

从那时起，记忆分析已经成为数字调查未来最重要的课题之一，`Volatility`已经成为世界上使用最广泛的记忆取证平台。该项目得到取证行业最大、最活跃的社区之一的支持。`Volatility`还提供了一个独特的平台，使尖端研究能够立即转移到数字调查人员手中。因此，建立在`Volatility`之上的研究出现在顶级学术会议上，`Volatility`已经被用于过去十年中一些最关键的调查。它已经成为全世界执法、军事、学术界和商业调查人员所依赖的不可或缺的数字调查工具。



## 内存取证新选择

1. **[memory-image-auto-analyzer](https://github.com/Randark-JMT/memory-image-auto-analyzer)** From [Randark-JMT](https://github.com/Randark-JMT)

   一个雏形，一个基于Volatility进行可视化、自动化内存镜像分析的工具

   ### TODO - 项目规划-windows

   - pslist 和 pstree 整合进树状组件，支持选中进程进行 dump （ memdump 和 procdump ）
   - 加入网络分析，包含 netscan
   - 加入环境信息分析，包含注册表 printkey，环境变量 envars
   - 加入凭据分析，包含 lsadump ， hashdump 和 mimikatz （需要处理 crypto 库）
   - filescan 加入常见结果筛选，加入正则搜索，加入提取功能
   - 加入常见信息提取，如剪贴板，桌面截图

2. **[VolatilityPro](https://github.com/Tokeii0/VolatilityPro)** From [Tokeii0](https://github.com/Tokeii0/) 

   一款用于自动化处理内存取证的Python脚本，并提供GUI界面