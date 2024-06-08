---
comments: true
---

通常情况下安卓设备的短信/彩信数据都储存在以下文件夹中：

```
/data/data/com.android.providers.telephony/databases/mmssms.db
```

Mmssms.db为一个SQLite数据库，使用SQLite查看器都可以读取

### OPPO备份

```
/Basic/sms/sms.db
```

例子：

![null](https://bu.dusays.com/2023/07/26/64c12e2513c55.png)

### SAMSUNG设备

```
/data/data/com.sec.android.provider.logsprovider/databases/logs.db
```

## 参考文章

\- [1] [magnetforensics](https://www.magnetforensics.com/blog/android-messaging-forensics-sms-mms-and-beyond/)