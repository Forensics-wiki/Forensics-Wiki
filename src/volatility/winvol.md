---
title: Windows命令参考
icon: fab fa-windows
order: 4
sidebar: structure
---

## 镜像识别

### imageinfo

如果要获得内存的高级摘要，请使用 `imageinfo` 命令。大多数情况下，此命令用于识别操作系统、服务包和硬件体系结构（32 位或 64 位），但它还包含其他有用信息，例如 DTB 地址和内存镜像制作时间。

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw imageinfo
Volatility Foundation Volatility Framework 2.4
Determining profile based on KDBG search...

          Suggested Profile(s) : Win7SP0x64, Win7SP1x64, Win2008R2SP0x64, Win2008R2SP1x64
                     AS Layer1 : AMD64PagedMemory (Kernel AS)
                     AS Layer2 : FileAddressSpace (/Users/Michael/Desktop/win7_trial_64bit.raw)
                      PAE type : PAE
                           DTB : 0x187000L
                          KDBG : 0xf80002803070
          Number of Processors : 1
     Image Type (Service Pack) : 0
                KPCR for CPU 0 : 0xfffff80002804d00L
             KUSER_SHARED_DATA : 0xfffff78000000000L
           Image date and time : 2012-02-22 11:29:02 UTC+0000
     Image local date and time : 2012-02-22 03:29:02 -0800
```

基础命令中的`--profile=PROFILE`，在 imageinfo 的输出中会告诉你所使用镜像的系统，因此需要你将`PROFILE`替换为得到的系统名称，如：`--profile=Win7SP0x64`，在随后的所有命令中，你都需要带上`--profile=XXXXXX`。另外`profile`有可能不止有一个建议的系统名称。

>`imageinfo`需要指定正确的内存镜像，如果不正确，那么他可能无法运行，或者运行出空白内容。


### kdbgscan

kdbgscan主要用于识别正确的`porfile`和正确的KDBG。该插件主要用于扫描连接到内存配置文件的KDBG Header签名，如果你已经知道了`profile`那么你完全可以直接使用此插件

```python
$ python vol.py -f Win2K3SP2x64-6f1bedec.vmem --profile=Win2003SP2x64 kdbgscan
Volatility Foundation Volatility Framework 2.4
**************************************************
Instantiating KDBG using: Kernel AS Win2003SP2x64 (5.2.3791 64bit)
Offset (V)                    : 0xf80001172cb0
Offset (P)                    : 0x1172cb0
KDBG owner tag check          : True
Profile suggestion (KDBGHeader): Win2003SP2x64
Version64                     : 0xf80001172c70 (Major: 15, Minor: 3790)
Service Pack (CmNtCSDVersion) : 0
Build string (NtBuildLab)     : T?
PsActiveProcessHead           : 0xfffff800011947f0 (0 processes)
PsLoadedModuleList            : 0xfffff80001197ac0 (0 modules)
KernelBase                    : 0xfffff80001000000 (Matches MZ: True)
Major (OptionalHeader)        : 5
Minor (OptionalHeader)        : 2

**************************************************
Instantiating KDBG using: Kernel AS Win2003SP2x64 (5.2.3791 64bit)
Offset (V)                    : 0xf80001175cf0
Offset (P)                    : 0x1175cf0
KDBG owner tag check          : True
Profile suggestion (KDBGHeader): Win2003SP2x64
Version64                     : 0xf80001175cb0 (Major: 15, Minor: 3790)
Service Pack (CmNtCSDVersion) : 2
Build string (NtBuildLab)     : 3790.srv03_sp2_rtm.070216-1710
PsActiveProcessHead           : 0xfffff800011977f0 (37 processes)
PsLoadedModuleList            : 0xfffff8000119aae0 (116 modules)
KernelBase                    : 0xfffff80001000000 (Matches MZ: True)
Major (OptionalHeader)        : 5
Minor (OptionalHeader)        : 2
KPCR                          : 0xfffff80001177000 (CPU 0)
```

### kpcrscan

使用本命令可以扫描到KPCR结构。在多核系统中，每个处理器都有自己的KPCR。因为通过这个命令，你可以看到每个处理器的详细信息。当前、空闲和下一个线程；CPU的型号，CR3等等

```python
$ python vol.py -f dang_win7_x64.raw --profile=Win7SP1x64 kpcrscan
Volatility Foundation Volatility Framework 2.4
**************************************************
Offset (V)                    : 0xf800029ead00
Offset (P)                    : 0x29ead00
KdVersionBlock                : 0x0
IDT                           : 0xfffff80000b95080
GDT                           : 0xfffff80000b95000
CurrentThread                 : 0xfffffa800cf694d0 TID 2148 (kd.exe:2964)
IdleThread                    : 0xfffff800029f8c40 TID 0 (Idle:0)
Details                       : CPU 0 (GenuineIntel @ 2128 MHz)
CR3/DTB                       : 0x1dcec000
**************************************************
Offset (V)                    : 0xf880009e7000
Offset (P)                    : 0x4d9e000
KdVersionBlock                : 0x0
IDT                           : 0xfffff880009f2540
GDT                           : 0xfffff880009f24c0
CurrentThread                 : 0xfffffa800cf694d0 TID 2148 (kd.exe:2964)
IdleThread                    : 0xfffff880009f1f40 TID 0 (Idle:0)
Details                       : CPU 1 (GenuineIntel @ 2220 MHz)
CR3/DTB                       : 0x1dcec000
```

## 进程和dll

### pslist

如果要列出系统的进程，可以使用`pslist`命令。`PsActiveProcessHead`将显示`偏移量`，`进程名称`，`进程ID`，`父进程ID`，`线程数`，`句柄数`以及进程启动和退出时间。从2.1版本开始还将会显示进程是否为[Wow64](https://baike.baidu.com/item/WOW64/2155695)。

>pslist不会检测隐藏或者未启动程序，如果需要请使用[`psscan`](#psscan)


如果看到具有 0 个线程、0 个句柄和/或非空退出时间的进程，则该进程实际上可能并未处于活动状态。

还要注意这两个进程`System`并不`smss.exe`会有 Session ID，因为 System 在会话建立之前启动并且`smss.exe`是会话管理器本身。

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 pslist
Volatility Foundation Volatility Framework 2.4
Offset(V)          Name                    PID   PPID   Thds     Hnds   Sess  Wow64 Start                Exit                
------------------ -------------------- ------ ------ ------ -------- ------ ------ -------------------- --------------------
0xfffffa80004b09e0 System                    4      0     78      489 ------      0 2012-02-22 19:58:20                      
0xfffffa8000ce97f0 smss.exe                208      4      2       29 ------      0 2012-02-22 19:58:20                      
0xfffffa8000c006c0 csrss.exe               296    288      9      385      0      0 2012-02-22 19:58:24                      
0xfffffa8000c92300 wininit.exe             332    288      3       74      0      0 2012-02-22 19:58:30                      
0xfffffa8000c06b30 csrss.exe               344    324      7      252      1      0 2012-02-22 19:58:30                      
0xfffffa8000c80b30 winlogon.exe            372    324      5      136      1      0 2012-02-22 19:58:31                      
0xfffffa8000c5eb30 services.exe            428    332      6      193      0      0 2012-02-22 19:58:32                      
0xfffffa80011c5700 lsass.exe               444    332      6      557      0      0 2012-02-22 19:58:32                      
0xfffffa8000ea31b0 lsm.exe                 452    332     10      133      0      0 2012-02-22 19:58:32                      
0xfffffa8001296b30 svchost.exe             568    428     10      352      0      0 2012-02-22 19:58:34                      
0xfffffa80012c3620 svchost.exe             628    428      6      247      0      0 2012-02-22 19:58:34                      
0xfffffa8001325950 sppsvc.exe              816    428      5      154      0      0 2012-02-22 19:58:41                      
0xfffffa80007b7960 svchost.exe             856    428     16      404      0      0 2012-02-22 19:58:43                      
0xfffffa80007bb750 svchost.exe             880    428     34     1118      0      0 2012-02-22 19:58:43                      
0xfffffa80007d09e0 svchost.exe             916    428     19      443      0      0 2012-02-22 19:58:43                      
0xfffffa8000c64840 svchost.exe             348    428     14      338      0      0 2012-02-22 20:02:07                      
0xfffffa8000c09630 svchost.exe             504    428     16      496      0      0 2012-02-22 20:02:07                      
0xfffffa8000e86690 spoolsv.exe            1076    428     12      271      0      0 2012-02-22 20:02:10                      
0xfffffa8000518b30 svchost.exe            1104    428     18      307      0      0 2012-02-22 20:02:10                      
0xfffffa800094d960 wlms.exe               1264    428      4       43      0      0 2012-02-22 20:02:11                      
0xfffffa8000995b30 svchost.exe            1736    428     12      200      0      0 2012-02-22 20:02:25                      
0xfffffa8000aa0b30 SearchIndexer.         1800    428     12      757      0      0 2012-02-22 20:02:26                      
0xfffffa8000aea630 taskhost.exe           1144    428      7      189      1      0 2012-02-22 20:02:41                      
0xfffffa8000eafb30 dwm.exe                1476    856      3       71      1      0 2012-02-22 20:02:41                      
0xfffffa80008f3420 explorer.exe           1652    840     21      760      1      0 2012-02-22 20:02:42                      
0xfffffa8000c9a630 regsvr32.exe           1180   1652      0 --------      1      0 2012-02-22 20:03:05  2012-02-22 20:03:08 
0xfffffa8000a03b30 rundll32.exe           2016    568      3       67      1      0 2012-02-22 20:03:16                      
0xfffffa8000a4f630 svchost.exe            1432    428     12      350      0      0 2012-02-22 20:04:14                      
0xfffffa8000999780 iexplore.exe           1892   1652     19      688      1      1 2012-02-22 11:26:12                      
0xfffffa80010c9060 iexplore.exe           2820   1892     23      733      1      1 2012-02-22 11:26:15                      
0xfffffa8001016060 DumpIt.exe             2860   1652      2       42      1      1 2012-02-22 11:28:59                      
0xfffffa8000acab30 conhost.exe            2236    344      2       51      1      0 2012-02-22 11:28:59 
```

