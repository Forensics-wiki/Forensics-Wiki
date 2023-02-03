---
title: Airdrop空投之王 - 找到空投的他的电话号码
index: false
icon: apple
category:
  - Linux

---



：）！

![image-20221230002534704](assets/image-20221230002534704.png)

# 文前漫谈

AirDrop有一个安全漏洞将发送者的Apple ID和电话号码的哈希值泄露给接收者设备。在AirDrop连接或文件传输之前，发送设备的Apple ID和电话号码的SHA-256哈希值会广播给所有邻近的设备。所以在传输过程中可以捕获该苹果ID和电话号码的部分SHA-256哈希值，爆破出完整的信息以此来识别发送设备。



# 手撸篇

> 手撸篇献给苦苦的ctfer们



关键文件：`sysdiagnose/system_logs.archive`

AirDrop AWDL数据存储在日志内的sharingd进程下，因此可以添加过滤条件只显示sharingd进程和Hashes的数据。

投递设备的部分Hash数据（前五位…后五位），可以写脚本爆破国内运营商所有手机号的号段，需要注意的是手机号前面要加上中国的手机号前缀86。

```python
import hashlib

targetstart = input('[+] Enter the target hash start fragment: ')
targetend = input('[+] Enter the target hash end fragment: ')
print('[+] Checking all Chinese areacode')
areacodelist = ['139', '138', '137', '136', '135', '134', '159', '158', '157','150','151', '152', '188', '187', '182', '183', '184', '178']
phonematch = []

for areacode in areacodelist:
    line = '0'
    print('[+] Searching area code ' + areacode + ' for target...')
    while int(line) < 10000000:
        targetphone = '86' + str(areacode) + str(line).zfill(8)
        targettest = hashlib.sha256(targetphone.encode())
        starthashcheck = targettest.hexdigest() [0:5]
        endhashcheck = targettest.hexdigest() [-5:]
        if starthashcheck == targetstart.lower() and endhashcheck == targetend.lower():
            print(targetphone + ' matches hash fragments.  Still checking...')
            phonematch.append(targetphone)
        line = int(line) + 1
    while int(line) == 10000000:
        break
            
if phonematch:
    print('Your target\'s phone number may be:')
    for match in phonematch:
        print(match)
else:
    print('Target phone number not found in this area code set.  Target phone may use another country code.')

/**
* 复制并使用代码请注明引用出处哦~
* Lazzaro @ https://lazzzaro.github.io
*/
```





# 工具篇  - qax盘古石

> Need: 奇安信的盘古石手机取证系统









