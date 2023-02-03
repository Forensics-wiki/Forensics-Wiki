---
title: 哈希值（Hash）
order: 1
---

​											     <img src="./img/image-20230113212202498.png" alt="image-20230113212202498" style="zoom: 33%;" />



哈希是将目标文本转换成具有相同长度的、不可逆的杂凑字符串(或叫消息摘要)。



## 常见的哈希算法

- CRC

- MD4

- MD5(128 bit)

- SHA-1(160 bit)

- SHA-2(256 bit)

  目标文本 → Hash函数 → 消息摘要值

> 不同哈希算法进行哈希计算最终生成的哈希值长度不同

| 哈希算法 | 长度   | 摘要值字符数 | 哈希值摘要值范例                                             |
| :------- | :----- | :----------- | :----------------------------------------------------------- |
| MD5      | 128bit | 32个         | e10adc3949ba59abbe56e057f20f883e                             |
| SHA-1    | 160bit | 40个         | 7c4a8d09ca3762af61e59520943dc26494f8941b                     |
| SHA-2    | 256bit | 64个         | 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92 |
| SHA-3    | 512bit | 128个        | ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413 |

## 哈希碰撞

是指不同的信息通过某种哈希算法进行计算生成的摘要值相同,就称之为碰撞。目前已经发现MD5、SHA-1等哈希算法均存在一定概率的哈希碰撞。

http://www.win.tue.nl/hashclash/SoftIntCodeSign/HelloWorld-colliding.exe

http://www.win.tue.nl/hashclash/SoftIntCodeSign/GoodbyeWorld-colliding.exe

这两个程序会在屏幕上打印出不同的字符，但是它们的 MD5 都是一样的。

### 快速 MD5 碰撞生成器

http://www.win.tue.nl/hashclash/fastcoll_v1.0.0.5.exe.zip

源代码：http://www.win.tue.nl/hashclash/fastcoll_v1.0.0.5_source.zip



## 哈希应用

常用于数据的一次性校验

### 应用场景

1. 常用于证据保全，验证数据一致性(磁盘或文件内容被修改，可快速发现问题)
2. 文件内容比较，快速找到相同文件，实现特定文件快速发现或排除。
3. 密码保护
   范例：原文密码：123456
   第一轮md5：e10adc3949ba59abbe56e057f20f883e
   第二轮md5：14e1b600b1fd579f47433b88e8d85291



## 哈希计算工具



### Windows内置命令行工具

#### Get-FileHash

```powershell
Get-FileHash 文件名 -Algorithm MD5
```

:::tip

请在Powershell中使用此命令

:::

此处MD5可替代为`SHA1` `SHA256` `SHA384` `SHA512`等等



#### certutil （号称windows上自带的渗透利器）

原本，Certutil 是一个 CLI 程序，可用于转储和显示证书颁发机构（CA），配置信息，证书服务， CA 组件的备份和还原以及验证证书、密钥对和证书链，它作为证书服务的一部分安装。这个命令其实很好记，是certificate utill的缩写，utill一般是小工具的意思。就是证书小工具。

这里只介绍计算哈希值的功能，比如我们要得到计算器程序的 MD5 值，注意，这里的 MD5 一定要大写

```cmd
CertUtil -hashfile c:\Windows\System32\calc.exe MD5

tips: CertUtil 所支持的加密算法有 **MD2 MD4 MD5 SHA1 SHA256 SHA384 SHA512**
```

计算MD2，MD4等同理



### 第三方工具

#### HashMyFiles

<img src="https://bu.dusays.com/2022/11/21/637a54e942152.png" alt="image-20221121002519292" style="zoom:50%;" />

> 下载地址：https://hashmyfiles.en.softonic.com/

#### HashCalculator

![image-20221121002553900](https://bu.dusays.com/2022/11/21/637a550bd8732.png)

> 下载地址：https://sourceforge.net/projects/hashcalculator/



#### HashCalc

内网里常用，感觉比上面的工具类型更多一点，推荐这个

<img src="./img/image-20230113211736203.png" alt="image-20230113211736203" style="zoom: 50%;" />

> download：[SlavaSoft HashCalc - Hash, CRC, and HMAC Calculator](https://www.slavasoft.com/hashcalc/)