默认情况下，`pslist`显示虚拟偏移量，`_EPROCESS`但物理偏移量可以通过`-P`开关获得：

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 pslist -P 
Volatility Foundation Volatility Framework 2.4
Offset(P)          Name                    PID   PPID   Thds     Hnds   Sess  Wow64 Start                Exit                
------------------ -------------------- ------ ------ ------ -------- ------ ------ -------------------- --------------------
0x0000000017fef9e0 System                    4      0     78      489 ------      0 2012-02-22 19:58:20                      
0x00000000176e97f0 smss.exe                208      4      2       29 ------      0 2012-02-22 19:58:20                      
0x00000000176006c0 csrss.exe               296    288      9      385      0      0 2012-02-22 19:58:24                      
0x0000000017692300 wininit.exe             332    288      3       74      0      0 2012-02-22 19:58:30                      
0x0000000017606b30 csrss.exe               344    324      7      252      1      0 2012-02-22 19:58:30
... 
```

### pstree

如果要以进程树的形式查看进行列表，请使用`pstree`命令。他的原理和`pslist`相同，因此不会显示隐藏或未启动的进程.子进程使用缩进和`.`表示。

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 pstree
Volatility Foundation Volatility Framework 2.4
Name                                                  Pid   PPid   Thds   Hnds Time                
-------------------------------------------------- ------ ------ ------ ------ --------------------
 0xfffffa80004b09e0:System                              4      0     78    489 2012-02-22 19:58:20 
. 0xfffffa8000ce97f0:smss.exe                         208      4      2     29 2012-02-22 19:58:20 
 0xfffffa8000c006c0:csrss.exe                         296    288      9    385 2012-02-22 19:58:24 
 0xfffffa8000c92300:wininit.exe                       332    288      3     74 2012-02-22 19:58:30 
. 0xfffffa8000c5eb30:services.exe                     428    332      6    193 2012-02-22 19:58:32 
.. 0xfffffa8000aa0b30:SearchIndexer.                 1800    428     12    757 2012-02-22 20:02:26 
.. 0xfffffa80007d09e0:svchost.exe                     916    428     19    443 2012-02-22 19:58:43 
.. 0xfffffa8000a4f630:svchost.exe                    1432    428     12    350 2012-02-22 20:04:14 
.. 0xfffffa800094d960:wlms.exe                       1264    428      4     43 2012-02-22 20:02:11 
.. 0xfffffa8001325950:sppsvc.exe                      816    428      5    154 2012-02-22 19:58:41 
.. 0xfffffa8000e86690:spoolsv.exe                    1076    428     12    271 2012-02-22 20:02:10 
.. 0xfffffa8001296b30:svchost.exe                     568    428     10    352 2012-02-22 19:58:34 
... 0xfffffa8000a03b30:rundll32.exe                  2016    568      3     67 2012-02-22 20:03:16
...
```

### psscan

要扫描所有的进程，请使用`psscan`命令。他可以找到之前已经终止了的进程、已经被`rootkit`隐藏的进程或者取消链接的进程。缺点就是`rookit`依然可以使用覆盖标签池的方法来隐藏进程。

```python
$ python vol.py --profile=Win7SP0x86 -f win7.dmp psscan
Volatility Foundation Volatility Framework 2.0
 Offset     Name             PID    PPID   PDB        Time created             Time exited             
---------- ---------------- ------ ------ ---------- ------------------------ ------------------------ 
0x3e025ba8 svchost.exe        1116    508 0x3ecf1220 2010-06-16 15:25:25                              
0x3e04f070 svchost.exe        1152    508 0x3ecf1340 2010-06-16 15:27:40                              
0x3e144c08 dwm.exe            1540    832 0x3ecf12e0 2010-06-16 15:26:58                              
0x3e145c18 TPAutoConnSvc.     1900    508 0x3ecf1360 2010-06-16 15:25:41                              
0x3e3393f8 lsass.exe           516    392 0x3ecf10e0 2010-06-16 15:25:18                              
0x3e35b8f8 svchost.exe         628    508 0x3ecf1120 2010-06-16 15:25:19                              
0x3e383770 svchost.exe         832    508 0x3ecf11a0 2010-06-16 15:25:20                              
0x3e3949d0 svchost.exe         740    508 0x3ecf1160 2010-06-16 15:25:20                              
0x3e3a5100 svchost.exe         872    508 0x3ecf11c0 2010-06-16 15:25:20                              
0x3e3f64e8 svchost.exe         992    508 0x3ecf1200 2010-06-16 15:25:24                              
0x3e45a530 wininit.exe         392    316 0x3ecf10a0 2010-06-16 15:25:15                              
0x3e45d928 svchost.exe        1304    508 0x3ecf1260 2010-06-16 15:25:28                              
0x3e45f530 csrss.exe           400    384 0x3ecf1040 2010-06-16 15:25:15                              
0x3e4d89c8 vmtoolsd.exe       1436    508 0x3ecf1280 2010-06-16 15:25:30                              
0x3e4db030 spoolsv.exe        1268    508 0x3ecf1240 2010-06-16 15:25:28                              
0x3e50b318 services.exe        508    392 0x3ecf1080 2010-06-16 15:25:18                              
0x3e7f3d40 csrss.exe           352    316 0x3ecf1060 2010-06-16 15:25:12                              
0x3e7f5bc0 winlogon.exe        464    384 0x3ecf10c0 2010-06-16 15:25:18                              
0x3eac6030 SearchProtocol     2448   1168 0x3ecf15c0 2010-06-16 23:30:52      2010-06-16 23:33:14     
0x3eb10030 SearchFilterHo     1812   1168 0x3ecf1480 2010-06-16 23:31:02      2010-06-16 23:33:14 
[snip]
```

如果进程在之前已经停止了，那么就会显示他的`Time exited`。

### psdispscan

这个插件类似于`psscan`，但是他是通过扫描`DISPATCHER_HEADER`来列举进程，而不是扫描进程池。因此，当他们通过覆盖标签池的方法来隐藏进程的话，那么他就会失效。但是这个插件没有得到很好的维护，导致了它只能在`XP ×86`下运行。如果要使用它，可以在命令行使用`--plugins=contrib/plugins`。

### dlllist

如果需要显示进程加载的dll，那么请使用`dlllist`命令。并且他还会告诉你这是一个静态加载还是动态加载。

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 dlllist 
************************************************************************
wininit.exe pid:    332
Command line : wininit.exe

Base                             Size          LoadCount Path
------------------ ------------------ ------------------ ----
0x00000000ff530000            0x23000             0xffff C:\Windows\system32\wininit.exe
0x0000000076d40000           0x1ab000             0xffff C:\Windows\SYSTEM32\ntdll.dll
0x0000000076b20000           0x11f000             0xffff C:\Windows\system32\kernel32.dll
0x000007fefcd50000            0x6b000             0xffff C:\Windows\system32\KERNELBASE.dll
0x0000000076c40000            0xfa000             0xffff C:\Windows\system32\USER32.dll
0x000007fefd7c0000            0x67000             0xffff C:\Windows\system32\GDI32.dll
0x000007fefe190000             0xe000             0xffff C:\Windows\system32\LPK.dll
0x000007fefef80000            0xca000             0xffff C:\Windows\system32\USP10.dll
0x000007fefd860000            0x9f000             0xffff C:\Windows\system32\msvcrt.dll
[snip]
```

:::tip

如果要显示指定进程的dll，请使用`-p`或者`--pid`过滤

:::

```
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 dlllist -p 1892
Volatility Foundation Volatility Framework 2.4
************************************************************************
iexplore.exe pid:   1892
Command line : "C:\Program Files (x86)\Internet Explorer\iexplore.exe" 
Note: use ldrmodules for listing DLLs in Wow64 processes

