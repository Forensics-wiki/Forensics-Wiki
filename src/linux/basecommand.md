---
title: 基础命令
icon: terminal
order: 2
sidebar: structure
---

>本文只介绍常用的命令，具体命令大全请参考：[菜鸟教程](https://www.runoob.com/linux/linux-command-manual.html)

## 文件管理

### cat

cat（英文全拼：concatenate）命令用于连接文件并打印到标准输出设备上。

#### 使用权限

所有使用者

#### 语法格式

```shell
cat [-AbeEnstTuv] [--help] [--version] fileName
```

#### 参数说明：

**-n 或 --number**：由 1 开始对所有输出的行数编号。

**-b 或 --number-nonblank**：和 -n 相似，只不过对于空白行不编号。

**-s 或 --squeeze-blank**：当遇到有连续两行以上的空白行，就代换为一行的空白行。

**-v 或 --show-nonprinting**：使用 ^ 和 M- 符号，除了 LFD 和 TAB 之外。

**-E 或 --show-ends** : 在每行结束处显示 $。

**-T 或 --show-tabs**: 将 TAB 字符显示为 ^I。

**-A, --show-all**：等价于 -vET。

**-e：** 等价于"-vE"选项；

**-t：** 等价于"-vT"选项；

#### 实例：

把 textfile1 的文档内容加上行号后输入 textfile2 这个文档里：

```shell
cat -n textfile1 > textfile2
```

把 textfile1 和 textfile2 的文档内容加上行号（空白行不加）之后将内容附加到 textfile3 文档里：

```shell
cat -b textfile1 textfile2 >> textfile3
```

清空 /etc/test.txt 文档内容：

```shell
cat /dev/null > /etc/test.txt
```

cat 也可以用来制作镜像文件。例如要制作软盘的镜像文件，将软盘放好后输入：

```shell
cat /dev/fd0 > OUTFILE
```

相反的，如果想把 image file 写到软盘，输入：

```shell
cat IMG_FILE > /dev/fd0
```

>- OUTFILE 指输出的镜像文件名。
>- IMG_FILE 指镜像文件。
>- 若从镜像文件写回 device 时，device 容量需与相当。
>- 通常用制作开机磁片。


-------

### chattr

Linux chattr命令用于改变文件属性。

这项指令可改变存放在ext2文件系统上的文件或目录属性，这些属性共有以下8种模式：

* a：让文件或目录仅供附加用途。
* b：不更新文件或目录的最后存取时间。
* c：将文件或目录压缩后存放。
* d：将文件或目录排除在倾倒操作之外。
* i：不得任意更动文件或目录。
* s：保密性删除文件或目录。
* S：即时更新文件或目录。
* u：预防意外删除。

#### 语法

```shell
chattr [-RV][-v<版本编号>][+/-/=<属性>][文件或目录...]
```

#### 参数

　　-R 递归处理，将指定目录下的所有文件及子目录一并处理。

　　-v<版本编号> 设置文件或目录版本。

　　-V 显示指令执行过程。

　　+<属性> 开启文件或目录的该项属性。

　　-<属性> 关闭文件或目录的该项属性。

　　=<属性> 指定文件或目录的该项属性。

#### 实例

用chattr命令防止系统中某个关键文件被修改：

```shell
chattr +i /etc/resolv.conf
lsattr /etc/resolv.conf
```

会显示如下属性

```shell
----i-------- /etc/resolv.conf
```

让某个文件只能往里面追加数据，但不能删除，适用于各种日志文件：

```shell
chattr +a /var/log/messages
```

---

### chgrp

Linux chgrp（英文全拼：change group）命令用于变更文件或目录的所属群组。

与 [chown](https://www.runoob.com/linux/linux-comm-chown.html) 命令不同，chgrp 允许普通用户改变文件所属的组，只要该用户是该组的一员。

在 UNIX 系统家族里，文件或目录权限的掌控以拥有者及所属群组来管理。您可以使用 chgrp 指令去变更文件与目录的所属群组，设置方式采用群组名称或群组识别码皆可。

#### 语法

```shell
chgrp [-cfhRv][--help][--version][所属群组][文件或目录...] 或 chgrp [-cfhRv][--help][--reference=<参考文件或目录>][--version][文件或目录...]
```

#### 参数说明

**-c 或 --changes**：效果类似"-v"参数，但仅回报更改的部分。

**-f 或 --quiet 或 --silent**： 　不显示错误信息。

**-h 或 --no-dereference**： 　只对符号连接的文件作修改，而不改动其他任何相关文件。

**-R 或 --recursive**： 　递归处理，将指定目录下的所有文件及子目录一并处理。

**-v 或 --verbose**： 　显示指令执行过程。

**--help**： 　在线帮助。

**--reference=<参考文件或目录>**： 　把指定文件或目录的所属群组全部设成和参考文件或目录的所属群组相同。

**--version**： 　显示版本信息。

#### 实例

实例1：改变文件的群组属性：

```shell
chgrp -v bin log2012.log
```

输出：

```shell
[root@localhost test]# ll
---xrw-r-- 1 root root 302108 11-13 06:03 log2012.log
[root@localhost test]# chgrp -v bin log2012.log
```

"log2012.log" 的所属组已更改为 bin

```shell
[root@localhost test]# ll
---xrw-r-- 1 root bin  302108 11-13 06:03 log2012.log
```

**说明：** 将 log2012.log 文件由 root 群组改为 bin 群组。

实例2：根据指定文件改变文件的群组属性

```shell
chgrp --reference=log2012.log log2013.log
```

输出：

```shell
[root@localhost test]# ll
---xrw-r-- 1 root bin  302108 11-13 06:03 log2012.log
-rw-r--r-- 1 root root     61 11-13 06:03 log2013.log
[root@localhost test]#  chgrp --reference=log2012.log log2013.log 
[root@localhost test]# ll
---xrw-r-- 1 root bin  302108 11-13 06:03 log2012.log
-rw-r--r-- 1 root bin      61 11-13 06:03 log2013.log
```

**说明：** 改变文件 log2013.log 的群组属性，使得文件 log2013.log 的群组属性和参考文件 log2012.log 的群组属性相同。

---

### chmod

Linux chmod（英文全拼：change mode）命令是控制用户对文件的权限的命令

Linux/Unix 的文件调用权限分为三级 : 文件所有者（Owner）、用户组（Group）、其它用户（Other Users）。

![image-20221124104310053](https://bu.dusays.com/2022/11/24/637eda3e093ac.png)

只有文件所有者和超级用户可以修改文件或目录的权限。可以使用绝对模式（八进制数字模式），符号模式指定文件的权限。

![image-20221124104349802](https://bu.dusays.com/2022/11/24/637eda5e98528.png)

**使用权限** : 所有使用者

#### 语法

```shell
chmod [-cfvR] [--help] [--version] mode file...
```

#### 参数说明

mode : 权限设定字串，格式如下 :

```shell
[ugoa...][[+-=][rwxX]...][,...]
```

其中：

- u 表示该文件的拥有者，g 表示与该文件的拥有者属于同一个群体(group)者，o 表示其他以外的人，a 表示这三者皆是。
- \+ 表示增加权限、- 表示取消权限、= 表示唯一设定权限。
- r 表示可读取，w 表示可写入，x 表示可执行，X 表示只有当该文件是个子目录或者该文件已经被设定过为可执行。

其他参数说明：

- -c : 若该文件权限确实已经更改，才显示其更改动作
- -f : 若该文件权限无法被更改也不要显示错误讯息
- -v : 显示权限变更的详细资料
- -R : 对目前目录下的所有文件与子目录进行相同的权限变更(即以递归的方式逐个变更)
- --help : 显示辅助说明
- --version : 显示版本

#### 符号模式

使用符号模式可以设置多个项目：who（用户类型），operator（操作符）和 permission（权限），每个项目的设置可以用逗号隔开。 命令 chmod 将修改 who 指定的用户类型对文件的访问权限，用户类型由一个或者多个字母在 who 的位置来说明，如 who 的符号模式表所示:

| who  | 用户类型 | 说明                   |
| :--- | :------- | :--------------------- |
| `u`  | user     | 文件所有者             |
| `g`  | group    | 文件所有者所在组       |
| `o`  | others   | 所有其他用户           |
| `a`  | all      | 所有用户, 相当于 *ugo* |

operator 的符号模式表:

| Operator | 说明                                                   |
| :------- | :----------------------------------------------------- |
| `+`      | 为指定的用户类型增加权限                               |
| `-`      | 去除指定用户类型的权限                                 |
| `=`      | 设置指定用户权限的设置，即将用户类型的所有权限重新设置 |

permission 的符号模式表:

| 模式 | 名字         | 说明                                                         |
| :--- | :----------- | :----------------------------------------------------------- |
| `r`  | 读           | 设置为可读权限                                               |
| `w`  | 写           | 设置为可写权限                                               |
| `x`  | 执行权限     | 设置为可执行权限                                             |
| `X`  | 特殊执行权限 | 只有当文件为目录文件，或者其他类型的用户有可执行权限时，才将文件权限设置可执行 |
| `s`  | setuid/gid   | 当文件被执行时，根据who参数指定的用户类型设置文件的setuid或者setgid权限 |
| `t`  | 粘贴位       | 设置粘贴位，只有超级用户可以设置该位，只有文件所有者u可以使用该位 |

#### 八进制语法

chmod命令可以使用八进制数来指定权限。文件或目录的权限位是由9个权限位来控制，每三位为一组，它们分别是文件所有者（User）的读、写、执行，用户组（Group）的读、写、执行以及其它用户（Other）的读、写、执行。历史上，文件权限被放在一个比特掩码中，掩码中指定的比特位设为1，用来说明一个类具有相应的优先级。

| #    | 权限           | rwx  | 二进制 |
| :--- | :------------- | :--- | :----- |
| 7    | 读 + 写 + 执行 | rwx  | 111    |
| 6    | 读 + 写        | rw-  | 110    |
| 5    | 读 + 执行      | r-x  | 101    |
| 4    | 只读           | r--  | 100    |
| 3    | 写 + 执行      | -wx  | 011    |
| 2    | 只写           | -w-  | 010    |
| 1    | 只执行         | --x  | 001    |
| 0    | 无             | ---  | 000    |

例如， 765 将这样解释：

- 所有者的权限用数字表达：属主的那三个权限位的数字加起来的总和。如 rwx ，也就是 4+2+1 ，应该是 7。
- 用户组的权限用数字表达：属组的那个权限位数字的相加的总和。如 rw- ，也就是 4+2+0 ，应该是 6。
- 其它用户的权限数字表达：其它用户权限位的数字相加的总和。如 r-x ，也就是 4+0+1 ，应该是 5。

#### 实例

将文件 file1.txt 设为所有人皆可读取 :

```shell
chmod ugo+r file1.txt
```

将文件 file1.txt 设为所有人皆可读取 :

```shell
chmod a+r file1.txt
```

将文件 file1.txt 与 file2.txt 设为该文件拥有者，与其所属同一个群体者可写入，但其他以外的人则不可写入 :

```shell
chmod ug+w,o-w file1.txt file2.txt
```

为 ex1.py 文件拥有者增加可执行权限:

```shell
chmod u+x ex1.py
```

将目前目录下的所有文件与子目录皆设为任何人可读取 :

```shell
chmod -R a+r *
```

此外chmod也可以用数字来表示权限如 :

```shell
chmod 777 file
```

语法为：

```shell
chmod abc file
```

其中a,b,c各为一个数字，分别表示User、Group、及Other的权限。

#### r=4，w=2，x=1

- 若要 rwx 属性则 4+2+1=7；
- 若要 rw- 属性则 4+2=6；
- 若要 r-x 属性则 4+1=5。

```shell
chmod a=rwx file
```

和

```shell
chmod 777 file
```

效果相同

```shell
chmod ug=rwx,o=x file
```

和

```shell
chmod 771 file
```

效果相同

若用 **chmod 4755 filename** 可使此程序具有 root 的权限。

#### 更多说明

| `命令`                                     | 说明                                                         |
| :----------------------------------------- | :----------------------------------------------------------- |
| `chmod a+r 文件`                           | 给file的所有用户增加读权限                                   |
| `chmod a-x 文件`                           | 删除file的所有用户的执行权限                                 |
| `chmod a+rw 文件`                          | 给file的所有用户增加读写权限                                 |
| `chmod +rwx 文件`                          | 给file的所有用户增加读写执行权限                             |
| `chmod u=rw,go= 文件`                      | 对file的所有者设置读写权限，清空该用户组和其他用户对file的所有权限（空格代表无权限） |
| `chmod -R u+r,go-r 目录`                   | 对目录docs和其子目录层次结构中的所有文件给用户增加读权限，而对用户组和其他用户删除读权限 |
| `chmod 664 文件`                           | 对file的所有者和用户组设置读写权限, 为其其他用户设置读权限   |
| `chmod 0755 文件`                          | 相当于`u=rwx (4+2+1),go=rx (4+1 & 4+1)`。`0` 没有特殊模式。  |
| `chmod 4755 文件`                          | `4`设置了设置用户ID位，剩下的相当于 u=rwx (4+2+1),go=rx (4+1 & 4+1)。 |
| `find path/ -type d -exec chmod a-x {} \;` | 删除可执行权限对path/以及其所有的目录（不包括文件）的所有用户，使用'-type f'匹配文件 |
| `find path/ -type d -exec chmod a+x {} \;` | 允许所有用户浏览或通过目录path/                              |

---

### find

Linux find 命令用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数，则 find 命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。

#### 语法

```
find   path   -option   [   -print ]   [ -exec   -ok   command ]   {} \;
```

**参数说明** :

find 根据下列规则判断 path 和 expression，在命令列上第一个 - ( ) , ! 之前的部份为 path，之后的是 expression。如果 path 是空字串则使用目前路径，如果 expression 是空字串则使用 -print 为预设 expression。

expression 中可使用的选项有二三十个之多，在此只介绍最常用的部份。

* -mount, -xdev : 只检查和指定目录在同一个文件系统下的文件，避免列出其它文件系统中的文件
* -amin n : 在过去 n 分钟内被读取过
* -anewer file : 比文件 file 更晚被读取过的文件
* -atime n : 在过去 n 天内被读取过的文件
* -cmin n : 在过去 n 分钟内被修改过
* -cnewer file :比文件 file 更新的文件
* -ctime n : 在过去 n 天内创建的文件
* -mtime n : 在过去 n 天内修改过的文件
* -empty : 空的文件-gid n or -group name : gid 是 n 或是 group 名称是 name
* -ipath p, -path p : 路径名称符合 p 的文件，ipath 会忽略大小写
* -name name, -iname name : 文件名称符合 name 的文件。iname 会忽略大小写
* -size n : 文件大小 是 n 单位，b 代表 512 位元组的区块，c 表示字元数，k 表示 kilo bytes，w 是二个位元组。
* -type c : 文件类型是 c 的文件。
  * d: 目录
  * c: 字型装置文件
  * b: 区块装置文件
  * p: 具名贮列
  * f: 一般文件
  * l: 符号连结
  * s: socket

* -pid n : process id 是 n 的文件

你可以使用 ( ) 将运算式分隔，并使用下列运算。

exp1 -and exp2

! expr

-not expr

exp1 -or exp2

exp1, exp2

#### 实例

将当前目录及其子目录下所有文件后缀为 **.c** 的文件列出来:

```shell
# find . -name "*.c"
```

将当前目录及其子目录中的所有文件列出：

```shell
# find . -type f
```

将当前目录及其子目录下所有最近 20 天内更新过的文件列出:

```shell
# find . -ctime  20
```

查找 /var/log 目录中更改时间在 7 日以前的普通文件，并在删除之前询问它们：

```shell
# find /var/log -type f -mtime +7 -ok rm {} \;
```

查找当前目录中文件属主具有读、写权限，并且文件所属组的用户和其他用户具有读权限的文件：

```shell
# find . -type f -perm 644 -exec ls -l {} \;
```

查找系统中所有文件长度为 0 的普通文件，并列出它们的完整路径：

```shell
# find / -type f -size 0 -exec ls -l {} \;
```

---

### mdir

Linux mdir命令用于显示MS-DOS目录。

mdir为mtools工具指令，模拟MS-DOS的dir指令，可显示MS-DOS文件系统中的目录内容。

#### 语法

```shell
mdir [-afwx/][目录]
```

**参数**：

- -/ 显示目录下所有子目录与文件。
- -a 　显示隐藏文件。
- -f 　不显示磁盘所剩余的可用空间。
- -w 　仅显示目录或文件名称，并以横排方式呈现，以便一次能显示较多的目录或文件。
- -X 　仅显示目录下所有子目录与文件的完整路径，不显示其他信息。

#### 实例

显示a盘中的内容

```shell
$ mdir -/ a:\*   
```

以上命令执行后，mdir将显示指定盘"a:\"中的所有子目录及其中的文件信息，如下所示：

```shell
Volume in drive A has no label  #加载信息  
Volume Serial Number is 13D2~055C  
Directory for A:\                   #以下为目录信息  
./TEST <DIR> 2011-08-23 16:59     
#显示格式为文件名，目录大小，修改时间  
AUTORUN.INF 265 2011-08-23 16:53  
AUTORUN.BAT 43 2011-08-23 16:56  
3 files 308 bytes               #统计总大小  
724 325 bytes free              #剩余空间  
```

---

### mv

Linux mv（英文全拼：move file）命令用来为文件或目录改名、或将文件或目录移入其它位置。

#### 语法

```shell
mv [options] source dest
mv [options] source... directory
```

**参数说明**：

- **-b**: 当目标文件或目录存在时，在执行覆盖前，会为其创建一个备份。
- **-i**: 如果指定移动的源目录或文件与目标的目录或文件同名，则会先询问是否覆盖旧文件，输入 y 表示直接覆盖，输入 n 表示取消该操作。
- **-f**: 如果指定移动的源目录或文件与目标的目录或文件同名，不会询问，直接覆盖旧文件。
- **-n**: 不要覆盖任何已存在的文件或目录。
- **-u**：当源文件比目标文件新或者目标文件不存在时，才执行移动操作。

mv 参数设置与运行结果

| 命令格式                                         | 运行结果                                                     |
| :----------------------------------------------- | :----------------------------------------------------------- |
| `mv source_file(文件) dest_file(文件)`           | 将源文件名 source_file 改为目标文件名 dest_file              |
| `mv source_file(文件) dest_directory(目录)`      | 将文件 source_file 移动到目标目录 dest_directory 中          |
| `mv source_directory(目录) dest_directory(目录)` | 目录名 dest_directory 已存在，将 source_directory 移动到目录名 dest_directory 中；目录名 dest_directory 不存在则 source_directory 改名为目录名 dest_directory |
| `mv source_directory(目录) dest_file(文件)`      | 出错                                                         |

#### 实例

将文件 aaa 改名为 bbb :

```shell
mv aaa bbb
```

将 info 目录放入 logs 目录中。注意，如果 logs 目录不存在，则该命令将 info 改名为 logs。

```shell
mv info/ logs 
```

再如将 **/usr/runoob** 下的所有文件和目录移到当前目录下，命令行为：

```shell
$ mv /usr/runoob/*  . 
```

---

## 文件传输

### ftp

Linux ftp命令设置文件系统相关功能。

FTP是ARPANet的标准文件传输协议，该网络就是现今Internet的前身。

#### 语法

```shell
ftp [-dignv][主机名称或IP地址]
```

**参数**：

- -d 详细显示指令执行过程，便于排错或分析程序执行的情形。
- -i 关闭互动模式，不询问任何问题。
- -g 关闭本地主机文件名称支持特殊字符的扩充特性。
- -n 不使用自动登陆。
- -v 显示指令执行过程。

#### 实例

例如使用ftp命令匿名登录ftp.kernel.org服务器，该服务是Linux 内核的官方服务器，可以使用如下命令：

```shell
ftp ftp.kernel.org #发起链接请求 
```

---

### tftp

Linux tftp命令用于传输文件。

FTP让用户得以下载存放于远端主机的文件，也能将文件上传到远端主机放置。tftp是简单的文字模式ftp程序，它所使用的指令和FTP类似。

#### 语法

```shell
tftp [主机名称或IP地址]
```

**操作说明：**

- connect：连接到远程tftp服务器
- mode：文件传输模式
- put：上传文件
- get：下载文件
- quit：退出
- verbose：显示详细的处理信息
- trace：显示包路径
- status：显示当前状态信息
- binary：二进制传输模式
- ascii：ascii 传送模式
- rexmt：设置包传输的超时时间
- timeout：设置重传的超时时间
- help：帮助信息
- ? ：帮助信息

#### 实例

连接远程服务器"218.28.188.288"，然后使用put 命令下载其中根目录下的文件"README"，可使用命令如下：

```shell
tftp 218.28.188.288 #连接远程服务器 
```

连接服务器之后可进行相应的操作，具体如下：

```shell
$ tftp 218.28.188.228                      #连接远程服务器  
tftp> ?                                    #使用？，参考帮助  
Commands may be abbreviated. Commands are: #帮助命令列表  
connect connect to remote tftp  
mode set file transfer mode  
put send file  
get receive file  
quit exit tftp  
verbose toggle verbose mode  
trace toggle packet tracing  
status show current status  
binary set mode to octet  
ascii set mode to netascii  
rexmt set per-packet retransmission timeout  
timeout set total retransmission timeout  
? print help information  
tftp>get README                             #远程下载README文件  
getting from 218.28.188.288 to /home/cmd  
Recived 168236 bytes in 1.5 seconds[112157 bit/s]  
tftp>quit                                   #离开tftp 
```

---

### ncftp

Linux ncftp命令用于传输文件。

FTP让用户得以下载存放于服务器主机的文件，也能将文件上传到远端主机放置。

NcFTP是文字模式FTP程序的佼佼者，它具备多样特色， 包括显示传输速率，下载进度，自动续传，标住书签，可通过防火墙和代理服务器等。

当不指定用户名时，ncftp 命令会自动尝试使用匿名账户anonymous 去连接远程FTP 服 务器，不需要用户输入账号和密码。

#### 语法

```shell
ncftp [主机或IP地址]
```

**参数说明：**

- -u<用户名> 指定登录FTP服务器的用户名
- -p<密码> 设置用户密码
- -P<端口号> 指定FTP端口号，默认为21
- -j<账号> 指定账号
- -h 帮助信息
- -v 版本信息

#### 实例

使用ncftp命令匿名连接FTP服务器。

例如想匿名连接ftp.kernel.org服务器，同时不想输入anonymous等匿名用户名，可直接使用ncftp命令：

```shell
ncftp ftp.kernel.org
```

得到如下信息：

```shell
$ ncftp ftp.kernel.org #匿名连接ftp.kernel.org服务器  
NcFTP 3.2.1 (Jul 29, 2007) by Mike Gleason (http://www.NcFTP.com/contact/).  
#ncftp版权、版本等信息  
Copyright (c) 1992-2005 by Mike Gleason.  
All rights reserved.  
Connecting to 149.20.20.133... #连接服务器  
Welcome to ftp.kernel.org.  
Logging in... #匿名登录  
Welcome to the #欢迎信息  
LINUX KERNEL ARCHIVES  
ftp.kernel.org  
"Much more than just kernels"  
IF YOU'RE ACCESSING THIS SITE VIA A WEB BROWSER  
PLEASE USE THE HTTP URL BELOW INSTEAD!  
----> If you are looking for mirror sites, please go <---- 
----> to mirrors.kernel.org instead <---- 
This site is provided as a public service by the Linux Kernel  
Organization, a California nonprofit corporation. Bandwidth is  
provided by The Internet Software Consortium, Inc. Our servers are  
located in San Francisco and Palo Alto, California; Corvallis, Oregon;  
Amsterdam, Netherlands and Ume., Sweden; use in violation of any  
applicable laws strictly prohibited.  
Due to U.S. Exports Regulations, all cryptographic software on this  
site is subject to the following legal notice:  
This site includes publicly available encryption source code  
which, together with object code resulting from the compiling of  
publicly available source code, may be exported from the United  
States under License Exception "TSU" pursuant to 15 C.F.R. Section  
740.13(e).  
This legal notice applies to cryptographic software only. Please see  
the Bureau of Industry and Security (http://www.bis.doc.gov/) for more  
information about current U.S. regulations.  
Neither the Linux Kernel Organization, nor its sponsors make any  
guarantees, explicit or implicit, about the contents of this site.  
Use at your own risk.  
This site is accessible via the following mechanisms:  
FTP ftp://ftp.kernel.org/pub/  
HTTP http://www.kernel.org/pub/  
RSYNC rsync://rsync.kernel.org/pub/  
NFS and SMB/CIFS are no longer available.  
For comments on this site, please contact <ftpadmin@kernel.org>.  
Please do not use this address for questions that are not related to  
the operation of this site. Please see our homepage at  
http://www.kernel.org/ for links to Linux documentation resources.  
Login successful.  
Logged in to ftp.kernel.org.  
ncftp / > 
```

提示：ncftp的命令提示符为"ncftp / >"，而不是ftp中的"ftp / >"。

使用ncftp命令操作、下载文件。

ncftp的命令基本上与ftp相同，例如可以使用"cd"命令切换在FTP服务器中的当前目录，使用"ls"命令列出当前目录内容，使用"get"命令下载"/pub"目录下的README文件、使用"quit"离开ncftp等。操作结果如下：

```shell
ncftp / > pwd               #查看当前路径  
ftp://ftp.kernel.org        #当前路径为根目录  
ncftp / > ls                #查看当前目录列表  
bin/ for_mirrors_only/ pub/  
dev/ lib/ usr@  
etc/ lost+found/ welcome.msg@  
ncftp / > cd pub            #切换目录到pub 子目录  
Directory successfully changed.  
ncftp /pub > ls             #查看pub 的目录列表  
dist/ media/ scm/  
index.html RCS/ site/  
linux/ README software/  
lost+found/ README_ABOUT_BZ2_FILES tools/  
ncftp /pub > get README     #下载README 文件  
README: 1.87 KB 10.39 KB/s  
ncftp /pub > quit           #离开ncftp 
```

与ftp不同的是，ncftp此时会提示用户是否将FTP服务器保存为书签，以便于下次登录，用户可以进行自定义书签名等操作，如下所示：

```shell
You have not saved a bookmark for this site.  #离开提示信息  
Would you like to save a bookmark to:  
ftp://ftp.kernel.org/pub/  
Save? (yes/no) yes                            #确认是否保存  
Enter a name for this bookmark, or hit enter for "kernel": kernel #输入书签名  
Bookmark "kernel" saved. 
```

---

### ftpshut

Linux ftpshut命令在指定的时间关闭FTP服务器。

本指令提供系统管理者在设置的时间关闭FTP服务器，且能在关闭之前发出警告信息通知用户。关闭时间若设置后为"none"，则会马上关闭服务器。如果采用"+30"的方式来设置表示服务器在30分钟之后关闭。依次类推，假设使用"1130"的格式则代表服务器会在每日的11时30分关闭，时间格式为24小时制。FTP服务器关闭后，在/etc目录下会产生一个名称为shutmsg的文件，把它删除后即可再度启动FTP服务器的功能。

#### 语法

```shell
ftpshut [-d<分钟>][-l<分钟>][关闭时间]["警告信息"]
```

**参数**：

- -d<分钟> 切断所有FTP连线时间。
- -l<分钟> 停止接受FTP登入的时间。

#### 实例

在晚上11:00 关闭FTP服务器，并在关闭前5 分钟拒绝新的FTP登录，前3 分钟关闭所有ftp的链接，且给出警告信息，可使用如下命令：

```shell
ftpshut-d 3 -1 5 1100 "Server will be shutdown at 23:00:00" 
```

---

### ftpwho

Linux ftpwho命令用于显示目前所有以FTP登入的用户信息。

执行这项指令可得知目前用FTP登入系统的用户有那些人，以及他们正在进行的操作。

#### 语法

```
ftpwho
```

**参数说明：**

- -v 显示版本信息

#### 实例

查询当前有哪些用户正在登录FTP服务器，可直接使用如下命令：

```shell
ftpwho
```

该命令有如下输出结果：

```shell
$ ftpwho              #查询当前正在登录FTP 服务器的用户  
standalone FTP daemon[2085]：  
3547 wyw [1m20s] 1m25s(idle)  
Service class - 1 user #当前有一个用户登录FTP服务器 
```

---

### ftpcount

Linux ftpcount命令用于显示目前以FTP登入的用户人数。

执行这项指令可得知目前用FTP登入系统的人数以及FTP登入人数的上限。

#### 语法

```shell
ftpcount
```

**参数说明：**

- -f<设定文件> : 指定设定文件的路径。
- -h，--help ：显示帮助信息。

#### 实例

ftpcount 可以直接查询FTP服务器上用户的人数，可直接使用如下命令：

```shell
ftpcount              #查询当前FTP用户的人数 
```

该命令有如下输出结果：

```shell
$ ftpcount             #查询当前FTP用户的人数  
Master proftpd process 2085:  
Service class - 6 user #当前共6个用户登录到服务器 
```

---

## 磁盘管理

### cd

Linux cd（英文全拼：change directory）命令用于切换当前工作目录。

其中 dirName 表示法可为绝对路径或相对路径。若目录名称省略，则变换至使用者的 home 目录 (也就是刚 login 时所在的目录)。

另外，**~** 也表示为 home 目录 的意思， **.** 则是表示目前所在的目录， **..** 则表示目前目录位置的上一层目录。

#### 语法

```shell
cd [dirName]
```

- dirName：要切换的目标目录。

#### 实例

跳到 /usr/bin/ :

```shell
cd /usr/bin
```

跳到自己的 home 目录 :

```shell
cd ~
```

跳到目前目录的上上两层 :

```shell
cd ../..
```

---

### dirs

Linux dirs命令用于显示目录记录。

显示目录堆叠中的记录。

#### 语法

```shell
dirs [+/-n -l]
```

**参数**：

- +n 显示从左边算起第n笔的目录。
- -n 显示从右边算起第n笔的目录。
- -l 显示目录完整的记录。

#### 实例

列出"/home/cc/Ruijie"里所有内容的详细信息。可用如下命令。

```shell
dir -l /home/cc/Ruijie
```

下面是显示的内容：

```shell
$ dir -l /home/cc/Ruijie

总计2168

-rwxr-xr-x 1 cc cc  112876 2008-06-26 libpcap.so.0.6.2 -rwxr-xr-x 1 cc cc  737192 2008-06-26 libstdc++.so.5 -rwxr-xr-x 1 cc cc1938 2004-04-23 readme.txt

-rwxr-xr-x 1 cc cc 1350772 2005-08-31 xrgsu
```

---

### mkdir

Linux mkdir（英文全拼：make directory）命令用于创建目录。

#### 语法

```shell
mkdir [-p] dirName
```

**参数说明**：

- -p 确保目录名称存在，不存在的就建一个。

#### 实例

在工作目录下，建立一个名为 runoob 的子目录 :

```shell
mkdir runoob
```

在工作目录下的 runoob2 目录中，建立一个名为 test 的子目录。

若 runoob2 目录原本不存在，则建立一个。（注：本例若不加 -p 参数，且原本 runoob2 目录不存在，则产生错误。）

```shell
mkdir -p runoob2/test
```

---

## 系统管理

### adduser

Linux adduser 命令用于新增使用者帐号或更新预设的使用者资料。

adduser 与 useradd 指令为同一指令（经由符号连结 symbolic link）。

使用权限：系统管理员。

adduser 是增加使用者。相对的，也有删除使用者的指令 [userdel](https://www.runoob.com/linux/linux-comm-userdel.html)，语法为 **userdel [login ID]**。

#### 语法

```shell
adduser [-c comment] [-d home_dir] [-e expire_date] [-f inactive_time] [-g initial_group] [-G group[,...]] [-m [-k skeleton_dir] | -M] [-p passwd] [-s shell] [-u uid [ -o]] [-n] [-r] loginid
```

或

```shell
adduser -D [-g default_group] [-b default_home] [-f default_inactive] [-e default_expire_date] [-s default_shell]
```

**参数说明**：

- -c comment 新使用者位于密码档（通常是 /etc/passwd）的注解资料
- -d home_dir 设定使用者的家目录为 home_dir ，预设值为预设的 home 后面加上使用者帐号 loginid
- -e expire_date 设定此帐号的使用期限（格式为 YYYY-MM-DD），预设值为永久有效
- -f inactive_time 范例：

#### 实例

添加一个一般用户

```shell
# adduser kk //添加用户kk
```

为添加的用户指定相应的用户组

```shell
# adduser -g root kk //添加用户kk，并指定用户所在的组为root用户组
```

创建一个系统用户

```shell
# adduser -r kk //创建一个系统用户kk
```

为新添加的用户指定/home目录

```shell
# adduser -d /home/myf kk //新添加用户kk，其home目录为/home/myf
//当用户名kk登录主机时，系统进入的默认目录为/home/myf
```

---

### useradd

Linux useradd 命令用于建立用户帐号。

useradd 可用来建立用户帐号。帐号建好之后，再用 passwd 设定帐号的密码。而可用 userdel 删除帐号。使用 useradd 指令所建立的帐号，实际上是保存在 /etc/passwd 文本文件中。

#### 语法

```shell
useradd [-mMnr][-c <备注>][-d <登入目录>][-e <有效期限>][-f <缓冲天数>][-g <群组>][-G <群组>][-s <shell>][-u <uid>][用户帐号]
```

或

```shell
useradd -D [-b][-e <有效期限>][-f <缓冲天数>][-g <群组>][-G <群组>][-s <shell>]
```

**参数说明**：

- -c<备注> 　加上备注文字。备注文字会保存在passwd的备注栏位中。
- -d<登入目录> 　指定用户登入时的起始目录。
- -D 　变更预设值．
- -e<有效期限> 　指定帐号的有效期限。
- -f<缓冲天数> 　指定在密码过期后多少天即关闭该帐号。
- -g<群组> 　指定用户所属的群组。
- -G<群组> 　指定用户所属的附加群组。
- -m 　制定用户的登入目录。
- -M 　不要自动建立用户的登入目录。
- -n 　取消建立以用户名称为名的群组．
- -r 　建立系统帐号。

#### 实例

添加一般用户

```shell
# useradd tt
```

为添加的用户指定相应的用户组

```shell
# useradd -g root tt
```

创建一个系统用户

```shell
# useradd -r tt
```

为新添加的用户指定home目录

```shell
# useradd -d /home/myd tt
```

建立用户且制定ID

```shell
# useradd caojh -u 544
```

```
#添加一个不能登录的用户
useradd -d /usr/local/apache -g apache -s /bin/false apache
```

要拒绝系统用户登录，可以将其 shell 设置为 /usr/sbin/nologin 或者 /bin/false。

```
usermod -s | --shell /usr/sbin/nologin username
```

或者

```
usermod -s | -shell /bin/false username
```

**说明及比较：**

```
/bin/false
```

/bin/false 什么也不做只是返回一个错误状态，然后立即退出。将用户的 shell 设置为 /bin/false，用户会无法登录，并且不会有任何提示。

```
/usr/sbin/nologin
```

nologin 会礼貌的向用户显示一条信息，并拒绝用户登录：

```
This account is currently not available.
```

有一些软件，比如一些 ftp 服务器软件，对于本地非虚拟账户，只有用户有有效的 shell 才能使用 ftp 服务。这时候就可以使用 nologin 使用户即不能登录系统，还能使用一些系统服务，比如 ftp 服务。/bin/false 则不行，这是二者的重要区别之一。

```
/etc/nologin
```

如果存在 /etc/nologin 文件，则系统只允许 root 用户登录，其他用户全部被拒绝登录，并向他们显示 /etc/nologin 文件的内容。

---

### sudo

Linux sudo命令以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行。

使用权限：在 /etc/sudoers 中有出现的使用者。

#### 语法

```shell
sudo -V
sudo -h
sudo -l
sudo -v
sudo -k
sudo -s
sudo -H
sudo [ -b ] [ -p prompt ] [ -u username/#uid] -s
sudo command
```

**参数说明**：

- -V 显示版本编号
- -h 会显示版本编号及指令的使用方式说明
- -l 显示出自己（执行 sudo 的使用者）的权限
- -v 因为 sudo 在第一次执行时或是在 N 分钟内没有执行（N 预设为五）会问密码，这个参数是重新做一次确认，如果超过 N 分钟，也会问密码
- -k 将会强迫使用者在下一次执行 sudo 时问密码（不论有没有超过 N 分钟）
- -b 将要执行的指令放在背景执行
- -p prompt 可以更改问密码的提示语，其中 %u 会代换为使用者的帐号名称， %h 会显示主机名称
- -u username/#uid 不加此参数，代表要以 root 的身份执行指令，而加了此参数，可以以 username 的身份执行指令（#uid 为该 username 的使用者号码）
- -s 执行环境变数中的 SHELL 所指定的 shell ，或是 /etc/passwd 里所指定的 shell
- -H 将环境变数中的 HOME （家目录）指定为要变更身份的使用者家目录（如不加 -u 参数就是系统管理者 root ）
- command 要以系统管理者身份（或以 -u 更改为其他人）执行的指令

#### 实例

sudo命令使用

```shell
$ sudo ls
[sudo] password for hnlinux: 
hnlinux is not in the sudoers file. This incident will be reported.
```

指定用户执行命令

```shell
# sudo -u userb ls -l
```

显示sudo设置

```shell
$ sudo -L //显示sudo设置
Available options in a sudoers ``Defaults'' line:

syslog: Syslog facility if syslog is being used for logging
syslog_goodpri: Syslog priority to use when user authenticates successfully
syslog_badpri: Syslog priority to use when user authenticates unsuccessfully
long_otp_prompt: Put OTP prompt on its own line
ignore_dot: Ignore '.' in $PATH
mail_always: Always send mail when sudo is run
mail_badpass: Send mail if user authentication fails
mail_no_user: Send mail if the user is not in sudoers
mail_no_host: Send mail if the user is not in sudoers for this host
mail_no_perms: Send mail if the user is not allowed to run a command
tty_tickets: Use a separate timestamp for each user/tty combo
lecture: Lecture user the first time they run sudo
lecture_file: File containing the sudo lecture
authenticate: Require users to authenticate by default
root_sudo: Root may run sudo
log_host: Log the hostname in the (non-syslog) log file
log_year: Log the year in the (non-syslog) log file
shell_noargs: If sudo is invoked with no arguments, start a shell
set_home: Set $HOME to the target user when starting a shell with -s
always_set_home: Always set $HOME to the target user's home directory
path_info: Allow some information gathering to give useful error messages
fqdn: Require fully-qualified hostnames in the sudoers file
insults: Insult the user when they enter an incorrect password
requiretty: Only allow the user to run sudo if they have a tty
env_editor: Visudo will honor the EDITOR environment variable
rootpw: Prompt for root's password, not the users's
runaspw: Prompt for the runas_default user's password, not the users's
targetpw: Prompt for the target user's password, not the users's
use_loginclass: Apply defaults in the target user's login class if there is one
set_logname: Set the LOGNAME and USER environment variables
stay_setuid: Only set the effective uid to the target user, not the real uid
preserve_groups: Don't initialize the group vector to that of the target user
loglinelen: Length at which to wrap log file lines (0 for no wrap)
timestamp_timeout: Authentication timestamp timeout
passwd_timeout: Password prompt timeout
passwd_tries: Number of tries to enter a password
umask: Umask to use or 0777 to use user's
logfile: Path to log file
mailerpath: Path to mail program
mailerflags: Flags for mail program
mailto: Address to send mail to
mailfrom: Address to send mail from
mailsub: Subject line for mail messages
badpass_message: Incorrect password message
timestampdir: Path to authentication timestamp dir
timestampowner: Owner of the authentication timestamp dir
exempt_group: Users in this group are exempt from password and PATH requirements
passprompt: Default password prompt
passprompt_override: If set, passprompt will override system prompt in all cases.
runas_default: Default user to run commands as
secure_path: Value to override user's $PATH with
editor: Path to the editor for use by visudo
listpw: When to require a password for 'list' pseudocommand
verifypw: When to require a password for 'verify' pseudocommand
noexec: Preload the dummy exec functions contained in 'noexec_file'
noexec_file: File containing dummy exec functions
ignore_local_sudoers: If LDAP directory is up, do we ignore local sudoers file
closefrom: File descriptors >= %d will be closed before executing a command
closefrom_override: If set, users may override the value of `closefrom' with the -C option
setenv: Allow users to set arbitrary environment variables
env_reset: Reset the environment to a default set of variables
env_check: Environment variables to check for sanity
env_delete: Environment variables to remove
env_keep: Environment variables to preserve
role: SELinux role to use in the new security context
type: SELinux type to use in the new security context
askpass: Path to the askpass helper program
env_file: Path to the sudo-specific environment file
sudoers_locale: Locale to use while parsing sudoers
visiblepw: Allow sudo to prompt for a password even if it would be visisble
pwfeedback: Provide visual feedback at the password prompt when there is user input
fast_glob: Use faster globbing that is less accurate but does not access the filesystem
umask_override: The umask specified in sudoers will override the user's, even if it is more permissive
```

以root权限执行上一条命令

```shell
$ sudo !!
```

以特定用户身份进行编辑文本

```shell
$ sudo -u uggc vi ~www/index.html
//以 uggc 用户身份编辑  home 目录下www目录中的 index.html 文件
```

列出目前的权限

```shell
sudo -l
```

列出 sudo 的版本资讯

```shell
sudo -V
```

---

### kill

Linux kill 命令用于删除执行中的程序或工作。

kill 可将指定的信息送至程序。预设的信息为 SIGTERM(15)，可将指定程序终止。若仍无法终止该程序，可使用 SIGKILL(9) 信息尝试强制删除程序。程序或工作的编号可利用 ps 指令或 jobs 指令查看。

#### 语法

```shell
kill [-s <信息名称或编号>][程序]　或　kill [-l <信息编号>]
```

**参数说明**：

- -l <信息编号> 　若不加<信息编号>选项，则 -l 参数会列出全部的信息名称。
- -s <信息名称或编号> 　指定要送出的信息。
- [程序] 　[程序]可以是程序的PID或是PGID，也可以是工作编号。

使用 kill -l 命令列出所有可用信号。

最常用的信号是：

- 1 (HUP)：重新加载进程。
- 9 (KILL)：杀死一个进程。
- 15 (TERM)：正常停止一个进程。

#### 实例

杀死进程

```shell
# kill 12345
```

强制杀死进程

```shell
# kill -KILL 123456
```

发送SIGHUP信号，可以使用一下信号

```shell
# kill -HUP pid
```

彻底杀死进程S

```shell
# kill -9 123456
```

显示信号

```shell
# kill -l
1) SIGHUP     2) SIGINT     3) SIGQUIT     4) SIGILL     5) SIGTRAP
6) SIGABRT     7) SIGBUS     8) SIGFPE     9) SIGKILL    10) SIGUSR1
11) SIGSEGV    12) SIGUSR2    13) SIGPIPE    14) SIGALRM    15) SIGTERM
16) SIGSTKFLT    17) SIGCHLD    18) SIGCONT    19) SIGSTOP    20) SIGTSTP
21) SIGTTIN    22) SIGTTOU    23) SIGURG    24) SIGXCPU    25) SIGXFSZ
26) SIGVTALRM    27) SIGPROF    28) SIGWINCH    29) SIGIO    30) SIGPWR
31) SIGSYS    34) SIGRTMIN    35) SIGRTMIN+1    36) SIGRTMIN+2    37) SIGRTMIN+3
38) SIGRTMIN+4    39) SIGRTMIN+5    40) SIGRTMIN+6    41) SIGRTMIN+7    42) SIGRTMIN+8
43) SIGRTMIN+9    44) SIGRTMIN+10    45) SIGRTMIN+11    46) SIGRTMIN+12    47) SIGRTMIN+13
48) SIGRTMIN+14    49) SIGRTMIN+15    50) SIGRTMAX-14    51) SIGRTMAX-13    52) SIGRTMAX-12
53) SIGRTMAX-11    54) SIGRTMAX-10    55) SIGRTMAX-9    56) SIGRTMAX-8    57) SIGRTMAX-7
58) SIGRTMAX-6    59) SIGRTMAX-5    60) SIGRTMAX-4    61) SIGRTMAX-3    62) SIGRTMAX-2
63) SIGRTMAX-1    64) SIGRTMAX
```

杀死指定用户所有进程

```shell
#kill -9 $(ps -ef | grep hnlinux) //方法一 过滤出hnlinux用户进程 
#kill -u hnlinux //方法二
```

---

## 备份压缩

### gzexe

Linux gzexe命令用于压缩执行文件。

gzexe是用来压缩执行文件的程序。当您去执行被压缩过的执行文件时，该文件会自动解压然后继续执行，和使用一般的执行文件相同。

#### 语法

```shell
gzexe [-d][执行文件...] #解开压缩文件。
```

**参数**：

- -d 　解开压缩文件。

#### 实例

压缩可执行文件

```shell
# gzexe abc 
```

### gzip

Linux gzip命令用于压缩文件。

gzip是个使用广泛的压缩程序，文件经它压缩过后，其名称后面会多出".gz"的扩展名。

#### 语法

```
gzip [-acdfhlLnNqrtvV][-S &lt;压缩字尾字符串&gt;][-&lt;压缩效率&gt;][--best/fast][文件...] 或 gzip [-acdfhlLnNqrtvV][-S &lt;压缩字尾字符串&gt;][-&lt;压缩效率&gt;][--best/fast][目录]
```

**参数**：

- -a或--ascii 　使用ASCII文字模式。
- -c或--stdout或--to-stdout 　把压缩后的文件输出到标准输出设备，不去更动原始文件。
- -d或--decompress或----uncompress 　解开压缩文件。
- -f或--force 　强行压缩文件。不理会文件名称或硬连接是否存在以及该文件是否为符号连接。
- -h或--help 　在线帮助。
- -l或--list 　列出压缩文件的相关信息。
- -L或--license 　显示版本与版权信息。
- -n或--no-name 　压缩文件时，不保存原来的文件名称及时间戳记。
- -N或--name 　压缩文件时，保存原来的文件名称及时间戳记。
- -q或--quiet 　不显示警告信息。
- -r或--recursive 　递归处理，将指定目录下的所有文件及子目录一并处理。
- -S<压缩字尾字符串>或----suffix<压缩字尾字符串> 　更改压缩字尾字符串。
- -t或--test 　测试压缩文件是否正确无误。
- -v或--verbose 　显示指令执行过程。
- -V或--version 　显示版本信息。
- -<压缩效率> 　压缩效率是一个介于1－9的数值，预设值为"6"，指定愈大的数值，压缩效率就会愈高。
- --best 　此参数的效果和指定"-9"参数相同。
- --fast 　此参数的效果和指定"-1"参数相同。

#### 实例

压缩文件

```shell
[root@runoob.com a]# ls //显示当前目录文件
a.c b.h d.cpp
[root@runoob.com a]# gzip * //压缩目录下的所有文件
[root@runoob.com a]# ls //显示当前目录文件
a.c.gz    b.h.gz    d.cpp.gz
[root@runoob.com a]# 
```

接范例1， 列出详细的信息

```shell
[root@runoob.com a]# gzip -dv * //解压文件，并列出详细信息
a.c.gz:     0.0% -- replaced with a.c
b.h.gz:     0.0% -- replaced with b.h
d.cpp.gz:     0.0% -- replaced with d.cpp
[root@runoob.com a]# 
```

接范例1，显示压缩文件的信息

```shell
[root@runoob.com a]# gzip -l *
     compressed    uncompressed ratio uncompressed_name
         24          0  0.0% a.c
         24          0  0.0% b.h
         26          0  0.0% d.cpp
