---
title: Windows基本用法
---

## 使用Volatility

最基本的Volatility命令构造如下所示，将`plugins`替换为要试用的插件名称，将`image`替换为内存镜像的文件路径，将`profile`替换为配置文件的名称（例：Win7SP1×64）。

```python
$ python vol.py [plugin] -f [image] --profile=[profile] 
```

具体例子：

```python
$ python vol.py pslist -f /path/to/memory.img --profile=Win7SP1x64
```

对于除此之外的内容，请参考下面的文章。

## 全局命令

有几个全局的命令行选项（即它们适用于所有插件）。本节适用于 Volatility 的新手。

### 帮助菜单

可以使用`-h`或者`--help`显示帮助菜单

```python
  $ python vol.py -h 

  -h, --help            list all available options and their default values.
                        Default values may be set in the configuration file
                        (/etc/volatilityrc)
  --conf-file=/Users/mhl/.volatilityrc
                        User based configuration file
  -d, --debug           Debug volatility
  --plugins=PLUGINS     Additional plugin directories to use (colon separated)
  --info                Print information about all registered objects
  --cache-directory=/Users/mhl/.cache/volatility
                        Directory where cache files are stored
  --cache               Use caching
  --tz=TZ               Sets the (Olson) timezone for displaying timestamps
                        using pytz (if installed) or tzset
  -f FILENAME, --filename=FILENAME
                        Filename to use when opening an image
  --profile=WinXPSP2x86
                        Name of the profile to load (use --info to see a list
                        of supported profiles)
  -l LOCATION, --location=LOCATION
                        A URN location from which to load an address space
  -w, --write           Enable write support
  --dtb=DTB             DTB Address
  --output=text         Output in this format (support is module specific, see
                        the Module Output Options below)
  --output-file=OUTPUT_FILE
                        Write output in this file
  -v, --verbose         Verbose information
  --shift=SHIFT         Mac KASLR shift address
  -g KDBG, --kdbg=KDBG  Specify a KDBG virtual address (Note: for 64-bit
                        Windows 8 and above this is the address of
                        KdCopyDataBlock)
  --force               Force utilization of suspect profile
  -k KPCR, --kpcr=KPCR  Specify a specific KPCR address
  --cookie=COOKIE       Specify the address of nt!ObHeaderCookie (valid for
                        Windows 10 only)
```

### 选择配置文件

Volatility 需要知道您的内存镜像来自什么类型的系统，因此它知道要使用哪些数据结构、算法和符号。默认配置文件`WinXPSP2x86`是在内部设置的，因此如果您正在分析 `WindowsXPSP2x86` 的内存镜像，则根本不需要提供`--profile`。但是，对于其他的内存镜像，就需要你提供准确的`--profile`。

注意：如果您不知道内存镜像来自哪种类型的系统，请使用 imageinfo或 kdbgscan插件获取建议。这些插件仅适用于 Windows。

```
$ python vol.py -f [image] imageinfo
```

随后你就会获得如下的信息

![image-20221119200027149](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/image-20221119200027149.png)

`Suggested Profile` 也就是他的电脑版本号，只有这个版本号才能进行之后的步骤。

例图中的`Suggested Profile`是有四个信息，但是大概率指向的版本是第一个。

如果`Suggested Profile`后面带了一个`Instantiated with XXXXX`就是说他建议是哪个电脑版本号，所以用它建议的就行，当然这个情况也不是全都有的，有时候他不建议，你就选你自己的就行。

下方的`Image date and time`是这个内存镜像的制作时间，默认是UTC+0的时间，这个参数的下一个`Image Local date and time`就是我们的UTC+8的时间(即本机的时区)。

如果您想查看支持的配置文件名称列表，请执行以下操作：

```python
$ python vol.py --info
    
VistaSP0x64                - A Profile for Windows Vista SP0 x64
VistaSP0x86                - A Profile for Windows Vista SP0 x86
VistaSP1x64                - A Profile for Windows Vista SP1 x64
VistaSP1x86                - A Profile for Windows Vista SP1 x86
VistaSP2x64                - A Profile for Windows Vista SP2 x64
VistaSP2x86                - A Profile for Windows Vista SP2 x86
Win10x64                   - A Profile for Windows 10 x64
Win10x86                   - A Profile for Windows 10 x86
Win2003SP0x86              - A Profile for Windows 2003 SP0 x86
Win2003SP1x64              - A Profile for Windows 2003 SP1 x64
Win2003SP1x86              - A Profile for Windows 2003 SP1 x86
Win2003SP2x64              - A Profile for Windows 2003 SP2 x64
Win2003SP2x86              - A Profile for Windows 2003 SP2 x86
Win2008R2SP0x64            - A Profile for Windows 2008 R2 SP0 x64
Win2008R2SP1x64            - A Profile for Windows 2008 R2 SP1 x64
Win2008SP1x64              - A Profile for Windows 2008 SP1 x64
Win2008SP1x86              - A Profile for Windows 2008 SP1 x86
Win2008SP2x64              - A Profile for Windows 2008 SP2 x64
Win2008SP2x86              - A Profile for Windows 2008 SP2 x86
Win2012R2x64               - A Profile for Windows Server 2012 R2 x64
Win2012x64                 - A Profile for Windows Server 2012 x64
Win7SP0x64                 - A Profile for Windows 7 SP0 x64
Win7SP0x86                 - A Profile for Windows 7 SP0 x86
Win7SP1x64                 - A Profile for Windows 7 SP1 x64
Win7SP1x86                 - A Profile for Windows 7 SP1 x86
Win81U1x64                 - A Profile for Windows 8.1 Update 1 x64
Win81U1x86                 - A Profile for Windows 8.1 Update 1 x86
Win8SP0x64                 - A Profile for Windows 8 x64
Win8SP0x86                 - A Profile for Windows 8 x86
Win8SP1x64                 - A Profile for Windows 8.1 x64
Win8SP1x86                 - A Profile for Windows 8.1 x86
WinXPSP1x64                - A Profile for Windows XP SP1 x64
WinXPSP2x64                - A Profile for Windows XP SP2 x64
WinXPSP2x86                - A Profile for Windows XP SP2 x86
WinXPSP3x86                - A Profile for Windows XP SP3 x86
```