Base                             Size          LoadCount Path
------------------ ------------------ ------------------ ----
0x0000000000080000            0xa6000             0xffff C:\Program Files (x86)\Internet Explorer\iexplore.exe
0x0000000076d40000           0x1ab000             0xffff C:\Windows\SYSTEM32\ntdll.dll
0x00000000748d0000            0x3f000                0x3 C:\Windows\SYSTEM32\wow64.dll
0x0000000074870000            0x5c000                0x1 C:\Windows\SYSTEM32\wow64win.dll
0x0000000074940000             0x8000                0x1 C:\Windows\SYSTEM32\wow64cpu.dll
```

>要显示被 rootkit 隐藏或没有链接的进程的 DLL，首先使用 `psscan` 获取 EPROCESS 对象的物理偏移量并为其提供 `--offset=OFFSET`。该插件将“反弹”并确定 `EPROCESS 的虚拟地址`，然后获取地址空间以访问 `PEB`。


```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 dlllist --offset=0x04a291a8
```

### dlldump

从内存镜像中把dll转存出来，请使用`dlldump`命令。语法和上面的[`dlllist`](#dlllist)类似。该命令拥有如下功能：

- 转存所有进程中的所有 DLL
- 转存指定的进程的所有 DLL（使用`--pid=PID`）
- 从隐藏/未链接的进程中转储所有 DLL（带有`--offset=OFFSET`）
- 从进程内存中的任何位置转储 PE（使用`--base=BASEADDR`），此选项对于提取隐藏的 DLL 很有用
- 转储匹配正则表达式 ( `--regex=REGEX`) 的一个或多个 DLL，区分大小写或不区分大小写 ( `--ignore-case`)
- 要指定输出目录，请使用`--dump-dir=DIR`或`-d DIR`。

```
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 dlldump -D dlls/
...
Process(V)         Name                 Module Base        Module Name          Result
------------------ -------------------- ------------------ -------------------- ------
0xfffffa8000ce97f0 smss.exe             0x0000000047a90000 smss.exe             OK: module.208.176e97f0.47a90000.dll
0xfffffa8000ce97f0 smss.exe             0x0000000076d40000                      Error: DllBase is paged
0xfffffa8000c006c0 csrss.exe            0x0000000049700000 csrss.exe            OK: module.296.176006c0.49700000.dll
0xfffffa8000c006c0 csrss.exe            0x0000000076d40000 ntdll.dll            Error: DllBase is paged
0xfffffa8000c006c0 csrss.exe            0x000007fefd860000 msvcrt.dll           Error: DllBase is paged
0xfffffa80011c5700 lsass.exe            0x000007fefcc40000 WINSTA.dll           Error: DllBase is paged
0xfffffa80011c5700 lsass.exe            0x000007fefd7c0000 GDI32.dll            OK: module.444.173c5700.7fefd7c0000.dll
0xfffffa80011c5700 lsass.exe            0x000007fefc270000 DNSAPI.dll           OK: module.444.173c5700.7fefc270000.dll
0xfffffa80011c5700 lsass.exe            0x000007fefc5d0000 Secur32.dll          OK: module.444.173c5700.7fefc5d0000.dll
...
```

如果提取失败，就像上面的几个 DLL 一样，这可能意味着该 DLL 中的某些内容不是存在内存中的。在这些情况下，您仍然可以使用[vaddump](#vaddump)命令提取内存段，但是你需要手动重建PE标头，并且修复这些内容。

要转储 DLL 列表中不存在的 PE 文件（例如，由于代码注入或恶意取消链接），只需指定 PE 在进程内存中的基地址：

```python
$ python vol.py --profile=Win7SP0x86 -f win7.dmp dlldump --pid=492 -D out --base=0x00680000
```

如果您想要的 DLL 在隐藏进程中，您还可以指定 EPROCESS 偏移量：

```python
$ python vol.py --profile=Win7SP0x86 -f win7.dmp dlldump -o 0x3e3f64e8 -D out --base=0x00680000
```

### handles

如果需要显示进程中打开的句柄，请使用`handles`命令。它适用于文件、注册表、桌面、线程和其他所有类型的安全执行对象，从2.1版本开始，还会显示每个对象的句柄值和其权限

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 handles
Volatility Foundation Volatility Framework 2.4
Offset(V)             Pid             Handle             Access Type             Details
------------------ ------ ------------------ ------------------ ---------------- -------
0xfffffa80004b09e0      4                0x4           0x1fffff Process          System(4)
0xfffff8a0000821a0      4               0x10            0x2001f Key              MACHINE\SYSTEM\CONTROLSET001\CONTROL\PRODUCTOPTIONS
0xfffff8a00007e040      4               0x14            0xf003f Key              MACHINE\SYSTEM\CONTROLSET001\CONTROL\SESSION MANAGER\MEMORY MANAGEMENT\PREFETCHPARAMETERS
0xfffff8a000081fa0      4               0x18            0x2001f Key              MACHINE\SYSTEM\SETUP
0xfffffa8000546990      4               0x1c           0x1f0001 ALPC Port        PowerMonitorPort
0xfffffa800054d070      4               0x20           0x1f0001 ALPC Port        PowerPort
0xfffff8a0000676a0      4               0x24            0x20019 Key              MACHINE\HARDWARE\DESCRIPTION\SYSTEM\MULTIFUNCTIONADAPTER
0xfffffa8000625460      4               0x28           0x1fffff Thread           TID 160 PID 4
0xfffff8a00007f400      4               0x2c            0xf003f Key              MACHINE\SYSTEM\CONTROLSET001
0xfffff8a00007f200      4               0x30            0xf003f Key              MACHINE\SYSTEM\CONTROLSET001\ENUM
0xfffff8a000080d10      4               0x34            0xf003f Key              MACHINE\SYSTEM\CONTROLSET001\CONTROL\CLASS
0xfffff8a00007f500      4               0x38            0xf003f Key              MACHINE\SYSTEM\CONTROLSET001\SERVICES
0xfffff8a0001cd990      4               0x3c                0xe Token            
0xfffff8a00007bfa0      4               0x40            0x20019 Key              MACHINE\SYSTEM\CONTROLSET001\CONTROL\WMI\SECURITY
0xfffffa8000cd52b0      4               0x44           0x120116 File             \Device\Mup
0xfffffa8000ce97f0      4               0x48               0x2a Process          smss.exe(208)
0xfffffa8000df16f0      4               0x4c           0x120089 File             \Device\HarddiskVolume2\Windows\System32\en-US\win32k.sys.mui
0xfffffa8000de37f0      4               0x50           0x12019f File             \Device\clfsTxfLog
0xfffff8a000952fa0      4               0x54            0x2001f Key              MACHINE\SYSTEM\CONTROLSET001\CONTROL\VIDEO\{6A8FC9DC-A76B-47FC-A703-17800182E1CE}\0000\VOLATILESETTINGS
0xfffffa800078da20      4               0x58           0x12019f File             \Device\Tcp
0xfffff8a002e17610      4               0x5c                0x9 Key              MACHINE\SOFTWARE\MICROSOFT\WINDOWS NT\CURRENTVERSION\IMAGE FILE EXECUTION OPTIONS
0xfffff8a0008f7b00      4               0x60               0x10 Key              MACHINE\SYSTEM\CONTROLSET001\CONTROL\LSA
0xfffffa8000da2870      4               0x64           0x100001 File             \Device\KsecDD
0xfffffa8000da3040      4               0x68                0x0 Thread           TID 228 PID 4
...
```

`--pid=PID`你可以通过指定或结构的物理偏移量`_EPROCESS`( `--physical-offset=OFFSET`)来显示指定进程的句柄。你还可以使用`-t`或按对象类型进行过滤`--object-type=OBJECTTYPE`。例如，要只显示 pid=600 的进程对象的句柄，可以执行以下操作：

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 handles -p 296 -t Process
Volatility Foundation Volatility Framework 2.4
Offset(V)             Pid             Handle             Access Type             Details
------------------ ------ ------------------ ------------------ ---------------- -------
0xfffffa8000c92300    296               0x54           0x1fffff Process          wininit.exe(332)
0xfffffa8000c5eb30    296               0xc4           0x1fffff Process          services.exe(428)
0xfffffa80011c5700    296               0xd4           0x1fffff Process          lsass.exe(444)
0xfffffa8000ea31b0    296               0xe4           0x1fffff Process          lsm.exe(452)
0xfffffa8000c64840    296              0x140           0x1fffff Process          svchost.exe(348)
0xfffffa8001296b30    296              0x150           0x1fffff Process          svchost.exe(568)
0xfffffa80012c3620    296              0x18c           0x1fffff Process          svchost.exe(628)
0xfffffa8001325950    296              0x1dc           0x1fffff Process          sppsvc.exe(816)
...
```

### getsids

要查看与进程关联的 SID（安全标识符），请使用 `getsids` 命令。这可以帮助你识别具有恶意升级权限的进程以及哪些进程属于特定用户。

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 getsids
Volatility Foundation Volatility Framework 2.4
System (4): S-1-5-18 (Local System)
System (4): S-1-5-32-544 (Administrators)
System (4): S-1-1-0 (Everyone)
System (4): S-1-5-11 (Authenticated Users)
System (4): S-1-16-16384 (System Mandatory Level)
smss.exe (208): S-1-5-18 (Local System)
smss.exe (208): S-1-5-32-544 (Administrators)
smss.exe (208): S-1-1-0 (Everyone)
smss.exe (208): S-1-5-11 (Authenticated Users)
smss.exe (208): S-1-16-16384 (System Mandatory Level)
[snip]
```

