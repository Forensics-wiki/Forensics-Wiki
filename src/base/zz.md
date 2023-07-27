---
title: 镜像制作
icon: wand-magic
order: 4
sidebar: structure
pageview: true
---

## 磁盘镜像

1. 打开FTK Imager选择文件
2. 点击创建磁盘镜像

![null](https://bu.dusays.com/2023/07/25/64bfec6748aa3.png)

3. 选择自己需要的源证据类型

![null](https://bu.dusays.com/2023/07/25/64bfec6893965.png)

4. 在镜像目标这里选择需要的制作镜像类型

![null](https://bu.dusays.com/2023/07/25/64bfec6a9d47d.png)

![null](https://bu.dusays.com/2023/07/25/64bfec6bd98b2.png)
关于各镜像的区别请参考 [证据文件格式](https://wj.didctf.com/doc/4/)

5. 证据项信息根据实际填写
6. 镜像目标选择

- 镜像目标文件夹：制作成功的镜像存放的文件夹，请存放在外置硬盘中，禁止放在嫌疑人计算机中。
- 镜像文件名：根据个人选择，注意不要包含后缀名。
- 镜像分片大小：如因镜像太大，可能导致无法打开，因为需要将镜像切片，此处即 每个分片的大小。
- 压缩：0为镜像原大小，数值越大 压缩程度越高。
- Use AD Encryption：请根据实际情况选择

![null](https://bu.dusays.com/2023/07/25/64bfec7051464.png)

7. 点击Finsh即可开始制作

## 内存镜像

1. 在FTK Imager中选择文件-内存抓取

![null](https://bu.dusays.com/2023/07/25/64bfec783fc71.png)

2. 内存抓取
3. 目标路径：抓取的内存镜像存放位置。
4. 目标文件名：需带上文件后缀名。
5. 包含pagefile：即电脑的`虚拟内存`，请参考：[百度百科](https://baike.baidu.com/item/pagefile.sys/460068?fr=aladdin)。
6. 创建AD1文件：请根据实际情况选择。
7. 点击 抓取内存 即可