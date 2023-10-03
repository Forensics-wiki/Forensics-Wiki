<template><div><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p><code v-pre>Windows的注册表</code>：是一个重要的系统组件，用于存储操作系统和应用程序的配置信息。它类似于一个数据库，包含了各种键值对、参数、设置等，可以通过注册表来管理和修改系统和应用程序的行为。</p>
<h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h3>
<ul>
<li>
<p>存储系统和应用程序的配置信息：Windows和应用程序可以将自己的配置信息保存到注册表中，以便在下次启动时快速读取和应用这些设置。</p>
</li>
<li>
<p>管理系统和应用程序的行为：通过修改注册表中的键值对，可以改变系统和应用程序的行为，例如修改桌面背景、禁用某些功能、设置默认打开方式等。</p>
</li>
<li>
<p>维护系统的安全性：Windows可以使用注册表来存储用户的安全设置，例如密码策略、用户权限等。</p>
</li>
<li>
<p>支持应用程序的扩展：应用程序可以使用注册表来存储自己的设置和配置信息，以便进行扩展和定制。</p>
</li>
</ul>
<h2 id="注册表结构" tabindex="-1"><a class="header-anchor" href="#注册表结构" aria-hidden="true">#</a> 注册表结构</h2>
<blockquote>
<p>Windows的注册表由多个键（<code v-pre>Key</code>）、子键（subkey）和值（<code v-pre>Value</code>）组成，可以看作一个树形结构。</p>
</blockquote>
<table>
<thead>
<tr>
<th>内容</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>HKEY_CLASSES_ROOT</td>
<td>表示所有文件类型的类信息</td>
</tr>
<tr>
<td>HKEY_CURRENT_USER</td>
<td>表示当前用户的设置信息</td>
</tr>
<tr>
<td>HKEY_LOCAL_MACHINE</td>
<td>表示计算机的硬件和软件信息</td>
</tr>
<tr>
<td>HKEY_USERS</td>
<td>表示所有用户的设置信息</td>
</tr>
<tr>
<td>HKEY_CURRENT_CONFIG</td>
<td>表示当前计算机的设置信息</td>
</tr>
</tbody>
</table>
<p>Windows注册表文件格式规范：<a href="https://github.com/msuhanov/regf/blob/master/Windows%20registry%20file%20format%20specification.md" target="_blank" rel="noopener noreferrer">https://github.com/msuhanov/regf/blob/master/Windows registry file format specification.md<ExternalLinkIcon/></a></p>
<h3 id="具体目录" tabindex="-1"><a class="header-anchor" href="#具体目录" aria-hidden="true">#</a> 具体目录</h3>
<h4 id="操作系统安装时间" tabindex="-1"><a class="header-anchor" href="#操作系统安装时间" aria-hidden="true">#</a> 操作系统安装时间</h4>
<p><code v-pre>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion</code>的InstallDate子键</p>
<h4 id="关机时间" tabindex="-1"><a class="header-anchor" href="#关机时间" aria-hidden="true">#</a> 关机时间</h4>
<p><code v-pre>HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\Windows</code>的ShutdownTime键值，以64位Windows/FILETIME时间格式保存。</p>
<h4 id="计算机名称" tabindex="-1"><a class="header-anchor" href="#计算机名称" aria-hidden="true">#</a> 计算机名称</h4>
<p><code v-pre>HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\ComputerName\ComputerName</code>的ComputerName键值</p>
<h4 id="本地用户" tabindex="-1"><a class="header-anchor" href="#本地用户" aria-hidden="true">#</a> 本地用户</h4>
<p><code v-pre>HKEY_LOCAL_MACHINE\SAM\SAM\Domains\Account\Users\Names</code></p>
<h4 id="最后登录的用户" tabindex="-1"><a class="header-anchor" href="#最后登录的用户" aria-hidden="true">#</a> 最后登录的用户</h4>
<p><code v-pre>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Authentication\LogonUI</code></p>
<h4 id="当前登录用户" tabindex="-1"><a class="header-anchor" href="#当前登录用户" aria-hidden="true">#</a> 当前登录用户</h4>
<p><code v-pre>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Authentication\LogonUI\SessionData\1</code></p>
<h4 id="u盘序列号" tabindex="-1"><a class="header-anchor" href="#u盘序列号" aria-hidden="true">#</a> U盘序列号</h4>
<p><code v-pre>HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Enum\USBSTOR\Disk&amp;Ven_WD&amp;Prod_Elements_SE_2623&amp;Rev_1034</code><br>
<code v-pre>Disk</code>：说明该设备是一个USB存储介质设备，而不是不可存储的设备<br>
<code v-pre>Ven厂商</code>：后面的WD就是西部数据<br>
<code v-pre>Prod产品型号</code>：Elements_SE_2623<br>
<code v-pre>Rev版本</code>：1034<br>
<code v-pre>序列号</code>：子健的键值，&amp;0前面的数值<br>
键值有GUID</p>
<h4 id="卷标名称" tabindex="-1"><a class="header-anchor" href="#卷标名称" aria-hidden="true">#</a> 卷标名称</h4>
<p><code v-pre>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Portable Devices\Devices</code></p>
<h4 id="安装的程序" tabindex="-1"><a class="header-anchor" href="#安装的程序" aria-hidden="true">#</a> 安装的程序</h4>
<p><code v-pre>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths</code></p>
<h4 id="编辑卸载的程序" tabindex="-1"><a class="header-anchor" href="#编辑卸载的程序" aria-hidden="true">#</a> 编辑卸载的程序</h4>
<p><code v-pre>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall</code></p>
<h4 id="最近使用的文件" tabindex="-1"><a class="header-anchor" href="#最近使用的文件" aria-hidden="true">#</a> 最近使用的文件</h4>
<p><code v-pre>HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\ComDlg32\OpenSavePidlMRU</code></p>
<h4 id="最近运行的命令行" tabindex="-1"><a class="header-anchor" href="#最近运行的命令行" aria-hidden="true">#</a> 最近运行的命令行</h4>
<p><code v-pre>HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU</code></p>
<h3 id="主要配置单元" tabindex="-1"><a class="header-anchor" href="#主要配置单元" aria-hidden="true">#</a> 主要配置单元</h3>
<ul>
<li>
<p><code v-pre>SYSTEM</code>：对应的注册表分支为<code v-pre>HKEY_LOCAL_MACHINE\SYSTEM</code>，对应的存储文件是<code v-pre>\Windows\System32\config\SYSTEM</code>，其作用是存储计算机硬件和系统的信息。</p>
</li>
<li>
<p><code v-pre>NTUSER.DAT</code>：对应的注册表分支是<code v-pre>HKEY_CURRENT_USER</code>，存储在用户目录下，与其他注册表文件是分开的，主要用于存储用户的配置信息。</p>
</li>
<li>
<p><code v-pre>SAM</code>：分支是<code v-pre>HKEY_LOCAL_MACHINE\SAM</code>，存储在<code v-pre>C:\Windows\System32\config\SAM</code>文件中，保存了用户的密码信息。</p>
</li>
<li>
<p><code v-pre>SECURITY</code>：对应的分支<code v-pre>HKEY_LOCAL_MACHINE\SECURITY</code>，存储在<code v-pre>C:\Windows\System32\config\SECURITY</code>文件中，保存了安全性设置信息。</p>
</li>
<li>
<p><code v-pre>SOFTWARE</code>：分支是<code v-pre>HKEY_LOCAL_MACHINE\SOFTWARE</code>，文件存储在<code v-pre>C:\Windows\System32\config\SOFTWARE</code>中，保存安装软件的信息。</p>
</li>
</ul>
<h2 id="访问和修改注册表" tabindex="-1"><a class="header-anchor" href="#访问和修改注册表" aria-hidden="true">#</a> 访问和修改注册表</h2>
<ul>
<li>
<p>使用Regedit.exe：Regedit.exe是Windows自带的注册表编辑器，可以用来查看和修改注册表中的键值对。打开Regedit.exe后，可以选择需要查看或修改的节点，然后双击该节点下的键值对进行编辑。Win+R输入：regedit</p>
</li>
<li>
<p>使用Reg.exe：Reg.exe是Windows命令行工具，可以用来在命令行中访问和修改注册表。例如，可以使用“reg query”命令来查询注册表中的键值对，“reg add”命令来添加新的键值对，“reg delete”命令来删除键值对等。</p>
</li>
<li>
<p>使用API：Windows还提供了一组API，可以在程序中访问和修改注册表。例如，可以使用RegOpenKeyEx函数打开一个注册表的键，使用RegQueryValueEx函数查询一个键值对的值，使用RegSetValueEx函数设置一个键值对的值等。</p>
</li>
</ul>
<p>为了防止注册表出错和损坏，<code v-pre>Registry hives</code>还包括注册的事务日志文件和注册表的备份文件。事务日志文件名与注册表文件一致，且在同一个路径中，只是后缀不同。事务日志文件以<code v-pre>.LOG</code>为后缀，多个日志后缀会显示<code v-pre>LOG1</code>、<code v-pre>LOG2</code>这样。（如果要查看这些日志文件，需要打开文件夹选项，取消勾选“隐藏受保护的操作系统文件”）</p>
<h2 id="例题" tabindex="-1"><a class="header-anchor" href="#例题" aria-hidden="true">#</a> 例题</h2>
<p>2019年美亚杯 62题</p>
<table>
<thead>
<tr>
<th>62</th>
<th>分析何源的公司计算机内存镜像，以下那一项关于这台计算机连接 USB 装置的描述是正确？</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td>没有，因为透析资料找不到</td>
</tr>
<tr>
<td>B</td>
<td>没有，因为内存容量没有取得完整的注册表资料</td>
</tr>
<tr>
<td>C</td>
<td>有，而且装置的牌子应该是 HUAWEI</td>
</tr>
<tr>
<td>D</td>
<td>有，而且装置的 GUID 是 4d36e967-e325-11ce-afc1-832210318</td>
</tr>
<tr>
<td>E</td>
<td>有，而且装置的首次插入时间 HEX 值是 40 43 30 b9 b8 8f d5 01</td>
</tr>
<tr>
<td>C.选项，装置的牌子是希捷<code v-pre>Seagate Expansion USB Device</code></td>
<td></td>
</tr>
</tbody>
</table>
<p>D.选项很坑，你会发现找出的是<code v-pre>bfc1</code>,而选项是<code v-pre>afc1</code>所以是错误的</p>
<p>E.选项：根据下面的link，知道<code v-pre>First Install Date</code>就是<code v-pre>首次插入时间</code>，而且也说明了<code v-pre>0065</code>是对应的这个首次插入时间</p>
<p>在找到后可以发现是匹配的。</p>
<figure><img src="https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/Writeup/image-20221013225204591.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p><code v-pre>USB设备</code>通常也要看<code v-pre>SYSTEM的注册表</code></p>
<p>Link：<a href="https://www.doc88.com/p-9107655008710.html?r=1" target="_blank" rel="noopener noreferrer">https://www.doc88.com/p-9107655008710.html?r=1<ExternalLinkIcon/></a></p>
<p><img src="https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/Writeup/image-20221013224354993.png" alt="" loading="lazy"><br>
<img src="https://didctf-blog-post.oss-cn-beijing.aliyuncs.com/Writeup/image-20221013224427613.png" alt="" loading="lazy"></p>
<p>另外如果分析结果中是<code v-pre>usbstor</code>则是连接着的USB，如果是<code v-pre>usbhub</code>则是未连接的USB</p>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>
<p><a href="https://blog.csdn.net/wow0524/article/details/130301808" target="_blank" rel="noopener noreferrer">注册表取证<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/qq_62794597/article/details/127844618" target="_blank" rel="noopener noreferrer">注册表取证<ExternalLinkIcon/></a></p>
<p><a href="https://baijiahao.baidu.com/s?id=1703501297715999830&amp;wfr=spider&amp;for=pc" target="_blank" rel="noopener noreferrer">Windows 取证之注册表<ExternalLinkIcon/></a></p>
</div></template>