### cmdscan

`cmdscan` 插件在 XP/2003/Vista/2008 上的 csrss.exe 和 Windows 7 上的 conhost.exe 的内存中搜索攻击者通过控制台 shell (cmd.exe) 输入的命令。你可以使用它来了解攻击者在受害系统上的操作，无论他们是通过 RDP 会话打开 cmd.exe 还是从网络后门代理输入/输出到命令行。

此插件通过查找已知`常量值 (MaxHistory)` 然后应用完整性检查来查找称为 COMMAND_HISTORY 的结构。请务必注意，可以通过右键单击 cmd.exe 窗口的左上角并转到“属性”来更改 MaxHistory 值。还可以通过修改注册表项 `HKCU\Console\HistoryBufferSize` 来更改给定用户打开的所有控制台的值。在 Windows 系统上`默认值为 50`，这意味着最近的 50 个命令被保存。如果需要，你可以使用 `--max_history=NUMBER` 参数对其进行调整。

除了输入到 shell 中的命令外，此插件还显示：

- 控制台主机进程的名称（csrss.exe 或 conhost.exe）
- 使用控制台的应用程序名称（使用 cmd.exe 的任何进程）
- 命令历史缓冲区的位置，包括当前缓冲区计数、最后添加的命令和最后显示的命令
- 应用进程句柄

```python
$ python vol.py -f VistaSP2x64.vmem --profile=VistaSP2x64 cmdscan
Volatility Foundation Volatility Framework 2.4

**************************************************
CommandProcess: csrss.exe Pid: 528
CommandHistory: 0x135ec00 Application: cmd.exe Flags: Allocated, Reset
CommandCount: 18 LastAdded: 17 LastDisplayed: 17
FirstCommand: 0 CommandCountMax: 50
ProcessHandle: 0x330
Cmd #0 @ 0x135ef10: cd \
Cmd #1 @ 0x135ef50: cd de
Cmd #2 @ 0x135ef70: cd PerfLogs
Cmd #3 @ 0x135ef90: cd ..
Cmd #4 @ 0x5c78b90: cd "Program Files"
Cmd #5 @ 0x135fae0: cd "Debugging Tools for Windows (x64)"
Cmd #6 @ 0x135efb0: livekd -w
Cmd #7 @ 0x135f010: windbg 
Cmd #8 @ 0x135efd0: cd \
Cmd #9 @ 0x135fd20: rundll32 c:\apphelp.dll,ExportFunc
Cmd #10 @ 0x5c8bdb0: rundll32 c:\windows_apphelp.dll,ExportFunc
Cmd #11 @ 0x5c8be10: rundll32 c:\windows_apphelp.dll
Cmd #12 @ 0x135ee30: rundll32 c:\windows_apphelp.dll,Test
Cmd #13 @ 0x135fd70: cd "Program Files"
Cmd #14 @ 0x5c8b9e0: dir
Cmd #15 @ 0x5c8be60: cd "Debugging Tools for Windows (x64)"
Cmd #16 @ 0x5c8ba00: dir
Cmd #17 @ 0x135eff0: livekd -w

[snip]
```

### consoles

