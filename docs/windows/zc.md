---
comments: true
---

## 介绍

 `Windows的注册表`：是一个重要的系统组件，用于存储操作系统和应用程序的配置信息。它类似于一个数据库，包含了各种键值对、参数、设置等，可以通过注册表来管理和修改系统和应用程序的行为。
### 功能
- 存储系统和应用程序的配置信息：Windows和应用程序可以将自己的配置信息保存到注册表中，以便在下次启动时快速读取和应用这些设置。

- 管理系统和应用程序的行为：通过修改注册表中的键值对，可以改变系统和应用程序的行为，例如修改桌面背景、禁用某些功能、设置默认打开方式等。

- 维护系统的安全性：Windows可以使用注册表来存储用户的安全设置，例如密码策略、用户权限等。

- 支持应用程序的扩展：应用程序可以使用注册表来存储自己的设置和配置信息，以便进行扩展和定制。

## 注册表结构

> Windows的注册表由多个键（`Key`）、子键（subkey）和值（`Value`）组成，可以看作一个树形结构。

| 内容                | 描述                       |
| ------------------- | -------------------------- |
| HKEY_CLASSES_ROOT   | 表示所有文件类型的类信息   |
| HKEY_CURRENT_USER   | 表示当前用户的设置信息     |
| HKEY_LOCAL_MACHINE  | 表示计算机的硬件和软件信息 |
| HKEY_USERS          | 表示所有用户的设置信息     |
| HKEY_CURRENT_CONFIG | 表示当前计算机的设置信息   |

Windows注册表文件格式规范：https://github.com/msuhanov/regf/blob/master/Windows%20registry%20file%20format%20specification.md

### 具体目录

#### 操作系统安装时间

`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion`的InstallDate子键

#### 关机时间

`HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\Windows`的ShutdownTime键值，以64位Windows/FILETIME时间格式保存。

#### 计算机名称

`HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\ComputerName\ComputerName`的ComputerName键值

#### 本地用户

`HKEY_LOCAL_MACHINE\SAM\SAM\Domains\Account\Users\Names`

#### 最后登录的用户

`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Authentication\LogonUI`

#### 当前登录用户

`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Authentication\LogonUI\SessionData\1`

#### U盘序列号

`HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Enum\USBSTOR\Disk&Ven_WD&Prod_Elements_SE_2623&Rev_1034`
`Disk`：说明该设备是一个USB存储介质设备，而不是不可存储的设备
`Ven厂商`：后面的WD就是西部数据
`Prod产品型号`：Elements_SE_2623
`Rev版本`：1034
`序列号`：子健的键值，&0前面的数值
键值有GUID

#### 卷标名称

`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Portable Devices\Devices`

#### 安装的程序

`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths`

#### 编辑卸载的程序

`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall`

#### 最近使用的文件

`HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\ComDlg32\OpenSavePidlMRU`

#### 最近运行的命令行

`HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU`

### 主要配置单元

- `SYSTEM`：对应的注册表分支为`HKEY_LOCAL_MACHINE\SYSTEM`，对应的存储文件是`\Windows\System32\config\SYSTEM`，其作用是存储计算机硬件和系统的信息。

- `NTUSER.DAT`：对应的注册表分支是`HKEY_CURRENT_USER`，存储在用户目录下，与其他注册表文件是分开的，主要用于存储用户的配置信息。

- `SAM`：分支是`HKEY_LOCAL_MACHINE\SAM`，存储在`C:\Windows\System32\config\SAM`文件中，保存了用户的密码信息。

- `SECURITY`：对应的分支`HKEY_LOCAL_MACHINE\SECURITY`，存储在`C:\Windows\System32\config\SECURITY`文件中，保存了安全性设置信息。

- `SOFTWARE`：分支是`HKEY_LOCAL_MACHINE\SOFTWARE`，文件存储在`C:\Windows\System32\config\SOFTWARE`中，保存安装软件的信息。
## 访问和修改注册表

- 使用Regedit.exe：Regedit.exe是Windows自带的注册表编辑器，可以用来查看和修改注册表中的键值对。打开Regedit.exe后，可以选择需要查看或修改的节点，然后双击该节点下的键值对进行编辑。Win+R输入：regedit

- 使用Reg.exe：Reg.exe是Windows命令行工具，可以用来在命令行中访问和修改注册表。例如，可以使用“reg query”命令来查询注册表中的键值对，“reg add”命令来添加新的键值对，“reg delete”命令来删除键值对等。

- 使用API：Windows还提供了一组API，可以在程序中访问和修改注册表。例如，可以使用RegOpenKeyEx函数打开一个注册表的键，使用RegQueryValueEx函数查询一个键值对的值，使用RegSetValueEx函数设置一个键值对的值等。

为了防止注册表出错和损坏，`Registry hives`还包括注册的事务日志文件和注册表的备份文件。事务日志文件名与注册表文件一致，且在同一个路径中，只是后缀不同。事务日志文件以`.LOG`为后缀，多个日志后缀会显示`LOG1`、`LOG2`这样。（如果要查看这些日志文件，需要打开文件夹选项，取消勾选“隐藏受保护的操作系统文件”）

## 例题

2019年美亚杯 62题

| 62                                                     | 分析何源的公司计算机内存镜像，以下那一项关于这台计算机连接 USB 装置的描述是正确？ |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| A                                                      | 没有，因为透析资料找不到                                     |
| B                                                      | 没有，因为内存容量没有取得完整的注册表资料                   |
| C                                                      | 有，而且装置的牌子应该是 HUAWEI                              |
| D                                                      | 有，而且装置的 GUID 是 4d36e967-e325-11ce-afc1-832210318     |
| E                                                      | 有，而且装置的首次插入时间 HEX 值是 40 43 30 b9 b8 8f d5 01  |

C.选项，装置的牌子是希捷`Seagate Expansion USB Device` 

D.选项很坑，你会发现找出的是`bfc1`,而选项是`afc1`所以是错误的

E.选项：根据下面的link，知道`First Install Date`就是`首次插入时间`，而且也说明了`0065`是对应的这个首次插入时间

在找到后可以发现是匹配的。

![](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/Writeup/image-20221013225204591.png)


### 总结

`USB设备`通常也要看`SYSTEM的注册表`

Link：https://www.doc88.com/p-9107655008710.html?r=1

![](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/Writeup/image-20221013224354993.png)
![](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/Writeup/image-20221013224427613.png)


另外如果分析结果中是`usbstor`则是连接着的USB，如果是`usbhub`则是未连接的USB

## 参考资料

[注册表取证](https://blog.csdn.net/wow0524/article/details/130301808)

[注册表取证](https://blog.csdn.net/qq_62794597/article/details/127844618)

[Windows 取证之注册表](https://baijiahao.baidu.com/s?id=1703501297715999830&wfr=spider&for=pc)
