---
title: 首届盘古石电子数据取证大赛晋级赛Writeup
icon: fab fa-windows
order: 2
sidebar: structure
---

# 2023盘古石杯晋级赛

容器密码： usy1UN2Mmgram&^d?0E5r9myrk!cmJGr

## Android程序分析

### 1、涉案应用刷刷樂的签名序列号是[答案：123ca12a][★☆☆☆☆]

11fcf899

![null](https://bu.dusays.com/2023/07/26/64c132b9b4a7d.png)

### 2、涉案应用刷刷樂是否包含读取短信权限[答案：是/否][★★☆☆☆]

否

![null](https://bu.dusays.com/2023/07/26/64c132b82523f.png)

### 3、涉案应用刷刷樂打包封装的调证ID值是[答案：123ca12a][★★☆☆☆]

a6021386163125

![null](https://bu.dusays.com/2023/07/26/64c132b819452.png)

### 4、涉案应用刷刷樂服务器地址域名是[答案：axa.baidun.com][★★★☆☆]

vip.shuadan.com

![null](https://bu.dusays.com/2023/07/26/64c132ba88b1e.png)

### 5、涉案应用刷刷樂是否存在录音行为[答案：是/否][★★★☆☆]

是

基本信息-安全检测-恶意行为报告

![null](https://bu.dusays.com/2023/07/26/64c132ba97814.png)

### 6、涉案应用未来资产的包名是[答案：axa.baidun.com][★☆☆☆☆]

plus.h5ce4b30d

![null](https://bu.dusays.com/2023/07/26/64c132bac9a10.png)

### 7、涉案应用未来资产的语音识别服务的调证key值是[答案：1ca2jc][★★☆☆☆]

53feacdd

![null](https://bu.dusays.com/2023/07/26/64c132b46008b.png)

### 8、涉案应用未来资产的服务器地址域名是[答案：axa.baidun.com][★★★☆☆]

vip.usdtre.club

![null](https://bu.dusays.com/2023/07/26/64c132b453f03.png)

### 9、涉案应用未来资产的打包封装的调证ID值是是[答案：axa.baidun.com][★★☆☆☆]

h5ce4b30d

![null](https://bu.dusays.com/2023/07/26/64c132b453f03.png)

## 移动智能终端

### 1、根据容恨寒的安卓手机分析，手机的蓝牙物理地址是[答案：B9:8B:35:8B:03:52][★☆☆☆☆]

A9:8B:34:8B:04:50

![null](https://bu.dusays.com/2023/07/26/64c132d3af684.png)

### 2、根据容恨寒的安卓手机分析，SIM卡的ICCID是[答案：80891103212348510720][★☆☆☆☆]

89014103211118510720

![null](https://bu.dusays.com/2023/07/26/64c132d33da9c.png)

### 3、根据容恨寒的安卓手机分析，团队内部沟通的聊天工具程序名称是[答案：微信][★☆☆☆☆]

Potato

找到Potato

![null](https://bu.dusays.com/2023/07/26/64c132d54a040.png)

### 4、根据容恨寒的安卓手机分析，团队内部沟通容恨寒收到的最后一条聊天信息内容是[答案：好的][★★★☆☆]

后面再给你们搞

在/data/data/com.qim.imm/databases/im_db_225_18969939616_8AF2C81F-58C2-8459-C492-9C4F65E6BC1E.db

导出后用Navicat打开，找到一个表

![null](https://bu.dusays.com/2023/07/26/64c132d6140cc.png)

SELECT SENDERNAME,TONAME,SUBJECT,DATE,BODY FROM "BAProvider$j" WHERE TONAME='容恨寒' ORDER BY DATE DESC LIMIT 1筛选出最后一条发送给容恨寒的消息

![null](https://bu.dusays.com/2023/07/26/64c132d384a13.png)

解base64

![null](https://bu.dusays.com/2023/07/26/64c132d31b528.png)

### 5、根据容恨寒的安卓手机分析，收到的刷单.rar的MD5值是[答案：202cb962ac59075b964b07152d234b70][★★☆☆☆]

dc52d8225fd328c592841cb1c3cd1761

在检材中搜索刷单.rar，导出

![null](https://bu.dusays.com/2023/07/26/64c132dc4c4a4.png)

计算哈希值

![null](https://bu.dusays.com/2023/07/26/64c132dc20530.png)

### 6、根据容恨寒的安卓手机分析，收到的刷单.rar的解压密码是[答案：abcdg@1234@hd][★★★☆☆]

wlzhg@3903@xn

接第3题，在数据库中找到一条关于密码规则的消息

![null](https://bu.dusays.com/2023/07/26/64c132dc2124f.png)

进行掩码攻击，爆破一下中间4位数字

![null](https://bu.dusays.com/2023/07/26/64c132dce1897.png)

### 7、根据容恨寒的安卓手机分析，发送刷单.rar的用户的手机号是[答案：15137321234][★★★★☆]

15137326185

导出聊天记录表为xlsx文件

![null](https://bu.dusays.com/2023/07/26/64c132e12a0c4.png)

脚本把base64转明文

![null](https://bu.dusays.com/2023/07/26/64c132de61ef0.png)

![null](https://bu.dusays.com/2023/07/26/64c132e6369e3.png)

找到与文件有关的表

![null](https://bu.dusays.com/2023/07/26/64c132e77000f.png)

导出，脚本解base64转明文

![null](https://bu.dusays.com/2023/07/26/64c132e6b5b91.png)

得到发送刷单.rar的用户为德彦慧，找到含有用户信息的表

![null](https://bu.dusays.com/2023/07/26/64c132e6e6695.png)

### 8、根据容恨寒的安卓手机分析，发送多个报表的用户来自哪个部门[答案：理财部][★★★★★]

技术部

根据聊天记录可以判断报表文件发送者是臧觅风，找到含有用户信息的表中臧觅风的手机号

![null](https://bu.dusays.com/2023/07/26/64c132e929d93.png)

找到部门相关的表

![null](https://bu.dusays.com/2023/07/26/64c132e944e1f.png)

找到一个记录了userid和parentid关联的表

![null](https://bu.dusays.com/2023/07/26/64c132f13c5de.png)

### 9、根据容恨寒的安卓手机分析，MAC的开机密码是[答案：asdcz][★☆☆☆☆]

apple

![null](https://bu.dusays.com/2023/07/26/64c132f0e37ab.png)

### 10、根据容恨寒的安卓手机分析，苹果手机的备份密码前4位是[答案：1234][★☆☆☆☆]

1976

![null](https://bu.dusays.com/2023/07/26/64c132f1e0e64.png)

### 11、根据魏文茵苹果手机分析，IMEI号是？[答案格式:239471000325479][★☆☆☆☆]

358360063200634

![null](https://bu.dusays.com/2023/07/26/64c132f1ebc76.png)

### 12、根据魏文茵苹果手机分析，可能使用过的电话号码不包括？[答案格式:A][★☆☆☆☆]

A、18043618705

B、19212175391

C、19212159177

D、18200532661

![null](https://bu.dusays.com/2023/07/26/64c132f2afb4c.png)

![null](https://bu.dusays.com/2023/07/26/64c132f31519d.png)

![null](https://bu.dusays.com/2023/07/26/64c132fd6447c.png)

### 13、根据臧觅风的安卓手机分析，微信ID是[答案：wxid_av7b3jbaaht123][★☆☆☆☆]

wxid_kr7b3jbooht322

![null](https://bu.dusays.com/2023/07/26/64c132fdba62f.png)

### 14、根据臧觅风的安卓手机分析，在哪里使用过交友软件[答案：杭州][★★★☆☆]

西安

![null](https://bu.dusays.com/2023/07/26/64c132fe0f976.png)

### 15、根据臧觅风的安卓手机分析，嫌疑人从哪个用户购买的源码，请给出出售源码方的账号[答案：1234524229][★☆☆☆☆]

5768224669

![null](https://bu.dusays.com/2023/07/26/64c132feea92b.png)

### 16、根据臧觅风的安卓手机分析，购买源码花了多少BTC？[答案：1.21][★☆☆☆☆]

0.08

![null](https://bu.dusays.com/2023/07/26/64c132fee3943.png)

### 17、根据臧觅风的安卓手机分析，接收源码的邮箱是[答案：[asdasd666@hotmail.com](mailto:asdasd666@hotmail.com)][★☆☆☆☆]

[molihuacha007@hotmail.com](mailto:molihuacha007@hotmail.com)

![null](https://bu.dusays.com/2023/07/26/64c132ff33b13.png)

### 18、嫌疑人容恨寒苹果手机的IMEI是?[★★☆☆☆]

353271073008914

在PC中有一个手机备份

![null](https://bu.dusays.com/2023/07/26/64c1330a9142e.png)

![null](https://www.forensics-wiki.com/media/202305//1683816432.7721689.png)

### 19、嫌疑人容恨寒苹果手机最后备份时间是?[答案格式:2000-01-01 13:36:25][★★☆☆☆]

2023-04-12 21:20:59

![null](https://www.forensics-wiki.com/media/202305//1683816432.7791307.png)

### 20、嫌疑人容恨寒苹果手机“易信”的唯一标识符（UUID）？[★★★★☆]

ec677dda-3387-4337-9b44-f7daae4fb29c

![null](https://www.forensics-wiki.com/media/202305//1683816432.7858906.png)

找到/AppDomain-com.yixin.yixin/Documents/login_device_id_v1

![null](https://www.forensics-wiki.com/media/202305//1683816432.7929337.png)

### 21、嫌疑人容恨寒苹果手机微信ID是?[★☆☆☆☆]

wxid_peshwv0rosih12

![null](https://www.forensics-wiki.com/media/202305//1683816432.8000662.png)

## 计算机取证

### 1、嫌疑人魏文茵计算机的操作系统版本?[答案格式:Windows 7 Ultimate 8603][★☆☆☆☆]

Windows 10 Professional 14393

![null](https://bu.dusays.com/2023/07/26/64c1332e6fb83.png)

### 2、嫌疑人魏文茵计算机默认的浏览器是?[答案格式:A][★☆☆☆☆]

A、Edge

B、Internet Explorer

C、Google Chrome

D、360浏览器

![null](https://bu.dusays.com/2023/07/26/64c1332ded948.png)

### 3、嫌疑人魏文茵计算机中以下那个文档不是嫌疑人最近打开过的文档?[答案格式:A][★☆☆☆☆]

A、掠夺攻略.docx

B、工资表.xlsx

C、刷单秘籍.docx

D、脚本.docx

![null](https://bu.dusays.com/2023/07/26/64c1332dd3039.png)

![null](https://bu.dusays.com/2023/07/26/64c1332ddb837.png)

![null](https://bu.dusays.com/2023/07/26/64c1332dd33a1.png)

### 4、嫌疑人魏文茵计算机中存在几个加密分区?[答案格式:3个][★★☆☆☆]

1个

![null](https://bu.dusays.com/2023/07/26/64c1332dee76e.png)

### 5、嫌疑人魏文茵计算机中安装了哪个第三方加密容器?[答案格式:VeraCrypt]][★☆☆☆☆]

TrueCrypt

![null](https://bu.dusays.com/2023/07/26/64c133350581f.png)

### 6、接上题，嫌疑人魏文茵计算机中加密容器加密后的容器文件路径？[答案格式:C:\xxx\xxx][★★☆☆☆]

C:\Users\WH\Documents

**‪**![null](https://bu.dusays.com/2023/07/26/64c1333626bc3.png)

### 7、嫌疑人魏文茵计算机中磁盘分区BitLocker加密恢复秘钥为?[答案格式: 000000-000000-000000-000000-000000-000000-000000-000000]][★★★☆☆]

000649-583407-395868-441210-589776-038698-479083-651618

取证大师中对D盘进行卷影分析，原始数据搜索恢复密钥

![null](https://bu.dusays.com/2023/07/26/64c1333756675.png)

恢复密钥在卷影的未分配簇中

![null](https://bu.dusays.com/2023/07/26/64c13335a5507.png)

### 8、嫌疑人魏文茵计算机中BitLocker加密分区中“攻略.docx”文档里涉及多少种诈骗方式?[答案格式:11][★☆☆☆☆]

38

![null](https://bu.dusays.com/2023/07/26/64c13337184ee.png)

### *9、投资理财团伙“华中组”目前诈骗收益大约多少?[答案格式:10万][★★☆☆☆]

没找到，有无大佬指点一下

### 10、通过对嫌疑人魏文茵计算机内存分析，print.exe的PID是？[答案格式:123][★★☆☆☆]

728

![null](https://bu.dusays.com/2023/07/26/64c1333680496.png)

### 11、根据臧觅风的计算机分析，请给出技术人员计算机“zang.E01”的SHA-1?[答案格式:7B2DC1741AE00D7776F64064CDA321037563A769][★☆☆☆☆]

239F39E353358584691790DDA5FF49BAA07CFDBB

![null](https://bu.dusays.com/2023/07/26/64c1333ec640c.png)

### 12、根据臧觅风的计算机分析，请给出该技术人员计算机“zang.E01”的总扇区数？[答案格式:100,000,000][★★☆☆☆]

536,870,912

![null](https://bu.dusays.com/2023/07/26/64c1333f52ff8.png)

### 13、根据臧觅风的计算机分析，以下那个文件不是技术人员通过浏览器下载的？[答案格式:A][★☆☆☆☆]

A、WeChatSetup.exea

B、Drive.exe

C、Potato_Desktop2.37.zip

D、BaiduNetdisk_7.27.0.5.exe

![null](https://bu.dusays.com/2023/07/26/64c1334146201.png)

### 14、根据臧觅风的计算机分析，请给出该技术人员邮件附件“好东西.zip”解压密码？[答案格式:abc123][★★★★★]

kangshifu0008

挂梯子访问谷歌浏览器下载链接下载zip和z01

![null](https://bu.dusays.com/2023/07/26/64c1334086eb8.png)

里面是源码![null](https://bu.dusays.com/2023/07/26/64c13340d9f68.png)

在臧觅风的手机tg聊天记录中提到过解压密码是发件人的邮箱，解压一下

![null](https://bu.dusays.com/2023/07/26/64c1334261a6b.png)

使用kangshifu0008解压成功

![null](https://bu.dusays.com/2023/07/26/64c13349136fb.png)

### 15、根据臧觅风的计算机分析，该技术人员电脑内曾通过远程管理工具连接过服务器“master.k8s.com”,请给出连接的端口号？[答案格式:22][★★☆☆☆]

2282

![null](https://bu.dusays.com/2023/07/26/64c13385eb388.png)

### 16、根据臧觅风的计算机分析，接上题，请给出服务器的密码？[答案格式:password[★★★★☆]

P@ssw0rd

![null](https://bu.dusays.com/2023/07/26/64c133878d8f4.png)

### 17、根据臧觅风的计算机分析，据该技术人员交代，其电脑内有个保存各种密码的txt文件，请找出该文件，计算其MD5值？[答案格式:7B2DC1741AE00D7776F64064CDA321037563A769][★★★★★]

C1934045C3348EA1BA618279AAC38C67

![null](https://bu.dusays.com/2023/07/26/64c13389e53e2.png)

### 18、根据臧觅风的计算机分析，该技术人员曾使用过加密容器反取证技术，请给出该容器挂载的盘符？[答案格式:A][★☆☆☆☆]

F

仿真，找到TC

![null](https://bu.dusays.com/2023/07/26/64c1338c725b6.png)

在历史访问记录中找到访问F盘的记录

![null](https://bu.dusays.com/2023/07/26/64c1338c6d631.png)

### 19、根据臧觅风的计算机分析，请给出该技术人员电脑内keePass的Master Password？[答案格式:password12#][★★★★☆]

xiaozang123!@#

找到TC容器为资料.docx

![null](https://bu.dusays.com/2023/07/26/64c13385f0d6e.png)

使用Elcomsoft Forensic Disk Decryptor的Decrypt or mount disk（解密或/挂载磁盘）功能

![null](https://bu.dusays.com/2023/07/26/64c1338bbb511.png)

选择Container（容器）

![null](https://bu.dusays.com/2023/07/26/64c1338c2705b.png)

使用内存镜像解密TC容器

![null](https://bu.dusays.com/2023/07/26/64c1338ce9a6b.png)

找到密钥

![null](https://bu.dusays.com/2023/07/26/64c133933a942.png)

导出密钥

![null](https://bu.dusays.com/2023/07/26/64c1339563a61.png)

选择Mount Disk（挂载磁盘）

![null](https://bu.dusays.com/2023/07/26/64c133964a460.png)

挂载在F盘

![null](https://bu.dusays.com/2023/07/26/64c133968fceb.png)

在F盘找到一个文档，记录了KeePass的Master password

![null](https://bu.dusays.com/2023/07/26/64c133972dbb3.png)

### 20、根据臧觅风的计算机分析，请给出该技术人员所使用的爬虫工具名称？[答案格式:xxx][★★☆☆☆]

后羿采集器

![null](https://bu.dusays.com/2023/07/26/64c1339801c7c.png)

![null](https://bu.dusays.com/2023/07/26/64c1339d3d76d.png)

### 21、根据臧觅风的计算机分析，接上题，该技术人员通过该采集器一共采集了多少条人员信息数据？[答案格式:10,000][★★★★★]

19,225

之前在分析容恨寒手机时发现了臧觅风发送了爬取到的信息的文件

![null](https://bu.dusays.com/2023/07/26/64c133a01a509.png)

全部导出查看

100条

![null](https://bu.dusays.com/2023/07/26/64c133a0bc634.png)

17条

![null](https://bu.dusays.com/2023/07/26/64c133a12dd0f.png)

18970条

![null](https://bu.dusays.com/2023/07/26/64c133a19acfb.png)

96条

![null](https://bu.dusays.com/2023/07/26/64c133a27fae6.png)

29条

![null](https://bu.dusays.com/2023/07/26/64c133a70c434.png)

13条

![null](https://bu.dusays.com/2023/07/26/64c133abd2782.png)

### 22、根据臧觅风的计算机分析，以下那个不是该技术人员通过爬虫工具采集的数据？[答案格式:A][★☆☆☆☆]

A、中国证券投资基金业协人员信息

B、仓山区市场监督管理局行政执法人员信息

C、清平镇卫生院基本公共卫生服务

D、仓山区市场监督管理局行政执法人员信息

![null](https://bu.dusays.com/2023/07/26/64c133c3b2977.png)

### 23、根据臧觅风的计算机分析，该嫌疑人曾浏览过“阿里云WebDAV”，请给出该“阿里云WebDAV”端口号？[答案格式:2211][★★☆☆☆]

8080

根据后面软路由分析找到端口号为8080

![null](https://bu.dusays.com/2023/07/26/64c133c3dc8ff.png)

在Chrome的历史记录里面也确实访问过

![null](https://bu.dusays.com/2023/07/26/64c133c61f973.png)

### 24、根据臧觅风的计算机分析，请给出该技术人员电脑内代理软件所使用的端口号？[答案格式:2211][★★☆☆☆]

7890

![null](https://bu.dusays.com/2023/07/26/64c133cbc6e86.png)

### 25、根据臧觅风的计算机分析，接上题，请给出该代理软件内订阅链接的token？[答案格式:abc1234df334…][★★☆☆☆]

d4029286acc8bfd97818d5f8724f0f0a

![null](https://bu.dusays.com/2023/07/26/64c133c721b88.png)

### 26、根据臧觅风的计算机分析，请给出该技术人员电脑内用于内部通联工具的地址和端口？[答案格式:[www.baidu.com:1122\][★★★☆☆]](http://www.baidu.xn--com:1122][]-pd8gaapa/)

im.pgscup.com:6661

桌面上找到potato

![null](https://bu.dusays.com/2023/07/26/64c133c2200b8.png)

![null](https://bu.dusays.com/2023/07/26/64c133c85ca07.png)

### 27、根据臧觅风的计算机分析，请给出该电脑内存镜像创建的时间（北京时间）？[答案格式:2023-05-06 14:00:00][★☆☆☆☆]

2023-04-27 17:57:53

![null](https://bu.dusays.com/2023/07/26/64c133daae81b.png)

### 28、根据臧觅风的计算机分析，以下那个不是“chrone.exe”的动态链接库？[答案格式:A][★★★★☆]

A、ntdll.dll

B、iertutil.dll

C、wow64cpu.dll

D、wow64win.dll

![null](https://bu.dusays.com/2023/07/26/64c133e4d3aa3.png)

### 29、根据臧觅风的计算机分析，请给出“\REGISTRY\MACHINE\SYSTEM”在内存镜像中的虚拟地址是多少？[答案格式:0xxxxx123…][★★☆☆☆]

0xab861963e000

![null](https://bu.dusays.com/2023/07/26/64c133e49d227.png)

### 30、根据臧觅风的计算机分析，据嫌疑人交代，其电脑上曾存打开过一个名为“账号信息.docx”的文档，请给出该文档的最后访问时间（北京时间）？[答案格式:2023-05-06 14:00:00][★★★★☆]

2023-04-27 17:55:32

![null](https://bu.dusays.com/2023/07/26/64c133e3ef833.png)

### 31、根据臧觅风的计算机分析，接上题，请给出该文档的存储路径？[答案格式:C:\xxx\xxx][★★★☆☆]

D:\backup\mydata

同上题图

### 32、嫌疑人容恨寒苹果电脑的系统版本名称是？[答案格式:注意大小写][★☆☆☆☆]

macOS 12.6

电脑需要密码，密码在坚果Pro3手机备忘录，为apple

![null](https://bu.dusays.com/2023/07/26/64c133e3d4c4b.png)

![null](https://bu.dusays.com/2023/07/26/64c133e4afbbb.png)

### 33、嫌疑人容恨寒苹果电脑操作系统安装日期是？[答案格式:2000-01-01][★★☆☆☆]

2022-10-09 13:11:30

![null](https://bu.dusays.com/2023/07/26/64c133e3ab7dc.png)

### 34、嫌疑人容恨寒苹果电脑的内核版本是？[答案格式:xxxxx 11.0.4，注意大小写][★☆☆☆☆]

Darwin Kernel Version 21.6.0

仿真，uname -a

![null](https://bu.dusays.com/2023/07/26/64c133f39667f.png)

### *35、嫌疑人容恨寒苹果电脑有多少正在运行的后台程序？[答案格式:20][★★☆☆☆]

10

仿真，查看最近运行使用的项目中的应用程序个数

![null](https://bu.dusays.com/2023/07/26/64c133ef17157.png)

因为仿真查看活动监视器的进程数会变化，所以无法确定，这里假设答案就是要找最近运行的程序个数

### 36、嫌疑人容恨寒苹果电脑最后一次关机时间（GMT）？[答案格式:2000-01-01 01:00:09][★★☆☆☆]

2023-04-14 07:55:50

![null](https://bu.dusays.com/2023/07/26/64c133eebc66e.png)

### 37、嫌疑人容恨寒苹果电脑执行过多少次查询主机名称命令？[答案格式:20][★★★☆☆]

15

hostname

![null](https://bu.dusays.com/2023/07/26/64c133ede05fc.png)

### 38、从嫌疑人容恨寒苹果电脑中找出“陆文杰”提现金额是？[答案格式:20][★★★★☆]

10

在容恨寒的桌面上有个资料-.华南分区流水，查看十六进制发现是RAR

![null](https://bu.dusays.com/2023/07/26/64c133eeda355.png)

导出发现需要解压密码

![null](https://bu.dusays.com/2023/07/26/64c133ecb4f6f.png)

根据potato聊天记录中提到的密码规则进行掩码攻击

![null](https://bu.dusays.com/2023/07/26/64c133f520f88.png)

解压在华南区.xlsx中找到陆文杰

![null](https://bu.dusays.com/2023/07/26/64c133f7a5874.png)

筛选出陆文杰

![null](https://bu.dusays.com/2023/07/26/64c133f82a800.png)

### 39、从嫌疑人容恨寒苹果电脑中找出嫌疑人容恨寒上午上班时长是？[答案格式:8小时][★★★★☆]

2.5小时

在解压出来的脚本.xlsx中找到

![null](https://bu.dusays.com/2023/07/26/64c133f975036.png)

### 40、从嫌疑人容恨寒苹果电脑中找出“万便”的邮箱是？[答案格式:[xxx@xxx.xx](mailto:xxx@xxx.xx)][★★★★☆]

[IxCnq3@yDp.net](mailto:IxCnq3@yDp.net)

在人员信息.txt中找到万便相关信息

![null](https://bu.dusays.com/2023/07/26/64c133fad1cd3.png)

### 42、通过分析得出嫌疑人容恨寒小孩的年龄是？[答案格式:10岁][★★★☆☆]

13岁/14岁

在废纸篓里面找到奥数教程·八年级能力测试.pdf，八年级一般都是在13岁或14岁

![null](https://bu.dusays.com/2023/07/26/64c133fd3668e.png)

## 二进制文件分析

### 1、根据魏文茵的计算机分析，恶意程序加了什么类型的壳[答案：asdcz][★★☆☆☆]

upx

在下载目录里面找到print.exe，腾讯哈勃分析，UPX壳

![null](https://www.forensics-wiki.com/media/202305//1683816433.3279874.png)

### 2、根据魏文茵的计算机分析，恶意程序调用了几个dll[答案：1][★★★☆☆]

5

![null](https://www.forensics-wiki.com/media/202305//1683816433.3360856.png)

### 3、根据魏文茵的计算机分析，恶意程序中send函数被多少个函数调用[答案：1][★★★☆☆]

6

分析send函数的交叉引用

![null](https://bu.dusays.com/2023/07/26/64c1343974582.png)

### 4、根据魏文茵的计算机分析，恶意程序远控端ip[答案：120.1.2.3][★★☆☆☆]

192.168.8.110

![null](https://www.forensics-wiki.com/media/202305//1683816433.3510482.png)

### 5、根据魏文茵的计算机分析，恶意程序远控端端口[答案：123][★★☆☆☆]

6069

![null](https://bu.dusays.com/2023/07/26/64c1343676660.png)

16进制转10进制

![null](https://bu.dusays.com/2023/07/26/64c1343770839.png)

### 6、根据魏文茵的计算机分析，恶意程序用到是tcp还是udp[★★★☆☆]

A、tcp

B、udp

![null](https://bu.dusays.com/2023/07/26/64c1343bd83f7.png)

### 7、根据魏文茵的计算机分析，恶意程序能执行几条命令[答案：123][★★★★☆]

5

![null](https://www.forensics-wiki.com/media/202305//1683816433.3791523.png)

### 8、根据魏文茵的计算机分析，恶意程序加密电脑文件对应是哪个命令[答案：1a][★★★☆☆]

6s

![null](https://bu.dusays.com/2023/07/26/64c1344089184.png)

![null](https://bu.dusays.com/2023/07/26/64c134413f49e.png)

![null](https://bu.dusays.com/2023/07/26/64c13440449a6.png)

![null](https://bu.dusays.com/2023/07/26/64c13443092cd.png)

![null](https://www.forensics-wiki.com/media/202305//1683816433.4102151.png)

![null](https://bu.dusays.com/2023/07/26/64c134476c862.png)

![null](https://www.forensics-wiki.com/media/202305//1683816433.4234407.png)

![null](https://bu.dusays.com/2023/07/26/64c1344acae9a.png)

![null](https://bu.dusays.com/2023/07/26/64c134481996e.png)

### 9、根据魏文茵的计算机分析，恶意程序加密哪些后缀文件[★★★☆☆]

A、docx

B、xlsx

C、pdf

D、doc

![null](https://bu.dusays.com/2023/07/26/64c1344e012ce.png)

### 10、根据魏文茵的计算机分析，编写该程序电脑的用户名是[答案：12345][★★★★★]

22383

![null](https://bu.dusays.com/2023/07/26/64c1344d510dc.png)

### 11、嫌疑人魏文茵计算机中“工资表.xlsx”中，发放工资总金额为：[答案格式:12345]][★★★★★]

44300

程序加密方式为每个字节+1，用Python脚本解密

![null](https://bu.dusays.com/2023/07/26/64c1344ca5de3.png)

![null](https://bu.dusays.com/2023/07/26/64c134542e43e.png)

## 暗网取证

### 1、臧觅风电脑使用暗网浏览器版本是？[答案格式：10.0.0][★☆☆☆☆]

12.0.4

前面使用Elcomsoft Forensic Disk Decryptor从内存镜像中导出密钥文件解开了TC容器资料.docx，在Keepass中找到一个TC密码Zang!@#123

![null](https://bu.dusays.com/2023/07/26/64c1345aa7d8e.png)

使用TC用密码加载容器

![null](https://www.forensics-wiki.com/media/202305//1683816433.4783628.png)

这里可以看到类型是隐藏，之前解密的是容器的外部加密卷，现在解开的是容器的内部加密卷

在F盘找到Tor Browser

![null](https://www.forensics-wiki.com/media/202305//1683816433.4855986.png)

根据臧的程序运行记录

![null](https://www.forensics-wiki.com/media/202305//1683816433.492448.png)

找到浏览器程序打开，在关于里面可以看到版本为12.0.4

![null](https://bu.dusays.com/2023/07/26/64c134573aa75.png)

### 2、臧觅风电脑使用的暗网浏览器历史记录中最多浏览内容是？[答案格式：制作][★★☆☆☆]

比特币市场

![null](https://www.forensics-wiki.com/media/202305//1683816433.5069835.png)

找到/Tor Browser/Tor Browser/Browser/TorBrowser/Data/Browser/profile.default下的places.sqlite

![null](https://www.forensics-wiki.com/media/202305//1683816433.5141547.png)

找到moz_places表

![null](https://www.forensics-wiki.com/media/202305//1683816433.5214126.png)

或者用本地挂载TC加密容器的内部加密卷

![null](https://bu.dusays.com/2023/07/26/64c134603a22a.png)

使用火眼进行分析

![null](https://www.forensics-wiki.com/media/202305//1683816433.5363736.png)

### 3、臧觅风电脑使用的暗网网浏览器书签“社工库”添加的时间是？[答案格式：2000-01-01 01:00:09][★★★★☆]

2022-05-27 21:49:33

找到moz_bookmarks表

![null](https://www.forensics-wiki.com/media/202305//1683816433.5439782.png)

转换时间戳

![null](https://www.forensics-wiki.com/media/202305//1683816433.5518718.png)

火眼

![null](https://bu.dusays.com/2023/07/26/64c1346bf0898.png)

### 4、臧觅风电脑使用的暗网浏览器第一次使用时间是？[答案格式：2000-01-01 01:00:09][★★★☆☆]

2023-04-12 10:19:06

在moz_historyvisits表看第一次访问的时间

![null](https://bu.dusays.com/2023/07/26/64c134814d93f.png)

时间戳转换

![null](https://bu.dusays.com/2023/07/26/64c1347f06489.png)

火眼

![null](https://www.forensics-wiki.com/media/202305//1683816433.580734.png)

### 5、臧觅风电脑使用的暗网浏览器扩展应用中“ftp.js”文件的md5值是？[答案格式：字母小写][★★★★★]

ea86403d1de3089b3d32fe5706d552f6

找到扩展文件安装目录/Tor Browser/Tor Browser/Browser/TorBrowser/Data/Browser/profile.default/extensions

![null](https://www.forensics-wiki.com/media/202305//1683816433.5880868.png)

导出xpi包解压，在content目录下找到ftp.js

![null](https://bu.dusays.com/2023/07/26/64c1347dae293.png)

计算md5

![null](https://bu.dusays.com/2023/07/26/64c1347f0a815.png)

## 物联取证

### 1、请给出该软路由管理的IP地址？[答案格式:192.168.1.1][★☆☆☆☆]

192.168.8.20

直接把所有镜像一起挂到仿真软件中，不管报错，直接开启虚拟机，直接不用密码就能登录openwrt的系统

![null](https://bu.dusays.com/2023/07/26/64c13483acdb5.png)

### 2、请给出该软路由管理员的密码？[答案格式:admin123!@#][★★★☆☆]

P@ssw0rd

配好网后访问

![null](https://www.forensics-wiki.com/media/202305//1683816433.6160882.png)

密码之前在臧觅风电脑里找到过

![null](https://www.forensics-wiki.com/media/202305//1683816433.629242.png)

登录成功

![null](https://www.forensics-wiki.com/media/202305//1683816433.6372707.png)

### 3、请给出阿里云WebDAV的token？[答案格式:bac123sasdew3212…][★★☆☆☆]

afc455bdc29a45b18f3bae5048971e76

![null](https://www.forensics-wiki.com/media/202305//1683816433.6463013.png)

### 4、请给出该软路由所用机场订阅的token？[答案格式:bac123sasdew3212…][★★☆☆☆]

502f6affe3c7deb071d65fb43effc06d

![null](https://bu.dusays.com/2023/07/26/64c1348d10352.png)

### 5、请给出该软路由数据卷的UUID？[答案格式:8adn28hd-00c0c0c0…][★★☆☆☆]

9a89a5ec-dae6-488a-84bf-80a67388ff37

blkid，找到label="data"

![null](https://bu.dusays.com/2023/07/26/64c1348d30b59.png)

### 6、请给出该软路由的共享路径？[答案格式:/home/data][★★☆☆☆]

/mnt/data

cat /etc/samba/smb.conf

![null](https://bu.dusays.com/2023/07/26/64c1348fd5c1b.png)

## 服务器取证

### 1、请给出IM服务器的当前Build版本？[答案格式:11111][★☆☆☆☆]

17763

在openwrt后台找到存储，打开文件管理器

![null](https://www.forensics-wiki.com/media/202305//1683816433.6729121.png)

账号密码在Rclone里面，为admin/admin，在/mnt/data/IM找到Windows Server虚拟机文件

![null](https://bu.dusays.com/2023/07/26/64c13496caa00.png)

把所有文件导出来，运行vmx文件打开虚拟机，发现需要密码

![null](https://bu.dusays.com/2023/07/26/64c13492c3621.png)

搜索发现https://www.howtogeek.com/6169/use-truecrypt-to-secure-your-data/，这是被VC加密的盘

查看vmx中的配置可知，启动系统是用的Windows Server 2019-000002.vmdk

![null](https://bu.dusays.com/2023/07/26/64c13496c7640.png)

![null](https://www.forensics-wiki.com/media/202305//1683816433.7008631.png)

使用火眼分析Windows Server 2019.vmdk和Windows Server 2019-000003.vmdk，在Windows Server 2019-000003.vmdk的最近访问记录中发现一个新建文本文档.txt

![null](https://www.forensics-wiki.com/media/202305//1683816433.707071.png)

找到文档，得到密码123w.pgscup.com

![null](https://www.forensics-wiki.com/media/202305//1683816433.7144146.png)

这就是VC加密磁盘的密码，输入后成功进入系统

![null](https://www.forensics-wiki.com/media/202305//1683816433.7217925.png)

使用P@ssw0rd登录进系统

![null](https://www.forensics-wiki.com/media/202305//1683816433.731665.png)

查看系统信息得到Build版本

![null](https://bu.dusays.com/2023/07/26/64c1349ed4eea.png)

### 2、请给出IM聊天服务的启动密码？[答案格式:3w.Baidu.com][★★★★★]

123w.pgscup.com

从上题得出

### 3、请给出该聊天服务器所用的PHP版本？[答案格式:7.2.5][★★★★☆]

7.4.32

![null](https://bu.dusays.com/2023/07/26/64c134bf31af4.png)

### 4、请给出该服务器所用的数据库类型及版本？[答案格式:mysql 5.7.1][★★★★★]

mysql 10.4.12

![null](https://www.forensics-wiki.com/media/202305//1683816433.7510684.png)

### 5、请给出该服务器MySQL数据库root账号的密码？[答案格式:3w.baidu.com][★★★★★]

[www.upsoft01.com](http://www.upsoft01.com/)

在C盘的Program Files (x86)目录下找到IM_Console目录

![null](https://www.forensics-wiki.com/media/202305//1683816433.7590084.png)

在其下的/im_webserver/htdocs/Application/Common/Conf目录找到config.php，其中记录了mysql数据库账号密码

![null](https://www.forensics-wiki.com/media/202305//1683816433.7651887.png)

### 6、请给该IM服务器内当前企业所使用的数据库？[答案格式:admin_admin][★★★★☆]

antdbms_ustdreclub

![null](https://www.forensics-wiki.com/media/202305//1683816433.7755532.png)使用admin/123456登录，密码错误，查看数据包发现是前端md5加密传输

![null](https://www.forensics-wiki.com/media/202305//1683816433.7840652.png)

在数据库中找到密码密文

![null](https://bu.dusays.com/2023/07/26/64c134c188ca2.png)

解不出

![null](https://bu.dusays.com/2023/07/26/64c134c4f2274.png)

替换123456的md5值

![null](https://bu.dusays.com/2023/07/26/64c134c5f31bc.png)

使用admin/123456登录

![null](https://bu.dusays.com/2023/07/26/64c134c4ef002.png)

在SAAS管理找到企业usdtreclub的数据库名

![null](https://bu.dusays.com/2023/07/26/64c134c274369.png)

### 7、请给出该组织“usdtreclub”内共有多少个部门（不含分区）？[答案格式:1][★★★☆☆]

5

在即时通讯总控制台的SAAS管理点击企业usdtreclub的控制台

![null](https://bu.dusays.com/2023/07/26/64c134c36b2fe.png)

进入到登录界面

![null](https://www.forensics-wiki.com/media/202305//1683816433.830274.png)

在数据库的hs_user表中找到superadmin的密码密文

![null](https://bu.dusays.com/2023/07/26/64c134d266809.png)

md5解密得到bigant@2018，登录

![null](https://bu.dusays.com/2023/07/26/64c134d0656a9.png)

在人员管理->组织管理找到部门信息

![null](https://bu.dusays.com/2023/07/26/64c134d0c75ba.png)

### 8、客户端消息传输采用哪种加密形式？[答案格式:A][★★☆☆☆]

A、AES128

B、AES256

C、DES

D、Base64

![null](https://www.forensics-wiki.com/media/202305//1683816433.8583527.png)

### 9、以下那个不是此系统提供的应用？[答案格式:A][★★☆☆☆]

A、云盘

B、审批

C、会议

D、考勤

![null](https://bu.dusays.com/2023/07/26/64c134cdde7b3.png)

### 10、请给出“ 2023-04-11 21:48:14”登录成功此系统的用户设备MAC地址？[答案格式:08-AA-33-DF-1A][★★★☆☆]

80-B6-55-EF-90-8E

![null](https://www.forensics-wiki.com/media/202305//1683816433.8713124.png)

### 11、请给出用户“卢正文”的手机号码？[答案格式:13888888888][★★★★☆]

13580912153

![null](https://bu.dusays.com/2023/07/26/64c134d5d6b90.png)

前面potato数据库分析的时候有

![null](https://www.forensics-wiki.com/media/202305//1683816433.8836741.png)

在下载目录的表格中

![null](https://www.forensics-wiki.com/media/202305//1683816433.8924506.png)

## 集群服务器取证

参考https://blog.csdn.net/Grignard_/article/details/130592473by浙江警察学院@Zodi4c#grignard

给集群配网

ip a查看网络信息

Server1

![null](https://bu.dusays.com/2023/07/26/64c134da82f3e.png)

Server2

![null](https://bu.dusays.com/2023/07/26/64c134dbab927.png)

Server3

![null](https://bu.dusays.com/2023/07/26/64c134dbb707c.png)

修改虚拟机NAT网络设置

![null](https://bu.dusays.com/2023/07/26/64c134dd04566.png)

让本机能ping通

![null](https://www.forensics-wiki.com/media/202305//1683816433.9228485.png)

history查看历史命令

Server1

![null](https://bu.dusays.com/2023/07/26/64c134e27c86a.png)

Server2

![null](https://bu.dusays.com/2023/07/26/64c134e2df1f5.png)

Server3

![null](https://bu.dusays.com/2023/07/26/64c134e56ab2e.png)

应该是还有一个192.168.8的网段的网卡

在/etc/sysconfig/network-scripts目录找到还有一张en34

![null](https://bu.dusays.com/2023/07/26/64c134e3d292f.png)

Server1

![null](https://bu.dusays.com/2023/07/26/64c134e6dcbad.png)

Server2

![null](https://bu.dusays.com/2023/07/26/64c134e9e1b2f.png)

Server3

![null](https://www.forensics-wiki.com/media/202305//1683816433.970143.png)

新建一个网卡

![null](https://www.forensics-wiki.com/media/202305//1683816433.9788387.png)

给Server1/2/3添加这张网卡

![null](https://bu.dusays.com/2023/07/26/64c134ee0e247.png)

再ip a查看网络信息发现多出ens37这张网卡

![null](https://www.forensics-wiki.com/media/202305//1683816433.9908082.png)

将Server1/2/3的/etc/sysconfig/network-scripts下的ifcfg-ens34改名为ifcfg-ens37将其中的ens34全部改为ens37

![null](https://bu.dusays.com/2023/07/26/64c134f6db44c.png)

![null](https://www.forensics-wiki.com/media/202305//1683816434.003276.png)

重启一下每个服务器

kubectl apply -f https://kuboard.cn/install-script/kuboard.yaml在master服务器上安装Kuboard可视化管理面板

![null](https://bu.dusays.com/2023/07/26/64c134f96fcf3.png)

echo $(kubectl -n kube-system get secret $(kubectl -n kube-system get secret | grep ^kuboard-user | awk '{print $1}') -o go-template='{{.data.token}}' | base64 -d)获取token

![null](https://bu.dusays.com/2023/07/26/64c134fc551ac.png)

登录

![null](https://www.forensics-wiki.com/media/202305//1683816434.0224483.png)

### 1、请给出集群master节点的内核版本？[答案格式:2.6.0-104.e11.x86_64][★☆☆☆☆]

3.10.0-957.el7.x86_64

master节点是server01

![null](https://bu.dusays.com/2023/07/26/64c134f6dda58.png)

![null](https://bu.dusays.com/2023/07/26/64c134ffaa884.png)

### 2、请给出该集群的pod网络？[答案格式:192.168.0.0/24][★★★★☆]

10.244.0.0/16

kubectl get configmap kubeadm-config -n kube-system -o yaml

![null](https://www.forensics-wiki.com/media/202305//1683816434.0410624.png)

### 3、请给出该集群所用的网络插件？[答案格式:abcd][★★☆☆☆]

calico

![null](https://bu.dusays.com/2023/07/26/64c134ffc34c1.png)

![null](https://www.forensics-wiki.com/media/202305//1683816434.0549467.png)

### 4、默认ns除外，本集群共有多少个ns？[答案格式:1][★★★☆☆]

8

![null](https://bu.dusays.com/2023/07/26/64c135054d8c5.png)

![null](https://bu.dusays.com/2023/07/26/64c1350760124.png)