### 设置时区

从内存中提取的时间戳可以是系统本地时间，也可以是通用时间坐标 (UTC)。如果它们在 UTC 中，则可以指示 Volatility 在选择的时区中显示它们。要选择时区，请使用带有标志的标准时区名称之一（例如欧洲/伦敦、美国/东部或大多数[奥尔森时区）。](http://en.wikipedia.org/wiki/List_of_tz_database_time_zones)`--tz=TIMEZONE`如果已安装， Volatility 会尝试使用 [pytz](http://pytz.sourceforge.net/)，否则它会使用[tzset](http://docs.python.org/2/library/time.html#time.tzset)。

默认情况下，`_EPROCESS` `CreateTime`和`ExitTime`时间戳采用 UTC。以下是`pytz`已安装的 Volatility 的输出：

```python
$ python vol.py -f win7.vmem --profile=Win7SP1x86 pslist
Volatility Foundation Volatility Framework 2.4
Offset(V)  Name                    PID   PPID   Thds     Hnds   Sess  Wow64 Start                          Exit                          
---------- -------------------- ------ ------ ------ -------- ------ ------ ------------------------------ ------------------------------
0x84133630 System                    4      0     93      420 ------      0 2011-10-20 15:25:11 UTC+0000                                 
0x852add40 smss.exe                276      4      4       29 ------      0 2011-10-20 15:25:11 UTC+0000                                 
0x851d9530 csrss.exe               364    356      9      560      0      0 2011-10-20 15:25:15 UTC+0000                                 
0x859c8530 wininit.exe             404    356      7       88      0      0 2011-10-20 15:25:16 UTC+0000                                 
0x859cf530 csrss.exe               416    396     10      236      1      0 2011-10-20 15:25:16 UTC+0000
[snip]                      
```

`--tz=America/Chicago`以下是使用获取中央标准时间选项的同一示例的输出：

```python
$ python vol.py -f win7.vmem --profile=Win7SP1x86 pslist --tz=America/Chicago
Volatility Foundation Volatility Framework 2.4
Offset(V)  Name                    PID   PPID   Thds     Hnds   Sess  Wow64 Start                          Exit                          
---------- -------------------- ------ ------ ------ -------- ------ ------ ------------------------------ ------------------------------
0x84133630 System                    4      0     93      420 ------      0 2011-10-20 10:25:11 CDT-0500                                 
0x852add40 smss.exe                276      4      4       29 ------      0 2011-10-20 10:25:11 CDT-0500                                 
0x851d9530 csrss.exe               364    356      9      560      0      0 2011-10-20 10:25:15 CDT-0500                                 
0x859c8530 wininit.exe             404    356      7       88      0      0 2011-10-20 10:25:16 CDT-0500                                 
0x859cf530 csrss.exe               416    396     10      236      1      0 2011-10-20 10:25:16 CDT-0500  
[snip] 
```

下面是与上面相同的输出，但没有`pytz`安装库：

```python
$ python2.6 vol.py -f win7.vmem --profile=Win7SP1x86 pslist --tz=America/Chicago
Volatility Foundation Volatility Framework 2.4
Offset(V)  Name                    PID   PPID   Thds     Hnds   Sess  Wow64 Start                          Exit                          
---------- -------------------- ------ ------ ------ -------- ------ ------ ------------------------------ ------------------------------
0x84133630 System                    4      0     93      420 ------      0 2011-10-20 10:25:11 CDT                                      
0x852add40 smss.exe                276      4      4       29 ------      0 2011-10-20 10:25:11 CDT                                      
0x851d9530 csrss.exe               364    356      9      560      0      0 2011-10-20 10:25:15 CDT                                      
0x859c8530 wininit.exe             404    356      7       88      0      0 2011-10-20 10:25:16 CDT                                      
0x859cf530 csrss.exe               416    396     10      236      1      0 2011-10-20 10:25:16 CDT      
[snip]                                 
```