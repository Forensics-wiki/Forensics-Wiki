---
comments: true
---

## 秒时间戳（10位）

例：1670208072

## 毫秒时间戳（13位）

例：1670208633000

### 在线工具

https://www.beijing-time.org/shijianchuo/

### 离线工具

https://github.com/zhangqi-ulua/ConvertTools/tree/1.0.0

------

## 17位时间戳

Chrome的基准时间是1601年1月1日00:00:00。要计算本地时间，Chrome time必须除以一百万转换为秒，然后必须减去01/01/1601 00:00:00和01/01/1970 00:00:00之间的秒差

### 在线工具

https://www.epochconverter.com/webkit

### 代码转换

#### Python

```python
import datetime
def date_from_webkit(webkit_timestamp):
    epoch_start = datetime.datetime(1601,1,1)
    delta = datetime.timedelta(microseconds=int(webkit_timestamp))
    print epoch_start + delta

inTime = int(raw_input('Enter a Webkit timestamp to convert:'))
date_from_webkit(inTime)
```


#### JavaScript

```javascript
function date_to_webkit(date_string) {
  epoch_start = new Date(1601, 0, 1);
  date_ = new Date(date_string);
  diff = Math.abs(date_ - epoch_start) * 1000;
  return diff;
}
date_string = "2022-04-14 00:00:00";
webkit_string = date_to_webkit(date_string);
console.log(webkit_string);
```

### 参考链接

https://blog.csdn.net/weixin_54430656/article/details/124239030

------

## 18位时间戳

### 转换方法：

取前9位的数值，数值 +`978307200`，得到一个常见的9位时间戳，使用工具转换成正常时间即可

> 例：617613267628200064
> 取前九位`617613267`+978307200=1595920467
> 1595920467转换后2020-7-28 15:14:27