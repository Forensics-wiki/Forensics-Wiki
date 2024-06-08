> **原文作者：** [WXjzc](https://www.cnblogs.com/WXjzc)
>
> **原文链接：** https://www.cnblogs.com/WXjzc/p/16122196.html

本文对该文章进行参考，地址https://baijiahao.baidu.com/s?id=1675966756498698574&wfr=spider&for=pc

现在有一个数据库需要恢复，已经获取到.frm和.ibd文件

这些文件即是我之前的文章[2021长安杯wp - WXjzc - 博客园 (cnblogs.com)](https://www.cnblogs.com/WXjzc/p/16113357.html)中的第36题的数据库的文件

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223559190-1061466334.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223559190-1061466334.png)

先将要恢复的数据库的表名全部提取出来`dir /l *.frm /b > filename.txt`，去掉后缀即为表名

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223557295-1164455540.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223557295-1164455540.png)

下载MySQL Utilities用于将frm文件转换成sql文件lhttps://downloads.mysql.com/archives/utilities/

通过phpstudy启用mysql服务，引擎一定要选择InnoDB，这个引擎才会生成.frm和.ibd文件

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223557292-1147161951.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223557292-1147161951.png)

然后编写一个bat文件，批量完成操作，格式为

```
mysqlfrm --server=用户名:密码@服务器:端口 源文件路径\abc.frm > 目标文件路径\abc.sql --diagnostic --port=3307 --user=
```

```plain
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\@6211@7684@8d26@5355.frm > E:\cab\www_honglian7001\sql\@6211@7684@8d26@5355.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_admin.frm > E:\cab\www_honglian7001\sql\app_admin.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_admin_cate.frm > E:\cab\www_honglian7001\sql\app_admin_cate.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_admin_log.frm > E:\cab\www_honglian7001\sql\app_admin_log.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_admin_menu.frm > E:\cab\www_honglian7001\sql\app_admin_menu.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_appconfig.frm > E:\cab\www_honglian7001\sql\app_appconfig.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_article.frm > E:\cab\www_honglian7001\sql\app_article.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_article_cate.frm > E:\cab\www_honglian7001\sql\app_article_cate.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_attachment.frm > E:\cab\www_honglian7001\sql\app_attachment.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_content.frm > E:\cab\www_honglian7001\sql\app_content.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_emailconfig.frm > E:\cab\www_honglian7001\sql\app_emailconfig.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_messages.frm > E:\cab\www_honglian7001\sql\app_messages.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_mobile.frm > E:\cab\www_honglian7001\sql\app_mobile.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_smsconfig.frm > E:\cab\www_honglian7001\sql\app_smsconfig.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_urlconfig.frm > E:\cab\www_honglian7001\sql\app_urlconfig.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_user.frm > E:\cab\www_honglian7001\sql\app_user.sql --diagnostic --port=3307 --user=
mysqlfrm --server=root:root@localhost:3306 E:\cab\www_honglian7001\app_webconfig.frm > E:\cab\www_honglian7001\sql\app_webconfig.sql --diagnostic --port=3307 --user=
```

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223559189-1129757502.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223559189-1129757502.png)

打开文件就能发现，这些sql语句完成了表结构的创建

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223557278-1877814119.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223557278-1877814119.png)

可以将这些sql文件中的语句全部合到同一个文件当中`copy *.sql create.sql`

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223557304-1723378967.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223557304-1723378967.png)

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223559184-531732541.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223559184-531732541.png)

把注释会引起报错的warning删掉

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223557323-1816773200.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223557323-1816773200.png)

在创建一个同名的数据库`create DATABASE www_honglian7001`

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223557231-1421552410.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223557231-1421552410.png)

将之前处理的sql语句导入并执行

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223559183-1056521485.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223559183-1056521485.png)

使用命令`alter table `表名` discard tablespace;`来删除创建表时生成的.ibd文件，并生成.frm文件，不执行这个命令的话，则只有.ibd文件

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223557286-1707590430.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223557286-1707590430.png)

mysql的数据目录可以在phpstudy中查看

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223557282-2073951718.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223557282-2073951718.png)

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223559192-1324017280.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223559192-1324017280.png)

将要恢复的.ibd文件放入目录下对应的数据库目录中

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223557291-1778034084.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223557291-1778034084.png)

再使用命令`alter table `表名` import tablespace;`实现数据迁移

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223557267-978358962.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223557267-978358962.png)

刷新数据库后即可查看到数据已经恢复

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223559185-1027854451.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223559185-1027854451.png)

有一点出现了问题，之前的表名`@6211@7684@8d26@5355`，这其实是最初的数据库中的一个中文表名，为`我的账单`，但是现在变成了编码形式，以这个形式进行上述操作的时候，生成的.frm文件会变成`@04006211@04007684@04008d26@04005325`，从而导致恢复失败，要解决这个问题，只需要将这类文件在一开始就重命名为正常格式即可

重命名之后进行操作，数据成功恢复

[![img](https://cdn.zhangz.cc/blog/2817142-20220605223557356-207537897.png)](https://img2022.cnblogs.com/blog/2817142/202206/2817142-20220605223557356-207537897.png)