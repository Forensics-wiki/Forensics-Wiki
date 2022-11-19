# Windows命令参考

## 镜像识别

### 镜像信息

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

**注意：**`imageinfo`需要指定正确的内存镜像，如果不正确，那么他可能无法运行，或者运行出空白内容。

