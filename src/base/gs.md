---
title: 证据文件格式
icon: file
order: 3
sidebar: structure
pageview: true
---

## 位对位镜像:全盘或分区镜像文件

- E01
- Ex01
- DD/Raw Image(原始数据镜像)
- AFF
- Smart

## 特定数据镜像:逻辑证据文件

- L01
- Lx01
- AD1

## 虚拟磁盘

- VMDK
- VHD
- VHDX
- VDI

## 文件特点

### E01证据文件

- 支持无损压缩，精确镜像源介质中的数据;
- 可记录证据制作过程相关信息;
- 支持对源盘进行哈希计算并将其记录在证据文件内部;
- 支持证据文件的密码保护;
- 符合司法规范，通过美国法庭验证。

### Ex01文件

- 支持对数据块的加密(AES 256)，支持采用密码或非对称密钥(公钥/私钥)方式对证据文件进行保护;
- 压缩方法上不需要具体指定某一种压缩方法,压缩功能只提供“启用”和“禁用”。

### DD文件

- 兼容性较强，多数取证分析工具均支持该格式;
- 对原始数据进行获取，不经过压缩，速度快;

## 镜像软件列表

| 类型         | 名称                                                         |
| :----------- | :----------------------------------------------------------- |
| 免费镜像工具 | 美国FTK imager，美国Encase Imager/Tableau Imager，美国Paladin 俄罗斯Belkasoft Acquisition Tool 美国Autopsy 中国流火镜像大师 Myhex 加拿大Magnet Acquire |
| 商业镜像工具 | 德国Xways Imager 美国 MacQuisition 美国Smart Linux           |
| 免费挂载工具 | 美国Arsenal Imager Mounter 美国FTK Imager                    |
| 商业挂载工具 | 澳大利亚Mount Image Pro 美国Arsenal Imager Mounter专业版中国流火挂载 |