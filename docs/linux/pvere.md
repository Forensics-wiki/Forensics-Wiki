---
comments: true
---
    
> 原文链接：https://ciasm.blog.csdn.net/article/details/125680240
>
> 作者：[CIAS](https://ciasm.blog.csdn.net/)

#### 选择Advanced Options

![](https://cdn.zhangz.cc/blog/3646fd65aa3d4b42adab20928b256dfb.png)

#### 选择 Debug mode

![](https://cdn.zhangz.cc/blog/2f4f6380525a43c9978984b816bc20c1.png)

#### 启动这个界面之后，继续按CTRL D

![img](https://cdn.zhangz.cc/blog/07356f4cd1d8438695ea38dfb1f40d1b.png)

#### 进入成功

![img](https://cdn.zhangz.cc/blog/7d539bc175b94ec181acf35c177147dd.png)

#### 验证LVM并挂载

```
#查看VG，输出应该是有VG PVE
vgs
 
#查看LV，可以看到 data root 
lvs
```

![img](https://cdn.zhangz.cc/blog/34f8f20bf57e4617a57a60abe86d04b2.png)

#### 激活VG

```bash
vgchange -a y 
```

#### 挂载lvm

```cobol
mount /dev/mapper/pve-root /mnt
```

#### chroot

```bash
chroot /mnt
```

#### 修改root密码，更改完成密码重启服务器

```bash
passwd root
```

![](https://cdn.zhangz.cc/blog/fbb0bc6b80a74468ba6a5c7d8d5bc5e5.png)