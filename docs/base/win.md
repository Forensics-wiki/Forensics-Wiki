---
comments: true
---

## qemu-img镜像转换工具

### 介绍

qemu-img能将RAW、qcow2、VMDK、VDI、VHD（vpc）、VHDX、qcow1或QED格式的镜像转换成VHD格式，也可以实现RAW和VHD格式的互相转换。

### 下载地址

https://cloudbase.it/qemu-img-windows/

### 用法

#### 将 QCOW2、RAW、VMDK 或 VDI 镜像转换为 vmdk

```powershell
./qemu-img convert -f raw【镜像的绝对路径】 -O vmdk【镜像的保存路径】

# 镜像绝对路径 例：G:\Forensics\test.raw
# 镜像保存路径 例：G:\Forensics\end\test.vmdk
```

Copy

> - -o 指定输出格式
> - -p 显示转换进度
> - -f 原有镜像格式

#### 其他命令

1. **检查虚拟磁盘的一致性**

   ```powershell
   ./qemu-img check source.qcow2
   ```

2. **获取有关虚拟磁盘的信息**

   ```powershell
   ./qemu-img info image.qcow2
   ```

## VMware新建虚拟机

### 新建虚拟机

1. 新建虚拟机-自定义（高级）

   ![image-20221123113314455](https://bu.dusays.com/2022/11/23/637d947379955.png)

2. 兼容性根据实际选择

3. 稍后安装操作系统

   ![image-20221123113355789](https://bu.dusays.com/2022/11/23/637d949c7ca95.png)

4. 操作系统，虚拟机名称，位置都根据自己需要选择

5. 固件类型选择`BIOS`

   ![image-20221123114958893](https://bu.dusays.com/2022/11/23/637d985fba682.png)

6. 处理器，内存根据自己需要选择

7. 网络连接选择`桥接模式`，因为后面可能需要连接数据库等等。

   ![image-20221123115112151](https://bu.dusays.com/2022/11/23/637d98a8e030e.png)

8. SCIS选择`LSI Logic SAS`

   ![scis](https://bu.dusays.com/2022/11/23/637d98c86a6aa.png)

9. 虚拟磁盘类型选择`IDE`

   ![image-20221123115332009](https://bu.dusays.com/2022/11/23/637d9934bf3b7.png)

10. 磁盘选择

    ![image-20221123115839084](https://bu.dusays.com/2022/11/23/637d9a67bf23d.png)

> 注意：如果你已经用FTK imager挂载了镜像，就直接选择`使用物理磁盘`，在你之后的操作中，都不会写入原镜像中，但是如果选择了`虚拟磁盘`，就需要提前`做好镜像的备份`，因为他会对你之后的操作写入原硬盘。

1. 完成创建虚拟机

> 如果有两个盘，在创建完成后，在编辑虚拟机中添加硬盘，配置和之前的一样即可