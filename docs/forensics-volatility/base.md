# 基础学习

内存取证神器"Volatility"

## 版本

目前主流的有Volatility2和Volatility3两个版本

### Volatility2

很完善的一个版本，各个插件都有，除了他的开发版本，还有他的编译版本，较为方便

### Volatility3

处于一个刚开始的阶段，各方面不是特别完善

## 下载地址
Volatility2：https://github.com/volatilityfoundation/volatility

Volatility3：https://github.com/volatilityfoundation/volatility3

Volatility2编译版本：http://downloads.volatilityfoundation.org/releases/2.6/volatility_2.6_win64_standalone.zip


## Volatility2使用方法

此处为Volatility2编译版本，该软件运行需要启动cmd命令行，然后进入文件保存路径，直接以文件名为主命令，命令可用Tab键补齐，直接双击打开会报错。

### 帮助菜单

> volatility_2.6_win64_standalone.exe -h

```
Volatility Foundation Volatility Framework 2.6
Usage: Volatility - A memory forensics analysis platform.

Options:
  -h, --help            list all available options and their default values.
                        Default values may be set in the configuration file
                        (/etc/volatilityrc)
  --conf-file=.volatilityrc
                        User based configuration file
  -d, --debug           Debug volatility
  --plugins=PLUGINS     Additional plugin directories to use (semi-colon
                        separated)
  --info                Print information about all registered objects
  --cache-directory=C:\Users\1762326648/.cache\volatility
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
  --shift=SHIFT         Mac KASLR shift address
  --output=text         Output in this format (support is module specific, see
                        the Module Output Options below)
  --output-file=OUTPUT_FILE
                        Write output in this file
  -v, --verbose         Verbose information
  -g KDBG, --kdbg=KDBG  Specify a KDBG virtual address (Note: for 64-bit
                        Windows 8 and above this is the address of
                        KdCopyDataBlock)
  --force               Force utilization of suspect profile
  -k KPCR, --kpcr=KPCR  Specify a specific KPCR address
  --cookie=COOKIE       Specify the address of nt!ObHeaderCookie (valid for
                        Windows 10 only)

        Supported Plugin Commands:

                amcache         Print AmCache information
                apihooks        Detect API hooks in process and kernel memory
                atoms           Print session and window station atom tables
                atomscan        Pool scanner for atom tables
                auditpol        Prints out the Audit Policies from HKLM\SECURITY\Policy\PolAdtEv
                bigpools        Dump the big page pools using BigPagePoolScanner
                bioskbd         Reads the keyboard buffer from Real Mode memory
                cachedump       Dumps cached domain hashes from memory
                callbacks       Print system-wide notification routines
                clipboard       Extract the contents of the windows clipboard
                cmdline         Display process command-line arguments
                cmdscan         Extract command history by scanning for _COMMAND_HISTORY
                connections     Print list of open connections [Windows XP and 2003 Only]
                connscan        Pool scanner for tcp connections
                consoles        Extract command history by scanning for _CONSOLE_INFORMATION
                crashinfo       Dump crash-dump information
                deskscan        Poolscaner for tagDESKTOP (desktops)
                devicetree      Show device tree
                dlldump         Dump DLLs from a process address space
                dlllist         Print list of loaded dlls for each process
                driverirp       Driver IRP hook detection
                drivermodule    Associate driver objects to kernel modules
                driverscan      Pool scanner for driver objects
                dumpcerts       Dump RSA private and public SSL keys
                dumpfiles       Extract memory mapped and cached files
                dumpregistry    Dumps registry files out to disk
                editbox         Displays information about Edit controls. (Listbox experimental.)
                envars          Display process environment variables
                eventhooks      Print details on windows event hooks
                evtlogs         Extract Windows Event Logs (XP/2003 only)
                filescan        Pool scanner for file objects
                gahti           Dump the USER handle type information
                gditimers       Print installed GDI timers and callbacks
                gdt             Display Global Descriptor Table
                getservicesids  Get the names of services in the Registry and return Calculated SID
                getsids         Print the SIDs owning each process
                handles         Print list of open handles for each process
                hashdump        Dumps passwords hashes (LM/NTLM) from memory
                hibinfo         Dump hibernation file information
                hivedump        Prints out a hive
                hivelist        Print list of registry hives.
                hivescan        Pool scanner for registry hives
                hpakextract     Extract physical memory from an HPAK file
                hpakinfo        Info on an HPAK file
                idt             Display Interrupt Descriptor Table
                iehistory       Reconstruct Internet Explorer cache / history
                imagecopy       Copies a physical address space out as a raw DD image
                imageinfo       Identify information for the image
                impscan         Scan for calls to imported functions
                joblinks        Print process job link information
                kdbgscan        Search for and dump potential KDBG values
                kpcrscan        Search for and dump potential KPCR values
                ldrmodules      Detect unlinked DLLs
                lsadump         Dump (decrypted) LSA secrets from the registry
                machoinfo       Dump Mach-O file format information
                malfind         Find hidden and injected code
                mbrparser       Scans for and parses potential Master Boot Records (MBRs)
                memdump         Dump the addressable memory for a process
                memmap          Print the memory map
                messagehooks    List desktop and thread window message hooks
                mftparser       Scans for and parses potential MFT entries
                moddump         Dump a kernel driver to an executable file sample
                modscan         Pool scanner for kernel modules
                modules         Print list of loaded modules
                multiscan       Scan for various objects at once
                mutantscan      Pool scanner for mutex objects
                notepad         List currently displayed notepad text
                objtypescan     Scan for Windows object type objects
                patcher         Patches memory based on page scans
                poolpeek        Configurable pool scanner plugin
                printkey        Print a registry key, and its subkeys and values
                privs           Display process privileges
                procdump        Dump a process to an executable file sample
                pslist          Print all running processes by following the EPROCESS lists
                psscan          Pool scanner for process objects
                pstree          Print process list as a tree
                psxview         Find hidden processes with various process listings
                qemuinfo        Dump Qemu information
                raw2dmp         Converts a physical memory sample to a windbg crash dump
                screenshot      Save a pseudo-screenshot based on GDI windows
                servicediff     List Windows services (ala Plugx)
                sessions        List details on _MM_SESSION_SPACE (user logon sessions)
                shellbags       Prints ShellBags info
                shimcache       Parses the Application Compatibility Shim Cache registry key
                shutdowntime    Print ShutdownTime of machine from registry
                sockets         Print list of open sockets
                sockscan        Pool scanner for tcp socket objects
                ssdt            Display SSDT entries
                strings         Match physical offsets to virtual addresses (may take a while, VERY verbose)
                svcscan         Scan for Windows services
                symlinkscan     Pool scanner for symlink objects
                thrdscan        Pool scanner for thread objects
                threads         Investigate _ETHREAD and _KTHREADs
                timeliner       Creates a timeline from various artifacts in memory
                timers          Print kernel timers and associated module DPCs
                truecryptmaster Recover TrueCrypt 7.1a Master Keys
                truecryptpassphrase     TrueCrypt Cached Passphrase Finder
                truecryptsummary        TrueCrypt Summary
                unloadedmodules Print list of unloaded modules
                userassist      Print userassist registry keys and information
                userhandles     Dump the USER handle tables
                vaddump         Dumps out the vad sections to a file
                vadinfo         Dump the VAD info
                vadtree         Walk the VAD tree and display in tree format
                vadwalk         Walk the VAD tree
                vboxinfo        Dump virtualbox information
                verinfo         Prints out the version information from PE images
                vmwareinfo      Dump VMware VMSS/VMSN information
                volshell        Shell in the memory image
                windows         Print Desktop Windows (verbose details)
                wintree         Print Z-Order Desktop Windows Tree
                wndscan         Pool scanner for window stations
                yarascan        Scan process or kernel memory with Yara signatures
```

