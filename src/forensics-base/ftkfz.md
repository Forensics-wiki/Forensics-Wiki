---
title: 镜像仿真-FTK Imager
order: 2
---

仅能仿真DD、E01镜像

## 需要使用的软件

* FTK Imager

  > 下载地址：https://accessdata.com/product-download/ftk-imager-version-4-7-1

* VMware Workstation 16 PRO

  > 下载地址：https://pan.baidu.com/s/1RIQEtK1Arone6gRNwAj5LA?pwd=wiki
  >
  > 提取码: wiki
  >
  > 激活码：ZF3R0-FHED2-M80TY-8QYGC-NPKYF

## FTK Imager挂载镜像

1. 选择 文件 -> 镜像挂载

   ![image-20221120104249194](https://bu.dusays.com/2022/11/20/637994235bb38.png)

2. 选择镜像文件 -> 加载方法选择：“Block Device / Writeable” -> 点击装载 -> 记住驱动号(Drive)

   ![image-20221120104547101](https://bu.dusays.com/2022/11/20/637994d51f3a2.png)

3. 挂载成功后，会在原来的镜像文件处，多出一个`.adcf`文件，它是用来`存放镜像虚拟写入的文件`。

   ![image-20221120104846834](https://bu.dusays.com/2022/11/20/63799588b8bac.png)

## VMware新建虚拟机

1. 新建虚拟机 -> 自定义（高级） -> 下一步 -> 硬件兼容性默认 -> 下一步

   ![image-20221120105111667](https://bu.dusays.com/2022/11/20/6379961985ba3.png)

   ![image-20221120105221590](https://bu.dusays.com/2022/11/20/6379965f9b848.png)

2. 选择稍后安装操作系统 -> 下一步

   ![image-20221120105300752](https://bu.dusays.com/2022/11/20/63799686b1745.png)

3. 操作系统及保存位置 按照实际需要

   ![image-20221120105412923](https://bu.dusays.com/2022/11/20/637996cecf8a1.png)

   ![image-20221120105423088](https://bu.dusays.com/2022/11/20/637996d9033b5.png)

   

   > 如果不知道操作系统，在FTK Imager里可以查看到
   >
   > ![image-20221120105534578](https://bu.dusays.com/2022/11/20/63799720790c3.png)

4. 固件类型选择`UEFI`

   ![image-20221120105806553](https://bu.dusays.com/2022/11/20/637997b867b11.png)

5. 处理器及内存根据自己电脑配置选择

6. 网络类型选择`使用网络地址转换`

   ![image-20221120110002137](https://bu.dusays.com/2022/11/20/6379982c05bfd.png)

7. SCSI控制器选择`LSI Logic SAS(S)`

   ![image-20221120110056596](https://bu.dusays.com/2022/11/20/637998627c31f.png)

8. 磁盘类型选择`SATA`

   ![image-20221120110131987](https://bu.dusays.com/2022/11/20/63799885d10ca.png)

9. 磁盘选择`物理磁盘`

   ![image-20221120110211388](https://bu.dusays.com/2022/11/20/637998ad561fb.png)

10. 设备选择`之前FTK Imager挂载后的Drive`

    ![image-20221120110320634](https://bu.dusays.com/2022/11/20/637998f2811da.png)

11. 之后所有选项默认

12. 在启动虚拟机后，如果显示下面的内容，则选择`否`

    ![image-20221120110552742](https://bu.dusays.com/2022/11/20/6379998a9f876.png)

13. 成功启动

    ![image-20221120110627310](https://bu.dusays.com/2022/11/20/637999af27678.png)