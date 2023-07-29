---
title: Android数据存储技术
icon: database
order: 2
sidebar: structure
pageview: true
---

## Android数据存储技术

- Shared Preferences（共享首选项)
  
  > Shared Preferences是Android中最简单的数据存储方式之一，用于存储轻量级的键值对。它适用于保存简单的配置信息和用户首选项。Shared Preferences是基于XML文件的，对于少量结构化数据非常方便。但是，不适合存储大量复杂数据。

  - 轻量级的键值对存储
  - 适用于保存用户设置和首选项
  
- Internal Storage（内部存储）
  
  > Android应用可以在内部存储中创建和保存私有文件。这些文件默认只能被应用本身访问，其他应用无法读取这些数据。内部存储对于保护敏感数据非常有用。你可以使用Java的File API来读写这些文件。

  - 私有文件存储
  - 适用于保护敏感数据
  - 内部存储的路径通常类似于：`/data/data/<package_name>/`
  
- External Storage（外部存储）
  
  > Android允许应用在外部存储（如SD卡）上读写数据。这对于存储大量文件或共享文件给其他应用或用户非常有用。需要注意的是，外部存储是公开的，其他应用和用户都可以访问这些文件，因此要谨慎处理敏感数据。

  - 外部存储器上的读写
  - 适用于存储大量或共享文件
  
- SQLite数据库
  
  > SQLite是一种轻量级的嵌入式数据库，在Android中被广泛使用。它提供了一个结构化的方式来存储和管理大量的复杂数据。Android提供了SQLiteOpenHelper类和ContentProvider API来简化数据库的创建和操作。

  - 轻量级嵌入式数据库
  - 适用于大量结构化数据
  
- Content Providers（内容提供者）
  
  > SQLite是一种轻量级的嵌入式数据库，在Android中被广泛使用。它提供了一个结构化的方式来存储和管理大量的复杂数据。Android提供了SQLiteOpenHelper类和ContentProvider API来简化数据库的创建和操作。

  - 允许应用之间共享数据
  - 实现跨应用数据共享
  
- Room Persistence Library
  
  > Room是Android提供的一个数据库访问库，它是对SQLite的抽象封装，简化了数据库操作。Room使用注解来定义实体和数据库访问对象（DAO），并在编译时生成代码，减少了手动编写繁琐的数据库操作代码。

  - 对SQLite的抽象封装
  - 简化数据库操作
  
- Network Storage（网络存储）
  
  > 应用可以将数据存储在远程服务器上，通过网络进行访问和同步。这通常涉及与服务器进行HTTP通信，以便上传和下载数据。

  - 存储在远程服务器上的数据
  - 通过网络进行访问和同步
  
- File Encryption（文件加密）
  
  > 对于敏感数据，可以使用文件加密技术来保护数据安全。Android提供了各种加密库和API，可以帮助你对数据进行加密和解密，以防止数据泄露。
  
  - 保护敏感数据的安全
  - 使用加密库和API进行加密

### 分区

![未命名的设计](https://bu.dusays.com/2023/07/29/64c5249b5a414.png)

#### data分区

擦除data分区就相当于执行恢复出厂设置

| 目录名称                       | 目录介绍                                                     |
| ------------------------------ | ------------------------------------------------------------ |
| `/data/data/<app-package-name>`/ | 存放应用程序数据，每个应用程序对应一个数据目录，例如谷歌Hangouts的应用数据存储在“/data/data/comgoogleandroid.talk/”目录下应用程序数据目录下还可以创建分别存储语音文件、缓存等的子目录。 |
| `/data/system/`                  | 记录系统配置信息，包括锁屏模式、应用安装包列表密码哈希、设备位置经纬度等。 |
| `/data/misc/`                    | 保存wifi账号和vpn等配置信息。                                |
| `/data/app/`                    | 用户程序的安装目录。                                         |

#### sdcard分区

在Android设备中，SD卡（Secure Digital Card）通常是指外部存储设备，用于扩展设备的存储容量。SD卡通常被分成多个分区，每个分区用于不同的目的。以下是一些常见的SD卡分区及其路径的介绍：

1. **外部存储路径（可移除SD卡）**：
   - **/mnt/sdcard** 或 **/storage/emulated/0**：在旧版Android系统中，外部存储的根目录通常位于 `/mnt/sdcard` 或 `/storage/emulated/0` 路径下。这是可移除SD卡的挂载路径，它指向SD卡的根目录。然而，值得注意的是，从Android 4.2开始，Google引入了多用户功能，这些路径实际上指向了每个用户的私有存储空间。
2. **外部存储路径（内置SD卡）**：
   - **/storage/emulated/legacy** 或 **/mnt/sdcard/legacy**：对于一些较早的设备，其内置的SD卡（可能不可移除）的根目录可以通过这些路径访问。这些路径在某些设备上可以找到，但并不适用于所有设备。
3. **外部存储的其他路径**：
   - **/storage/emulated/<user_id>**：从Android 4.2开始，外部存储路径被修改为指向每个用户的私有存储空间。`<user_id>` 是用户的ID标识，不同用户的ID不同，每个用户拥有自己的私有存储空间。
4. **其他常见路径**：
   - **/storage/sdcard1** 或 **/mnt/extSdCard**：在一些设备上，可能会有第二个SD卡槽，称为"外置SD卡"，其挂载路径可能为 `/storage/sdcard1` 或 `/mnt/extSdCard`。
   - **/storage/UsbDriveA** 或 **/mnt/usb_storage**：对于支持USB OTG（On-The-Go）的设备，连接外部USB存储设备后，其路径可能会出现在 `/storage/UsbDriveA` 或 `/mnt/usb_storage`。



### 参考

[1] 浅谈智能手机取证——技术篇,https://zgbmxh.cn/html/27358.html