#### 比较重要的参数

```
-f FILENAME, --filename=FILENAME
                        Filename to use when opening an image
```

在后续每次敲命令都要用到的一个参数，FILENAME要更换为内存镜像名称

### 基础的一个命令

检测这个内存镜像是哪个操作系统的内存镜像以及各种内存信息

```
volatility_2.6_win64_standalone.exe -f FILENAME imageinfo
```

![](https://oss.didctf.com/blog/QQ截图20221002191551.png)

首先的一个重要参数是`Suggested Profile` 也就是他的电脑版本号，只有这个版本号才能进行之后的步骤。

例图中的`Suggested Profile`是有四个信息，但是大概率指向的版本是第一个。

如果`Suggested Profile`后面带了一个`Instantiated with XXXXX`就是说他建议是哪个电脑版本号，所以用它建议的就行，当然这个情况也不是全都有的，有时候他不建议，你就选你自己的就行。

下方的`Image date and time`是这个内存镜像的制作时间，默认是UTC+0的时间，这个参数的下一个`Image Local date and time`就是我们的UTC+8的时间(即本机的时区)。

### 进程分析

```
volatility_2.6_win64_standalone.exe -f FILENAME --profile=版本号 pslist
```

该命令为列出内存中的进程,包括进程PID、PPID以及启动时间，并可以清楚的看到父子进程的关系。

![](https://oss.didctf.com/blog/20221002192541.png) 

如果遇到隐藏的进程，可以使用如下命令

```
volatility_2.6_win64_standalone.exe -f FILENAME --profile=版本号 psscan
```

该命令为列出内存中的<font color="#dd0000">所有</font>进程，包括进程PID、PPID以及启动时间，并可以清楚的看到父子进程的关系。

![](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/volatility/20221002193659.png)


如果遇到名称伪装的进程，使用如下命令

进程树

```
volatility_2.6_win64_standalone.exe -f FILENAME --profile=版本号 pstree
```

![](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/volatility/20221002194020.png)

有些恶意进程会伪装成同名进程，通过进程树，看他不归属于不正常进程

例：很多恶意进程会伪装成svchost.exe，但svchost.exe的真正父进程是services.exe的。

### 动态链接库

就是所谓的dll文件

```
volatility_2.6_win64_standalone.exe -f FILENAME --profile=版本号 dlllist
```

该命令能看到每个进程（程序)运行所需要的所有动态链接库

![](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/volatility/20221002194956.png)

### 网络连接

```
volatility_2.6_win64_standalone.exe -f FILENAME --profile=版本号 netscan
```

该命令可查看所有进程的连接协议、本地地址、连接地址、状态、监听端口以及pid。

![](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/volatility/20221002195228.png)

### 内核驱动

```
volatility_2.6_win64_standalone.exe -f FILENAME --profile=版本号 modules
```

该命令查看内核驱动,modscan、driverscan可查看一些隐藏的内核驱动。

### 下载进程程序

```
volatility_2.6_win64_standalone.exe -f FILENAME --profile=版本号 procdump -D 路径 -p 进程号PID
```

注意此命令会自动修改名称，修改后的名称就是图中的 Result的内容

![](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/volatility/20221002195920.png)

### 内存文件

```
volatility_2.6_win64_standalone.exe -f FILENAME --profile=版本号 filescan
```

该命令能扫描内存中的文件

![](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/volatility/20221002201224.png)

### 导出内存中缓存的文件

```
volatility_2.6_win64_standalone.exe -f FILENAME --profile=版本号 dumpfiles -Q 内存中的位置 -D 导出路径
```

该命令能导出内存中缓存的文件

-Q的内容就是filescan中第一行的Offset

![](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/volatility/20221002201617.png)

### 注册表

```
volatility_2.6_win64_standalone.exe -f FILENAME --profile=版本号 hivelist
```

该命令能列举在内存中的注册表

![](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/volatility/20221002201403.png)

### cmd命令情况

```
volatility_2.6_win64_standalone.exe -f FILENAME --profile=版本号 cmdline
```

该命令能提取内存中保留的cmd命令使用情况

### 获取SAM表中的用户

```
volatility_2.6_win64_standalone.exe -f FILENAME --profile=版本号 printkey -K "SAM\Domprintkeyains\Account\Users\Names"
```

注意"SAM\Domprintkeyains\Account\Users\Names"这个路径是固定的，不用改变。

### 最后登录的用户

```
volatility_2.6_win64_standalone.exe -f FILENAME --profile=版本号 printkey -K "SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogin"
```

该名称能查看最后登录系统的账户

### 密码hash

```
volatility_2.6_win64_standalone.exe -f FILENAME --profile=版本号 hashdump -y 注册表 system 的 virtual地址 -s SAM的virtual地址
```

该命令能从内存中获取密码hash

virtual从hivelist注册表中获得。

![](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/volatility/20221002203604.png)

### Windows服务

```
volatility_2.6_win64_standalone.exe -f FILENAME --profile=版本号 svcscan 
```

该命令能查看Windwos的服务

![](https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/post/volatility/20221002203006.png)

有些服务不一定有进程，所以PID为空。