```

### tar

Linux tar（英文全拼：tape archive ）命令用于备份文件。

tar 是用来建立，还原备份文件的工具程序，它可以加入，解开备份文件内的文件。

#### 语法

```shell
tar [-ABcdgGhiklmMoOpPrRsStuUvwWxzZ][-b <区块数目>][-C <目的目录>][-f <备份文件>][-F <Script文件>][-K <文件>][-L <媒体容量>][-N <日期时间>][-T <范本文件>][-V <卷册名称>][-X <范本文件>][-<设备编号><存储密度>][--after-date=<日期时间>][--atime-preserve][--backuup=<备份方式>][--checkpoint][--concatenate][--confirmation][--delete][--exclude=<范本样式>][--force-local][--group=<群组名称>][--help][--ignore-failed-read][--new-volume-script=<Script文件>][--newer-mtime][--no-recursion][--null][--numeric-owner][--owner=<用户名称>][--posix][--erve][--preserve-order][--preserve-permissions][--record-size=<区块数目>][--recursive-unlink][--remove-files][--rsh-command=<执行指令>][--same-owner][--suffix=<备份字尾字符串>][--totals][--use-compress-program=<执行指令>][--version][--volno-file=<编号文件>][文件或目录...]
```

**参数**：

- -A或--catenate 新增文件到已存在的备份文件。
- -b<区块数目>或--blocking-factor=<区块数目> 设置每笔记录的区块数目，每个区块大小为12Bytes。
- -B或--read-full-records 读取数据时重设区块大小。
- -c或--create 建立新的备份文件。
- -C<目的目录>或--directory=<目的目录> 切换到指定的目录。
- -d或--diff或--compare 对比备份文件内和文件系统上的文件的差异。
- -f<备份文件>或--file=<备份文件> 指定备份文件。
- -F<Script文件>或--info-script=<Script文件> 每次更换磁带时，就执行指定的Script文件。
- -g或--listed-incremental 处理GNU格式的大量备份。
- -G或--incremental 处理旧的GNU格式的大量备份。
- -h或--dereference 不建立符号连接，直接复制该连接所指向的原始文件。
- -i或--ignore-zeros 忽略备份文件中的0 Byte区块，也就是EOF。
- -k或--keep-old-files 解开备份文件时，不覆盖已有的文件。
- -K<文件>或--starting-file=<文件> 从指定的文件开始还原。
- -l或--one-file-system 复制的文件或目录存放的文件系统，必须与tar指令执行时所处的文件系统相同，否则不予复制。
- -L<媒体容量>或-tape-length=<媒体容量> 设置存放每体的容量，单位以1024 Bytes计算。
- -m或--modification-time 还原文件时，不变更文件的更改时间。
- -M或--multi-volume 在建立，还原备份文件或列出其中的内容时，采用多卷册模式。
- -N<日期格式>或--newer=<日期时间> 只将较指定日期更新的文件保存到备份文件里。
- -o或--old-archive或--portability 将资料写入备份文件时使用V7格式。
- -O或--stdout 把从备份文件里还原的文件输出到标准输出设备。
- -p或--same-permissions 用原来的文件权限还原文件。
- -P或--absolute-names 文件名使用绝对名称，不移除文件名称前的"/"号。
- -r或--append 新增文件到已存在的备份文件的结尾部分。
- -R或--block-number 列出每个信息在备份文件中的区块编号。
- -s或--same-order 还原文件的顺序和备份文件内的存放顺序相同。
- -S或--sparse 倘若一个文件内含大量的连续0字节，则将此文件存成稀疏文件。
- -t或--list 列出备份文件的内容。
- -T<范本文件>或--files-from=<范本文件> 指定范本文件，其内含有一个或多个范本样式，让tar解开或建立符合设置条件的文件。
- -u或--update 仅置换较备份文件内的文件更新的文件。
- -U或--unlink-first 解开压缩文件还原文件之前，先解除文件的连接。
- -v或--verbose 显示指令执行过程。
- -V<卷册名称>或--label=<卷册名称> 建立使用指定的卷册名称的备份文件。
- -w或--interactive 遭遇问题时先询问用户。
- -W或--verify 写入备份文件后，确认文件正确无误。
- -x或--extract或--get 从备份文件中还原文件。
- -X<范本文件>或--exclude-from=<范本文件> 指定范本文件，其内含有一个或多个范本样式，让ar排除符合设置条件的文件。
- -z或--gzip或--ungzip 通过gzip指令处理备份文件。
- -Z或--compress或--uncompress 通过compress指令处理备份文件。
- -<设备编号><存储密度> 设置备份用的外围设备编号及存放数据的密度。
- --after-date=<日期时间> 此参数的效果和指定"-N"参数相同。
- --atime-preserve 不变更文件的存取时间。
- --backup=<备份方式>或--backup 移除文件前先进行备份。
- --checkpoint 读取备份文件时列出目录名称。
- --concatenate 此参数的效果和指定"-A"参数相同。
- --confirmation 此参数的效果和指定"-w"参数相同。
- --delete 从备份文件中删除指定的文件。
- --exclude=<范本样式> 排除符合范本样式的文件。
- --group=<群组名称> 把加入设备文件中的文件的所属群组设成指定的群组。
- --help 在线帮助。
- --ignore-failed-read 忽略数据读取错误，不中断程序的执行。
- --new-volume-script=<Script文件> 此参数的效果和指定"-F"参数相同。
- --newer-mtime 只保存更改过的文件。
- --no-recursion 不做递归处理，也就是指定目录下的所有文件及子目录不予处理。
- --null 从null设备读取文件名称。
- --numeric-owner 以用户识别码及群组识别码取代用户名称和群组名称。
- --owner=<用户名称> 把加入备份文件中的文件的拥有者设成指定的用户。
- --posix 将数据写入备份文件时使用POSIX格式。
- --preserve 此参数的效果和指定"-ps"参数相同。
- --preserve-order 此参数的效果和指定"-A"参数相同。
- --preserve-permissions 此参数的效果和指定"-p"参数相同。
- --record-size=<区块数目> 此参数的效果和指定"-b"参数相同。
- --recursive-unlink 解开压缩文件还原目录之前，先解除整个目录下所有文件的连接。
- --remove-files 文件加入备份文件后，就将其删除。
- --rsh-command=<执行指令> 设置要在远端主机上执行的指令，以取代rsh指令。
- --same-owner 尝试以相同的文件拥有者还原文件。
- --suffix=<备份字尾字符串> 移除文件前先行备份。
- --totals 备份文件建立后，列出文件大小。
- --use-compress-program=<执行指令> 通过指定的指令处理备份文件。
- --version 显示版本信息。
- --volno-file=<编号文件> 使用指定文件内的编号取代预设的卷册编号。

#### 实例

压缩文件 非打包

```shell
# touch a.c       
# tar -czvf test.tar.gz a.c   //压缩 a.c文件为test.tar.gz
a.c
```

列出压缩文件内容

```shell
# tar -tzvf test.tar.gz 
-rw-r--r-- root/root     0 2010-05-24 16:51:59 a.c
```

解压文件

```shell
# tar -xzvf test.tar.gz 
a.c
```