与[cmdscan](#cmdscan)类似，控制台插件会查找攻击者键入 cmd.exe 或通过后门执行的命令。但是，此插件不是扫描 COMMAND_HISTORY，而是扫描 CONSOLE_INFORMATION。这个插件的主要优点是它不仅打印攻击者输入的命令，而且收集整个屏幕缓冲区（输入**和**输出）。例如，您不仅会看到“dir”，还会看到攻击者看到的确切内容，包括“dir”命令列出的所有文件和目录。

此外，此插件还会输出以下内容：

- 原始控制台窗口标题和当前控制台窗口标题
- 附加进程的名称和 pid（遍历 LIST_ENTRY 以枚举所有进程，如果多个）
- 与执行的命令关联的任何别名。例如，攻击者可以注册一个别名，这样键入“hello”实际上会执行“cd system”
- cmd.exe控制台的屏幕坐标

```python
$ python vol.py -f xp-laptop-2005-07-04-1430.img consoles
Volatility Foundation Volatility Framework 2.4

[csrss.exe @ 0x821c11a8 pid 456 console @ 0x4e23b0]
  OriginalTitle: '%SystemRoot%\\system32\\cmd.exe'
  Title: 'C:\\WINDOWS\\system32\\cmd.exe - dd if=\\\\.\\PhysicalMemory of=c:\\xp-2005-07-04-1430.img conv=noerror'
  HistoryBufferCount: 2
  HistoryBufferMax: 4
  CommandHistorySize: 50
[history @ 0x4e4008]
  CommandCount: 0
  CommandCountMax: 50
  Application: 'dd.exe'
[history @ 0x4e4d88]
  CommandCount: 20
  CommandCountMax: 50
  Application: 'cmd.exe'
  Cmd #0 @ 0x4e1f90: 'dd'
  Cmd #1 @ 0x4e2cb8: 'cd\\'
  Cmd #2 @ 0x4e2d18: 'dr'
  Cmd #3 @ 0x4e2d28: 'ee:'
  Cmd #4 @ 0x4e2d38: 'e;'
  Cmd #5 @ 0x4e2d48: 'e:'
  Cmd #6 @ 0x4e2d58: 'dr'
  Cmd #7 @ 0x4e2d68: 'd;'
  Cmd #8 @ 0x4e2d78: 'd:'
  Cmd #9 @ 0x4e2d88: 'dr'
  Cmd #10 @ 0x4e2d98: 'ls'
  Cmd #11 @ 0x4e2da8: 'cd Docu'
  Cmd #12 @ 0x4e2dc0: 'cd Documents and'
  Cmd #13 @ 0x4e2e58: 'dr'
  Cmd #14 @ 0x4e2e68: 'd:'
  Cmd #15 @ 0x4e2e78: 'cd dd\\'
  Cmd #16 @ 0x4e2e90: 'cd UnicodeRelease'
  Cmd #17 @ 0x4e2ec0: 'dr'
  Cmd #18 @ 0x4e2ed0: 'dd '
  Cmd #19 @ 0x4e4100: 'dd if=\\\\.\\PhysicalMemory of=c:\\xp-2005-07-04-1430.img conv=noerror'
[screen @ 0x4e2460 X:80 Y:300]
  Output: Microsoft Windows XP [Version 5.1.2600]                                         
  Output: (C) Copyright 1985-2001 Microsoft Corp.                                         
  Output:                                                                                 
  Output: C:\Documents and Settings\Sarah>dd                                              
  Output: 'dd' is not recognized as an internal or external command,                      
  Output: operable program or batch file.                                                 
  Output:                                                                                 
  Output: C:\Documents and Settings\Sarah>cd\                                             
  Output:                                                                                 
  Output: C:\>dr                                                                          
  Output: 'dr' is not recognized as an internal or external command,                      
  Output: operable program or batch file.                                                 
  Output:                                                                                 
  Output: C:\>ee:                                                                         
  Output: 'ee:' is not recognized as an internal or external command,                     
  Output: operable program or batch file.                                                 
  Output:                                                                                 
  Output: C:\>e;                                                                          
  Output: 'e' is not recognized as an internal or external command,                       
  Output: operable program or batch file.                                                 
  Output:                                                                                 
  Output: C:\>e:                                                                          
  Output: The system cannot find the drive specified.                                     
  Output:                                                                                 
  Output: C:\>dr                                                                          
  Output: 'dr' is not recognized as an internal or external command,                      
  Output: operable program or batch file.                                                 
  Output:                                                                                 
  Output: C:\>d;                                                                          
  Output: 'd' is not recognized as an internal or external command,                       
  Output: operable program or batch file.                                                 
  Output:                                                                                 
  Output: C:\>d:                                                                          
  Output:                                                                                 
  Output: D:\>dr                                                                          
  Output: 'dr' is not recognized as an internal or external command,                      
  Output: operable program or batch file.                                                 
  Output:                                                                                 
  Output: D:\>dr                                                                          
  Output: 'dr' is not recognized as an internal or external command,                      
  Output: operable program or batch file.                                                 
  Output:                                                                                 
  Output: D:\>ls                                                                          
  Output: 'ls' is not recognized as an internal or external command,                      
  Output: operable program or batch file.                                                 
  Output:                                                                                 
  Output: D:\>cd Docu                                                                     
  Output: The system cannot find the path specified.                                      
  Output:                                                                                 
  Output: D:\>cd Documents and                                                            
  Output: The system cannot find the path specified.                                      
  Output:                                                                                 
  Output: D:\>dr                                                                          
  Output: 'dr' is not recognized as an internal or external command,                      
  Output: operable program or batch file.                                                 
  Output:                                                                                 
  Output: D:\>d:                                                                          
  Output:                                                                                 
  Output: D:\>cd dd\                                                                      
  Output:                                                                                 
  Output: D:\dd>                                                                          
  Output: D:\dd>cd UnicodeRelease                                                         
  Output:                                                                                 
  Output: D:\dd\UnicodeRelease>dr                                                         
  Output: 'dr' is not recognized as an internal or external command,                      
  Output: operable program or batch file.                                                 
  Output:                                                                                 
  Output: D:\dd\UnicodeRelease>dd                                                         
  Output:                                                                                 
  Output: 0+0 records in                                                                  
  Output: 0+0 records out                                                                 
  Output: ^C                                                                              
  Output: D:\dd\UnicodeRelease>dd if=\\.\PhysicalMemory of=c:\xp-2005-07-04-1430.img conv=
  Output: noerror                                                                         
  Output: Forensic Acquisition Utilities, 1, 0, 0, 1035                                   
  Output: dd, 3, 16, 2, 1035                                                              
  Output: Copyright (C) 2002-2004 George M. Garner Jr.                                    
  Output:                                                                                 
  Output: Command Line: dd if=\\.\PhysicalMemory of=c:\xp-2005-07-04-1430.img conv=noerror
  Output:                                                                                 
  Output: Based on original version developed by Paul Rubin, David MacKenzie, and Stuart K
  Output: emp                                                                             
  Output: Microsoft Windows: Version 5.1 (Build 2600.Professional Service Pack 2)         
  Output:                                                                                 
  Output: 04/07/2005  18:30:32 (UTC)                                                      
  Output: 04/07/2005  14:30:32 (local time)                                               
  Output:                                                                                 
  Output: Current User: SPLATITUDE\Sarah                                                  
  Output:                                                                                 
  Output: Total physical memory reported: 523676 KB                                       
  Output: Copying physical memory...                                                      
  Output: Physical memory in the range 0x00004000-0x00004000 could not be read.                           
```

### privs

该插件向你显示默认情况下存在、启用和/或启用的进程权限。您可以将 `--silent` 标志传递给它以仅显示进程明确启用的权限（即默认情况下未启用但当前启用的权限）。`--regex=REGEX` 参数可用于过滤特定权限名称。

```
$ python vol.py -f win7_trial_64bit.raw privs --profile=Win7SP0x64
Volatility Foundation Volatility Framework 2.3_alpha
Pid      Process          Value  Privilege                            Attributes               Description
-------- ---------------- ------ ------------------------------------ ------------------------ -----------
       4 System                2 SeCreateTokenPrivilege               Present                  Create a token object
       4 System                3 SeAssignPrimaryTokenPrivilege        Present                  Replace a process-level token
       4 System                4 SeLockMemoryPrivilege                Present,Enabled,Default  Lock pages in memory
       4 System                5 SeIncreaseQuotaPrivilege             Present                  Increase quotas
       4 System                6 SeMachineAccountPrivilege                                     Add workstations to the domain
       4 System                7 SeTcbPrivilege                       Present,Enabled,Default  Act as part of the operating system
       4 System                8 SeSecurityPrivilege                  Present                  Manage auditing and security log
       4 System                9 SeTakeOwnershipPrivilege             Present                  Take ownership of files/objects
       4 System               10 SeLoadDriverPrivilege                Present                  Load and unload device drivers
       4 System               11 SeSystemProfilePrivilege             Present,Enabled,Default  Profile system performance
       4 System               12 SeSystemtimePrivilege                Present                  Change the system time
       4 System               13 SeProfileSingleProcessPrivilege      Present,Enabled,Default  Profile a single process
       4 System               14 SeIncreaseBasePriorityPrivilege      Present,Enabled,Default  Increase scheduling priority
       4 System               15 SeCreatePagefilePrivilege            Present,Enabled,Default  Create a pagefile
       4 System               16 SeCreatePermanentPrivilege           Present,Enabled,Default  Create permanent shared objects
.....
```

### envars

要显示进程的环境变量，请使用 `envars` 插件。通常它会显示安装的 CPU 数量和硬件架构（尽管[kdbgscan](#kdbgscan)输出是一个更可靠的来源）、进程的当前目录、临时目录、会话名称、计算机名称、用户名和各种其他的内容。

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 envars
Volatility Foundation Volatility Framework 2.4
Pid      Process              Block              Variable                       Value
-------- -------------------- ------------------ ------------------------------ -----
     296 csrss.exe            0x00000000003d1320 ComSpec                        C:\Windows\system32\cmd.exe
     296 csrss.exe            0x00000000003d1320 FP_NO_HOST_CHECK               NO
     296 csrss.exe            0x00000000003d1320 NUMBER_OF_PROCESSORS           1
     296 csrss.exe            0x00000000003d1320 OS                             Windows_NT
     296 csrss.exe            0x00000000003d1320 Path                           C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\
     296 csrss.exe            0x00000000003d1320 PATHEXT                        .COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC
     296 csrss.exe            0x00000000003d1320 PROCESSOR_ARCHITECTURE         AMD64
     296 csrss.exe            0x00000000003d1320 PROCESSOR_IDENTIFIER           Intel64 Family 6 Model 2 Stepping 3, GenuineIntel
     296 csrss.exe            0x00000000003d1320 PROCESSOR_LEVEL                6
     296 csrss.exe            0x00000000003d1320 PROCESSOR_REVISION             0203
     296 csrss.exe            0x00000000003d1320 PSModulePath                   C:\Windows\system32\WindowsPowerShell\v1.0\Modules\
     296 csrss.exe            0x00000000003d1320 SystemDrive                    C:
     296 csrss.exe            0x00000000003d1320 SystemRoot                     C:\Windows
     296 csrss.exe            0x00000000003d1320 TEMP                           C:\Windows\TEMP
     296 csrss.exe            0x00000000003d1320 TMP                            C:\Windows\TEMP
     296 csrss.exe            0x00000000003d1320 USERNAME                       SYSTEM
     296 csrss.exe            0x00000000003d1320 windir                         C:\Windows
```

### verinfo

如果要显示嵌入在 PE 文件中的版本信息，请使用 `verinfo` 命令。并非所有 PE 文件都有版本信息，许多恶意软件作者伪造它以包含虚假数据，但尽管如此，此命令对于识别二进制文件和与其他文件建立关联非常有帮助。

该插件仅支持从进程可执行文件和 DLL 打印版本信息，但稍后将扩展到包括内核模块。如果要按模块名称过滤，请使用 `--regex=REGEX` 以及 `--ignore-case` 选项。

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 verinfo
Volatility Foundation Volatility Framework 2.4
\SystemRoot\System32\smss.exe
C:\Windows\SYSTEM32\ntdll.dll

C:\Windows\system32\csrss.exe
  File version    : 6.1.7600.16385
  Product version : 6.1.7600.16385
  Flags           : 
  OS              : Windows NT
  File Type       : Application
  File Date       : 
  CompanyName : Microsoft Corporation
  FileDescription : Client Server Runtime Process
  FileVersion : 6.1.7600.16385 (win7_rtm.090713-1255)
  InternalName : CSRSS.Exe
  LegalCopyright : \xa9 Microsoft Corporation. All rights reserved.
  OriginalFilename : CSRSS.Exe
  ProductName : Microsoft\xae Windows\xae Operating System
  ProductVersion : 6.1.7600.16385

[snip]
```

### enumfunc

此插件枚举从进程、dll 和内核驱动程序导入和导出的函数。具体来说，它处理按名称或序号导入的函数、按名称或序号导出的函数以及转发导出。大多数情况下输出会非常冗长（ntdll、msvcrt 和 kernel32 导出的函数单独就可以达到 1000+）。因此，您可以通过使用命令行选项（如下所示）过滤条件来减少冗长，或者您可以查看 enumfunc.py 中的代码并将其用作如何使用 IAT 和 EAT 解析 API 函数的示例你自己的插件。例如，[apihooks](#apihooks)插件在检查挂钩时利用导入和导出 API 在内存中查找函数。

另请注意，此插件位于 contrib 目录中，因此您可以像这样将其传递给 --plugins：

```python
$ python vol.py --plugins=contrib/plugins/ -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 enumfunc -h
....
  -s, --scan            Scan for objects
  -P, --process-only    Process only
  -K, --kernel-only     Kernel only
  -I, --import-only     Imports only
  -E, --export-only     Exports only
```

要使用池扫描器来查找进程和内核驱动程序而不是遍历链表，尝试枚举隐藏进程或驱动程序中的函数，请使用 -s 选项。

要在进程内存中显示导出的函数，请像这样使用 -P 和 -E：

```python
$ python vol.py --plugins=contrib/plugins/ -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 enumfunc -P -E
Process              Type       Module               Ordinal    Address              Name
lsass.exe            Export     ADVAPI32.dll         1133       0x000007fefd11dd34 CreateWellKnownSid
lsass.exe            Export     ADVAPI32.dll         1134       0x000007fefd17a460 CredBackupCredentials
lsass.exe            Export     ADVAPI32.dll         1135       0x000007fefd170590 CredDeleteA
lsass.exe            Export     ADVAPI32.dll         1136       0x000007fefd1704d0 CredDeleteW
lsass.exe            Export     ADVAPI32.dll         1137       0x000007fefd17a310 CredEncryptAndMarshalBinaryBlob
lsass.exe            Export     ADVAPI32.dll         1138       0x000007fefd17d080 CredEnumerateA
lsass.exe            Export     ADVAPI32.dll         1139       0x000007fefd17cf50 CredEnumerateW
lsass.exe            Export     ADVAPI32.dll         1140       0x000007fefd17ca00 CredFindBestCredentialA
lsass.exe            Export     ADVAPI32.dll         1141       0x000007fefd17c8f0 CredFindBestCredentialW
lsass.exe            Export     ADVAPI32.dll         1142       0x000007fefd130c10 CredFree
lsass.exe            Export     ADVAPI32.dll         1143       0x000007fefd1630f0 CredGetSessionTypes
lsass.exe            Export     ADVAPI32.dll         1144       0x000007fefd1703d0 CredGetTargetInfoA
[snip]
```

要在内核内存中显示导入的函数，请使用 -K 和 -I，如下所示：

```python
$ python vol.py --plugins=contrib/plugins/ -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 enumfunc -K -I
Volatility Foundation Volatility Framework 2.4
Process              Type       Module               Ordinal    Address              Name
<KERNEL>             Import     VIDEOPRT.SYS         583        0xfffff80002acc320 ntoskrnl.exeIoRegisterPlugPlayNotification
<KERNEL>             Import     VIDEOPRT.SYS         1325       0xfffff800029f9f30 ntoskrnl.exeRtlAppendStringToString
<KERNEL>             Import     VIDEOPRT.SYS         509        0xfffff800026d06e0 ntoskrnl.exeIoGetAttachedDevice
<KERNEL>             Import     VIDEOPRT.SYS         443        0xfffff800028f7ec0 ntoskrnl.exeIoBuildSynchronousFsdRequest
<KERNEL>             Import     VIDEOPRT.SYS         1466       0xfffff80002699300 ntoskrnl.exeRtlInitUnicodeString
<KERNEL>             Import     VIDEOPRT.SYS         759        0xfffff80002697be0 ntoskrnl.exeKeInitializeEvent
<KERNEL>             Import     VIDEOPRT.SYS         1461       0xfffff8000265e8a0 ntoskrnl.exeRtlInitAnsiString
<KERNEL>             Import     VIDEOPRT.SYS         1966       0xfffff80002685060 ntoskrnl.exeZwSetValueKey
<KERNEL>             Import     VIDEOPRT.SYS         840        0xfffff80002699440 ntoskrnl.exeKeReleaseSpinLock
<KERNEL>             Import     VIDEOPRT.SYS         1190       0xfffff800027a98b0 ntoskrnl.exePoRequestPowerIrp
<KERNEL>             Import     VIDEOPRT.SYS         158        0xfffff800026840f0 ntoskrnl.exeExInterlockedInsertTailList
<KERNEL>             Import     VIDEOPRT.SYS         1810       0xfffff80002684640 ntoskrnl.exeZwClose
[snip]
```

## 进程内存

### memmap

给定特定进程 DTB（如果您在空闲或系统进程上使用此插件，则为内核 DTB），`memmap` 命令会准确显示哪些页面是内存驻留的。它告诉你页面的虚拟地址，页面对应的物理偏移量，以及page的大小。

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 memmap -p 4 
Volatility Foundation Volatility Framework 2.4
System pid:      4
Virtual            Physical                         Size     DumpFileOffset
------------------ ------------------ ------------------ ------------------
0x0000000000050000 0x0000000000cbc000             0x1000                0x0
0x0000000000051000 0x0000000015ec6000             0x1000             0x1000
0x0000000000052000 0x000000000f5e7000             0x1000             0x2000
0x0000000000053000 0x0000000005e28000             0x1000             0x3000
0x0000000000054000 0x0000000008b29000             0x1000             0x4000
0x0000000000055000 0x00000000155b8000             0x1000             0x5000
0x0000000000056000 0x000000000926e000             0x1000             0x6000
0x0000000000057000 0x0000000002dac000             0x1000             0x7000
0x0000000000058000 0x00000000162ed000             0x1000             0x8000
[snip]
```

### memdump

要将进程中的所有内存驻留页面（有关详细信息，请参阅[memmap](#memmap)）提取到单个文件中，请使用 `memdump` 命令。使用 -D 或 --dump-dir=DIR 提供输出目录。

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 memdump -p 4 -D dump/
Volatility Foundation Volatility Framework 2.4
************************************************************************
Writing System [     4] to 4.dmp

$ ls -alh dump/4.dmp 
-rw-r--r--  1 Michael  staff   111M Jun 24 15:47 dump/4.dmp
```

### procdump

要转储进程的可执行文件，请使用 `procdump` 命令。可以通过传递`--unsafe`或`-u`标志以绕过解析 PE 标头时使用的某些健全性检查。某些恶意软件会故意伪造 PE 标头中的大小字段，从而使内存转储工具失效。

```python
$ python vol.py -f win7_trial_64bit.raw --profile=Win7SP0x64 procdump -D dump/ -p 296
Volatility Foundation Volatility Framework 2.4
************************************************************************
Dumping csrss.exe, pid:    296 output: executable.296.exe

$ file dump/executable.296.exe 
dump/executable.296.exe: PE32+ executable for MS Windows (native) Mono/.Net assembly
```

### varinfo

vadinfo 命令显示有关进程的 VAD 节点的扩展信息。会显示：

- MMVAD结构在内核内存中的地址
- MMVAD 结构所属的进程内存中的起始和结束虚拟地址
- VAD 标签
- VAD 标志、控制标志等
- 内存映射文件的名称（如果存在）
- 内存保护常量（权限）。请注意，原始保护和当前保护之间存在差异。最初的保护源自 VirtualAlloc 的 flProtect 参数。例如，您可以使用保护 PAGE_NOACCESS（原始保护）保留内存 (MEM_RESERVE)。稍后，您可以再次调用 VirtualAlloc 来提交（MEM_COMMIT）并指定 PAGE_READWRITE（成为当前保护）。vadinfo 命令仅显示原始保护。因此，仅仅因为您在此处看到 PAGE_NOACCESS，并不意味着该区域中的代码无法读取、写入或执行。

```python
    $ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 vadinfo -p 296
    Volatility Foundation Volatility Framework 2.4
    ************************************************************************
    Pid:    296
    VAD node @ 0xfffffa8000c00620 Start 0x000000007f0e0000 End 0x000000007ffdffff Tag VadS
    Flags: PrivateMemory: 1, Protection: 1
    Protection: PAGE_READONLY
    Vad Type: VadNone
    
    [snip]
    
    VAD node @ 0xfffffa8000c04ce0 Start 0x000007fefcd00000 End 0x000007fefcd10fff Tag Vad 
    Flags: CommitCharge: 2, Protection: 7, VadType: 2
    Protection: PAGE_EXECUTE_WRITECOPY
    Vad Type: VadImageMap
    ControlArea @fffffa8000c04d70 Segment fffff8a000c45c10
    Dereference list: Flink 00000000, Blink 00000000
    NumberOfSectionReferences:          0 NumberOfPfnReferences:          13
    NumberOfMappedViews:                2 NumberOfUserReferences:          2
    WaitingForDeletion Event:  00000000
    Control Flags: Accessed: 1, File: 1, Image: 1
    FileObject @fffffa8000c074d0, Name: \Windows\System32\basesrv.dll
    First prototype PTE: fffff8a000c45c58 Last contiguous PTE: fffffffffffffffc
    Flags2: Inherit: 1
```

### vadwalk

要以表格形式检查进程的 VAD 节点，请使用 `vadwalk` 命令。

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 vadwalk -p 296
Volatility Foundation Volatility Framework 2.4
************************************************************************
Pid:    296
Address            Parent             Left               Right              Start              End                Tag 
------------------ ------------------ ------------------ ------------------ ------------------ ------------------ ----
0xfffffa8000c00620 0x0000000000000000 0xfffffa8000deaa40 0xfffffa8000c043d0 0x000000007f0e0000 0x000000007ffdffff VadS
0xfffffa8000deaa40 0xfffffa8000c00620 0xfffffa8000bc4660 0xfffffa80011b8d80 0x0000000000ae0000 0x0000000000b1ffff VadS
0xfffffa8000bc4660 0xfffffa8000deaa40 0xfffffa8000c04260 0xfffffa8000c91010 0x00000000004d0000 0x0000000000650fff Vadm
0xfffffa8000c04260 0xfffffa8000bc4660 0xfffffa8000c82010 0xfffffa80012acce0 0x00000000002a0000 0x000000000039ffff VadS
0xfffffa8000c82010 0xfffffa8000c04260 0xfffffa8000cbce80 0xfffffa8000c00330 0x00000000001f0000 0x00000000001f0fff Vadm
0xfffffa8000cbce80 0xfffffa8000c82010 0xfffffa8000bc4790 0xfffffa8000d9bb80 0x0000000000180000 0x0000000000181fff Vad 
0xfffffa8000bc4790 0xfffffa8000cbce80 0xfffffa8000c00380 0xfffffa8000e673a0 0x0000000000100000 0x0000000000166fff Vad 
0xfffffa8000c00380 0xfffffa8000bc4790 0x0000000000000000 0x0000000000000000 0x0000000000000000 0x00000000000fffff VadS
[snip]
```

### vadtree

要以可视树形式显示 VAD 节点，请使用 `vadtree` 命令。

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 vadtree -p 296
Volatility Foundation Volatility Framework 2.4
************************************************************************
Pid:    296
 0x000000007f0e0000 - 0x000000007ffdffff
  0x0000000000ae0000 - 0x0000000000b1ffff
   0x00000000004d0000 - 0x0000000000650fff
    0x00000000002a0000 - 0x000000000039ffff
     0x00000000001f0000 - 0x00000000001f0fff
      0x0000000000180000 - 0x0000000000181fff
       0x0000000000100000 - 0x0000000000166fff
        0x0000000000000000 - 0x00000000000fffff
        0x0000000000170000 - 0x0000000000170fff
       0x00000000001a0000 - 0x00000000001a1fff
        0x0000000000190000 - 0x0000000000190fff
        0x00000000001b0000 - 0x00000000001effff
      0x0000000000240000 - 0x000000000024ffff
       0x0000000000210000 - 0x0000000000216fff
        0x0000000000200000 - 0x000000000020ffff
[snip]
```

### vaddump

要提取 VAD 节点描述的页面范围，请使用 `vaddump` 命令。这类似于[memdump](#memdump)，除了属于每个 VAD 节点的页面被放置在单独的文件中（根据开始和结束地址命名）而不是一个大的整体文件。如果该范围内的任何页面不是内存驻留的，则使用地址空间的 zread() 方法将它们填充为 0。

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 vaddump -D vads
Volatility Foundation Volatility Framework 2.4
Pid        Process              Start              End                Result
---------- -------------------- ------------------ ------------------ ------
         4 System               0x0000000076d40000 0x0000000076eeafff vads/System.17fef9e0.0x0000000076d40000-0x0000000076eeafff.dmp
         4 System               0x0000000000040000 0x0000000000040fff vads/System.17fef9e0.0x0000000000040000-0x0000000000040fff.dmp
         4 System               0x0000000000010000 0x0000000000032fff vads/System.17fef9e0.0x0000000000010000-0x0000000000032fff.dmp
         4 System               0x000000007ffe0000 0x000000007ffeffff vads/System.17fef9e0.0x000000007ffe0000-0x000000007ffeffff.dmp
         4 System               0x0000000076f20000 0x000000007709ffff vads/System.17fef9e0.0x0000000076f20000-0x000000007709ffff.dmp
       208 smss.exe             0x000000007efe0000 0x000000007ffdffff vads/smss.exe.176e97f0.0x000000007efe0000-0x000000007ffdffff.dmp
       208 smss.exe             0x00000000003d0000 0x00000000004cffff vads/smss.exe.176e97f0.0x00000000003d0000-0x00000000004cffff.dmp
       208 smss.exe             0x0000000000100000 0x0000000000100fff vads/smss.exe.176e97f0.0x0000000000100000-0x0000000000100fff.dmp
       208 smss.exe             0x0000000000000000 0x00000000000fffff vads/smss.exe.176e97f0.0x0000000000000000-0x00000000000fffff.dmp
       208 smss.exe             0x0000000000190000 0x000000000020ffff vads/smss.exe.176e97f0.0x0000000000190000-0x000000000020ffff.dmp
       208 smss.exe             0x0000000047a90000 0x0000000047aaffff vads/smss.exe.176e97f0.0x0000000047a90000-0x0000000047aaffff.dmp
       208 smss.exe             0x00000000005e0000 0x000000000065ffff vads/smss.exe.176e97f0.0x00000000005e0000-0x000000000065ffff.dmp
[snip]

$ ls -al vads/
total 123720
drwxr-xr-x  69 michaelligh  staff      2346 Apr  6 13:12 .
drwxr-xr-x  37 michaelligh  staff      1258 Apr  6 13:11 ..
-rw-r--r--   1 michaelligh  staff    143360 Apr  6 13:12 System.17fef9e0.0x0000000000010000-0x0000000000032fff.dmp
-rw-r--r--   1 michaelligh  staff      4096 Apr  6 13:12 System.17fef9e0.0x0000000000040000-0x0000000000040fff.dmp
-rw-r--r--   1 michaelligh  staff   1748992 Apr  6 13:12 System.17fef9e0.0x0000000076d40000-0x0000000076eeafff.dmp
-rw-r--r--   1 michaelligh  staff   1572864 Apr  6 13:12 System.17fef9e0.0x0000000076f20000-0x000000007709ffff.dmp
-rw-r--r--   1 michaelligh  staff     65536 Apr  6 13:12 System.17fef9e0.0x000000007ffe0000-0x000000007ffeffff.dmp
-rw-r--r--   1 michaelligh  staff   1048576 Apr  6 13:12 csrss.exe.176006c0.0x0000000000000000-0x00000000000fffff.dmp
-rw-r--r--   1 michaelligh  staff    421888 Apr  6 13:12 csrss.exe.176006c0.0x0000000000100000-0x0000000000166fff.dmp
-rw-r--r--   1 michaelligh  staff      4096 Apr  6 13:12 csrss.exe.176006c0.0x0000000000170000-0x0000000000170fff.dmp
-rw-r--r--   1 michaelligh  staff      8192 Apr  6 13:12 csrss.exe.176006c0.0x0000000000180000-0x0000000000181fff.dmp
[snip]
```

### evtlogs

该`evtlogs`命令从内存中提取并解析二进制事件日志。二进制事件日志可在 Windows XP 和 2003 计算机上找到，因此该插件仅适用于这些体系结构。这些文件是从 services.exe 进程的 VAD 中提取出来的，经过解析后转储到指定位置。

```python
$ python vol.py -f WinXPSP1x64.vmem --profile=WinXPSP2x64 evtlogs -D output
Volatility Foundation Volatility Framework 2.4
Parsed data sent to appevent.txt
Parsed data sent to secevent.txt
Parsed data sent to sysevent.txt
```

还有一个选项 ( `--save-evt`) 可以转储原始事件日志，以便使用外部工具进行解析：

```python
$ python vol.py -f WinXPSP1x64.vmem --profile=WinXPSP2x64 evtlogs
--save-evt -D output
Volatility Foundation Volatility Framework 2.4
Saved raw .evt file to appevent.evt
Parsed data sent to appevent.txt
Saved raw .evt file to secevent.evt
Parsed data sent to secevent.txt
Saved raw .evt file to sysevent.evt
Parsed data sent to sysevent.txt
```

解析后的输出是管道分隔的，以便更容易导入到 excel 文件中，并且由分号分隔：

```python
$ cat output/secevent.txt

2012-01-17 12:01:27|secevent.evt|MACHINENAME|S-1-5-18 (Local System)|Security|612|Success|-;-;+;-;-;-;-;-;-;-;-;-;-;-;-;-;+;-;MACHINENAME$;;(0x0,0x3E7)
2012-01-17 17:06:18|secevent.evt|MACHINENAME|S-1-5-19 (NT Authority)|Security|528|Success|LOCAL SERVICE;NT AUTHORITY;(0x0,0x3E5);5;Advapi;Negotiate;;-;MACHINENAME$(0x0,0x3E7);252;-;-;-
2012-01-17 17:06:18|secevent.evt|MACHINENAME|S-1-5-19 (NT Authority)|Security|576|Success|LOCAL SERVICE;NT AUTHORITY;(0x0,0x3E5);SeAuditPrivilege            SeAssignPrimaryTokenPrivilege                   SeImpersonatePrivilege
2012-01-17 17:06:19|secevent.evt|MACHINENAME|S-1-5-20 (NT Authority)|Security|528|Success|NETWORK SERVICE;NT AUTHORITY;(0x0,0x3E4);5;Advapi;Negotiate;;-;MACHINENAME$(0x0,0x3E7);252;-;-;-
2012-01-17 17:06:19|secevent.evt|MACHINENAME|S-1-5-20 (NT Authority)|Security|576|Success|NETWORK SERVICE;NTAUTHORITY;(0x0,0x3E4);SeAuditPrivilege                  SeAssignPrimaryTokenPrivilege                   SeImpersonatePrivilege

[snip]
```

如果`--verbose`使用该标志，还会评估 SID 并将其放置在解析的输出中，而不是默认的原始 SID。此操作需要更长的时间才能运行，因为插件必须从注册表项中计算每个服务 SID 和用户 SID。

### iehistory

这个插件恢复 IE 历史 index.dat 缓存文件的片段。它可以找到基本的访问链接（通过 FTP 或 HTTP）、重定向链接 (--REDR) 和删除的条目 (--LEAK)。它适用于加载和使用 wininet.dll 库的任何进程，而不仅仅是 Internet Explorer。通常包括 Windows 资源管理器甚至恶意软件样本。

```python
$ python vol.py -f exemplar17_1.vmem iehistory
Volatility Foundation Volatility Framework 2.4
**************************************************
Process: 1928 explorer.exe
Cache type "URL " at 0xf25100
Record length: 0x100
Location: Visited: foo@http://192.168.30.129/malware/40024.exe
Last modified: 2009-01-08 01:52:09 
Last accessed: 2009-01-08 01:52:09 
File Offset: 0x100, Data Offset: 0x0, Data Length: 0xa0
**************************************************
Process: 1928 explorer.exe
Cache type "URL " at 0xf25300
Record length: 0x180
Location: Visited: foo@http://www.abcjmp.com/jump1/?affiliate=mu1&subid=88037&terms=eminem&sid=Z605044303%40%40wMfNTNxkTM1EzX5QzNy81My8lM18FN4gTM2gzNzITM&a=zh5&mr=1&rc=0
Last modified: 2009-01-08 01:52:44 
Last accessed: 2009-01-08 01:52:44 
File Offset: 0x180, Data Offset: 0x0, Data Length: 0x108
**************************************************
.....
```

## 核心内存和对象

### modules

要查看系统上加载的内核驱动程序列表，请使用 `modules` 命令。这会遍历 PsLoadedModuleList 指向的 LDR_DATA_TABLE_ENTRY 结构的双向链表。与[pslist](#pslist)命令类似，这依赖于查找 KDBG 结构。在极少数情况下，您可能需要使用[kdbgscan](#kdbgscan)找到最合适的 KDBG 结构地址，然后将其提供给此插件，如 --kdbg=ADDRESS。

>它无法找到隐藏/未链接的内核驱动程序，但是[modscan](#modscan)可以达到这个目的。


```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 modules
Volatility Foundation Volatility Framework 2.4
Offset(V)          Name                 Base                             Size File
------------------ -------------------- ------------------ ------------------ ----
0xfffffa80004a11a0 ntoskrnl.exe         0xfffff8000261a000           0x5dd000 \SystemRoot\system32\ntoskrnl.exe
0xfffffa80004a10b0 hal.dll              0xfffff80002bf7000            0x49000 \SystemRoot\system32\hal.dll
0xfffffa80004a7950 kdcom.dll            0xfffff80000bb4000             0xa000 \SystemRoot\system32\kdcom.dll
0xfffffa80004a7860 mcupdate.dll         0xfffff88000c3a000            0x44000 \SystemRoot\system32\mcupdate_GenuineIntel.dll
0xfffffa80004a7780 PSHED.dll            0xfffff88000c7e000            0x14000 \SystemRoot\system32\PSHED.dll
0xfffffa80004a7690 CLFS.SYS             0xfffff88000c92000            0x5e000 \SystemRoot\system32\CLFS.SYS
0xfffffa80004a8010 CI.dll               0xfffff88000cf0000            0xc0000 \SystemRoot\system32\CI.dll
[snip] 
```

输出显示 LDR_DATA_TABLE_ENTRY 结构的偏移量，默认情况下它是一个虚拟地址，但可以使用 -P 开关指定为物理地址，如下所示。在任何一种情况下，Base 列都是内核内存中模块基址的虚拟地址。

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 modules -P
Volatility Foundation Volatility Framework 2.4
Offset(P)          Name                 Base                             Size File
------------------ -------------------- ------------------ ------------------ ----
0x0000000017fe01a0 ntoskrnl.exe         0xfffff8000261a000           0x5dd000 \SystemRoot\system32\ntoskrnl.exe
0x0000000017fe00b0 hal.dll              0xfffff80002bf7000            0x49000 \SystemRoot\system32\hal.dll
0x0000000017fe6950 kdcom.dll            0xfffff80000bb4000             0xa000 \SystemRoot\system32\kdcom.dll
0x0000000017fe6860 mcupdate.dll         0xfffff88000c3a000            0x44000 \SystemRoot\system32\mcupdate_GenuineIntel.dll
0x0000000017fe6780 PSHED.dll            0xfffff88000c7e000            0x14000 \SystemRoot\system32\PSHED.dll
0x0000000017fe6690 CLFS.SYS             0xfffff88000c92000            0x5e000 \SystemRoot\system32\CLFS.SYS
0x0000000017fe7010 CI.dll               0xfffff88000cf0000            0xc0000 \SystemRoot\system32\CI.dll
[snip]
```

### modscan

`modscan` 命令通过扫描物理内存中的池标签来查找 LDR_DATA_TABLE_ENTRY 结构。这可以获取以前卸载的驱动程序和已被 rootkit 隐藏/取消链接的驱动程序。

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 modscan
Volatility Foundation Volatility Framework 2.4
Offset(P)          Name                 Base                             Size File
------------------ -------------------- ------------------ ------------------ ----
0x00000000173b90b0 DumpIt.sys           0xfffff88003980000            0x11000 \??\C:\Windows\SysWOW64\Drivers\DumpIt.sys
0x000000001745b180 mouhid.sys           0xfffff880037e9000             0xd000 \SystemRoot\system32\DRIVERS\mouhid.sys
0x0000000017473010 lltdio.sys           0xfffff88002585000            0x15000 \SystemRoot\system32\DRIVERS\lltdio.sys
0x000000001747f010 rspndr.sys           0xfffff8800259a000            0x18000 \SystemRoot\system32\DRIVERS\rspndr.sys
0x00000000174cac40 dxg.sys              0xfffff96000440000            0x1e000 \SystemRoot\System32\drivers\dxg.sys
0x0000000017600190 monitor.sys          0xfffff8800360c000             0xe000 \SystemRoot\system32\DRIVERS\monitor.sys
0x0000000017601170 HIDPARSE.SYS         0xfffff880037de000             0x9000 \SystemRoot\system32\DRIVERS\HIDPARSE.SYS
0x0000000017604180 USBD.SYS             0xfffff880037e7000             0x2000 \SystemRoot\system32\DRIVERS\USBD.SYS
0x0000000017611d70 cdrom.sys            0xfffff88001944000            0x2a000 \SystemRoot\system32\DRIVERS\cdrom.sys
[snip]
```

### moddump

要将内核驱动程序提取到文件中，请使用 `moddump` 命令。使用 -D 或 --dump-dir=DIR 提供输出目录。如果需要特定的驱动程序，请使用 `--regex=REGEX` 提供驱动程序名称的正则表达式或使用 `--base=BASE` 提供模块的基地址。

```python
$ python vol.py -f ~/Desktop/win7_trial_64bit.raw --profile=Win7SP0x64 moddump -D drivers/
Volatility Foundation Volatility Framework 2.4
Module Base        Module Name          Result
------------------ -------------------- ------
0xfffff8000261a000 ntoskrnl.exe         OK: driver.fffff8000261a000.sys
0xfffff80002bf7000 hal.dll              OK: driver.fffff80002bf7000.sys
0xfffff88000e5c000 intelide.sys         OK: driver.fffff88000e5c000.sys
0xfffff8800349b000 mouclass.sys         OK: driver.fffff8800349b000.sys
0xfffff88000f7c000 msisadrv.sys         OK: driver.fffff88000f7c000.sys
0xfffff880035c3000 ndistapi.sys         OK: driver.fffff880035c3000.sys
0xfffff88002c5d000 pacer.sys            OK: driver.fffff88002c5d000.sys
[snip]
```

与[dlldump](#dlldump)类似，如果 PE 标头的关键部分不是内存驻留的，则重建/提取驱动程序可能会失败。此外，对于映射在不同会话中的驱动程序（如 win32k.sys），目前无法指定在获取驱动程序示例时使用哪个会话。