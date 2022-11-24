<template><div><div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>本文只介绍常用的命令，具体命令大全请参考：<a href="https://www.runoob.com/linux/linux-command-manual.html" target="_blank" rel="noopener noreferrer">菜鸟教程<ExternalLinkIcon/></a></p>
</div>
<h2 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理" aria-hidden="true">#</a> 文件管理</h2>
<h3 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> cat</h3>
<p>cat（英文全拼：concatenate）命令用于连接文件并打印到标准输出设备上。</p>
<h4 id="使用权限" tabindex="-1"><a class="header-anchor" href="#使用权限" aria-hidden="true">#</a> 使用权限</h4>
<p>所有使用者</p>
<h4 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token punctuation">[</span>-AbeEnstTuv<span class="token punctuation">]</span> <span class="token punctuation">[</span>--help<span class="token punctuation">]</span> <span class="token punctuation">[</span>--version<span class="token punctuation">]</span> fileName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明：</h4>
<p><strong>-n 或 --number</strong>：由 1 开始对所有输出的行数编号。</p>
<p><strong>-b 或 --number-nonblank</strong>：和 -n 相似，只不过对于空白行不编号。</p>
<p><strong>-s 或 --squeeze-blank</strong>：当遇到有连续两行以上的空白行，就代换为一行的空白行。</p>
<p><strong>-v 或 --show-nonprinting</strong>：使用 ^ 和 M- 符号，除了 LFD 和 TAB 之外。</p>
<p><strong>-E 或 --show-ends</strong> : 在每行结束处显示 $。</p>
<p><strong>-T 或 --show-tabs</strong>: 将 TAB 字符显示为 ^I。</p>
<p><strong>-A, --show-all</strong>：等价于 -vET。</p>
<p><strong>-e：</strong> 等价于&quot;-vE&quot;选项；</p>
<p><strong>-t：</strong> 等价于&quot;-vT&quot;选项；</p>
<h4 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例：</h4>
<p>把 textfile1 的文档内容加上行号后输入 textfile2 这个文档里：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token parameter variable">-n</span> textfile1 <span class="token operator">></span> textfile2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把 textfile1 和 textfile2 的文档内容加上行号（空白行不加）之后将内容附加到 textfile3 文档里：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token parameter variable">-b</span> textfile1 textfile2 <span class="token operator">>></span> textfile3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>清空 /etc/test.txt 文档内容：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /dev/null <span class="token operator">></span> /etc/test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cat 也可以用来制作镜像文件。例如要制作软盘的镜像文件，将软盘放好后输入：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /dev/fd0 <span class="token operator">></span> OUTFILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相反的，如果想把 image file 写到软盘，输入：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> IMG_FILE <span class="token operator">></span> /dev/fd0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">提示</p>
<ul>
<li>OUTFILE 指输出的镜像文件名。</li>
<li>IMG_FILE 指镜像文件。</li>
<li>若从镜像文件写回 device 时，device 容量需与相当。</li>
<li>通常用制作开机磁片。</li>
</ul>
</div>
<hr>
<h3 id="chattr" tabindex="-1"><a class="header-anchor" href="#chattr" aria-hidden="true">#</a> chattr</h3>
<p>Linux chattr命令用于改变文件属性。</p>
<p>这项指令可改变存放在ext2文件系统上的文件或目录属性，这些属性共有以下8种模式：</p>
<ul>
<li>a：让文件或目录仅供附加用途。</li>
<li>b：不更新文件或目录的最后存取时间。</li>
<li>c：将文件或目录压缩后存放。</li>
<li>d：将文件或目录排除在倾倒操作之外。</li>
<li>i：不得任意更动文件或目录。</li>
<li>s：保密性删除文件或目录。</li>
<li>S：即时更新文件或目录。</li>
<li>u：预防意外删除。</li>
</ul>
<h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>chattr <span class="token punctuation">[</span>-RV<span class="token punctuation">]</span><span class="token punctuation">[</span>-v<span class="token operator">&lt;</span>版本编号<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>+/-/<span class="token operator">=</span><span class="token operator">&lt;</span>属性<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>文件或目录<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h4>
<p>-R 递归处理，将指定目录下的所有文件及子目录一并处理。</p>
<p>-v&lt;版本编号&gt; 设置文件或目录版本。</p>
<p>-V 显示指令执行过程。</p>
<p>+&lt;属性&gt; 开启文件或目录的该项属性。</p>
<p>-&lt;属性&gt; 关闭文件或目录的该项属性。</p>
<p>=&lt;属性&gt; 指定文件或目录的该项属性。</p>
<h4 id="实例-1" tabindex="-1"><a class="header-anchor" href="#实例-1" aria-hidden="true">#</a> 实例</h4>
<p>用chattr命令防止系统中某个关键文件被修改：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>chattr +i /etc/resolv.conf
lsattr /etc/resolv.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>会显示如下属性</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>----i-------- /etc/resolv.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>让某个文件只能往里面追加数据，但不能删除，适用于各种日志文件：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>chattr +a /var/log/messages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="chgrp" tabindex="-1"><a class="header-anchor" href="#chgrp" aria-hidden="true">#</a> chgrp</h3>
<p>Linux chgrp（英文全拼：change group）命令用于变更文件或目录的所属群组。</p>
<p>与 <a href="https://www.runoob.com/linux/linux-comm-chown.html" target="_blank" rel="noopener noreferrer">chown<ExternalLinkIcon/></a> 命令不同，chgrp 允许普通用户改变文件所属的组，只要该用户是该组的一员。</p>
<p>在 UNIX 系统家族里，文件或目录权限的掌控以拥有者及所属群组来管理。您可以使用 chgrp 指令去变更文件与目录的所属群组，设置方式采用群组名称或群组识别码皆可。</p>
<h4 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chgrp</span> <span class="token punctuation">[</span>-cfhRv<span class="token punctuation">]</span><span class="token punctuation">[</span>--help<span class="token punctuation">]</span><span class="token punctuation">[</span>--version<span class="token punctuation">]</span><span class="token punctuation">[</span>所属群组<span class="token punctuation">]</span><span class="token punctuation">[</span>文件或目录<span class="token punctuation">..</span>.<span class="token punctuation">]</span> 或 <span class="token function">chgrp</span> <span class="token punctuation">[</span>-cfhRv<span class="token punctuation">]</span><span class="token punctuation">[</span>--help<span class="token punctuation">]</span><span class="token punctuation">[</span>--reference<span class="token operator">=</span><span class="token operator">&lt;</span>参考文件或目录<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>--version<span class="token punctuation">]</span><span class="token punctuation">[</span>文件或目录<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="参数说明-1" tabindex="-1"><a class="header-anchor" href="#参数说明-1" aria-hidden="true">#</a> 参数说明</h4>
<p><strong>-c 或 --changes</strong>：效果类似&quot;-v&quot;参数，但仅回报更改的部分。</p>
<p><strong>-f 或 --quiet 或 --silent</strong>： 　不显示错误信息。</p>
<p><strong>-h 或 --no-dereference</strong>： 　只对符号连接的文件作修改，而不改动其他任何相关文件。</p>
<p><strong>-R 或 --recursive</strong>： 　递归处理，将指定目录下的所有文件及子目录一并处理。</p>
<p><strong>-v 或 --verbose</strong>： 　显示指令执行过程。</p>
<p><strong>--help</strong>： 　在线帮助。</p>
<p><strong>--reference=&lt;参考文件或目录&gt;</strong>： 　把指定文件或目录的所属群组全部设成和参考文件或目录的所属群组相同。</p>
<p><strong>--version</strong>： 　显示版本信息。</p>
<h4 id="实例-2" tabindex="-1"><a class="header-anchor" href="#实例-2" aria-hidden="true">#</a> 实例</h4>
<p>实例1：改变文件的群组属性：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chgrp</span> <span class="token parameter variable">-v</span> bin log2012.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># ll</span>
---xrw-r-- <span class="token number">1</span> root root <span class="token number">302108</span> <span class="token number">11</span>-13 06:03 log2012.log
<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># chgrp -v bin log2012.log</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;log2012.log&quot; 的所属组已更改为 bin</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># ll</span>
---xrw-r-- <span class="token number">1</span> root bin  <span class="token number">302108</span> <span class="token number">11</span>-13 06:03 log2012.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明：</strong> 将 log2012.log 文件由 root 群组改为 bin 群组。</p>
<p>实例2：根据指定文件改变文件的群组属性</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chgrp</span> <span class="token parameter variable">--reference</span><span class="token operator">=</span>log2012.log log2013.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># ll</span>
---xrw-r-- <span class="token number">1</span> root bin  <span class="token number">302108</span> <span class="token number">11</span>-13 06:03 log2012.log
-rw-r--r-- <span class="token number">1</span> root root     <span class="token number">61</span> <span class="token number">11</span>-13 06:03 log2013.log
<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment">#  chgrp --reference=log2012.log log2013.log </span>
<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># ll</span>
---xrw-r-- <span class="token number">1</span> root bin  <span class="token number">302108</span> <span class="token number">11</span>-13 06:03 log2012.log
-rw-r--r-- <span class="token number">1</span> root bin      <span class="token number">61</span> <span class="token number">11</span>-13 06:03 log2013.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明：</strong> 改变文件 log2013.log 的群组属性，使得文件 log2013.log 的群组属性和参考文件 log2012.log 的群组属性相同。</p>
<hr>
<h3 id="chmod" tabindex="-1"><a class="header-anchor" href="#chmod" aria-hidden="true">#</a> chmod</h3>
<p>Linux chmod（英文全拼：change mode）命令是控制用户对文件的权限的命令</p>
<p>Linux/Unix 的文件调用权限分为三级 : 文件所有者（Owner）、用户组（Group）、其它用户（Other Users）。</p>
<p><img src="https://bu.dusays.com/2022/11/24/637eda3e093ac.png" alt="image-20221124104310053" loading="lazy"></p>
<p>只有文件所有者和超级用户可以修改文件或目录的权限。可以使用绝对模式（八进制数字模式），符号模式指定文件的权限。</p>
<p><img src="https://bu.dusays.com/2022/11/24/637eda5e98528.png" alt="image-20221124104349802" loading="lazy"></p>
<p><strong>使用权限</strong> : 所有使用者</p>
<h4 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token punctuation">[</span>-cfvR<span class="token punctuation">]</span> <span class="token punctuation">[</span>--help<span class="token punctuation">]</span> <span class="token punctuation">[</span>--version<span class="token punctuation">]</span> mode file<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="参数说明-2" tabindex="-1"><a class="header-anchor" href="#参数说明-2" aria-hidden="true">#</a> 参数说明</h4>
<p>mode : 权限设定字串，格式如下 :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>ugoa<span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">[</span>+-<span class="token operator">=</span><span class="token punctuation">]</span><span class="token punctuation">[</span>rwxX<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">[</span>,<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中：</p>
<ul>
<li>u 表示该文件的拥有者，g 表示与该文件的拥有者属于同一个群体(group)者，o 表示其他以外的人，a 表示这三者皆是。</li>
<li>+ 表示增加权限、- 表示取消权限、= 表示唯一设定权限。</li>
<li>r 表示可读取，w 表示可写入，x 表示可执行，X 表示只有当该文件是个子目录或者该文件已经被设定过为可执行。</li>
</ul>
<p>其他参数说明：</p>
<ul>
<li>-c : 若该文件权限确实已经更改，才显示其更改动作</li>
<li>-f : 若该文件权限无法被更改也不要显示错误讯息</li>
<li>-v : 显示权限变更的详细资料</li>
<li>-R : 对目前目录下的所有文件与子目录进行相同的权限变更(即以递归的方式逐个变更)</li>
<li>--help : 显示辅助说明</li>
<li>--version : 显示版本</li>
</ul>
<h4 id="符号模式" tabindex="-1"><a class="header-anchor" href="#符号模式" aria-hidden="true">#</a> 符号模式</h4>
<p>使用符号模式可以设置多个项目：who（用户类型），operator（操作符）和 permission（权限），每个项目的设置可以用逗号隔开。 命令 chmod 将修改 who 指定的用户类型对文件的访问权限，用户类型由一个或者多个字母在 who 的位置来说明，如 who 的符号模式表所示:</p>
<table>
<thead>
<tr>
<th style="text-align:left">who</th>
<th style="text-align:left">用户类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>u</code></td>
<td style="text-align:left">user</td>
<td style="text-align:left">文件所有者</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>g</code></td>
<td style="text-align:left">group</td>
<td style="text-align:left">文件所有者所在组</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>o</code></td>
<td style="text-align:left">others</td>
<td style="text-align:left">所有其他用户</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>a</code></td>
<td style="text-align:left">all</td>
<td style="text-align:left">所有用户, 相当于 <em>ugo</em></td>
</tr>
</tbody>
</table>
<p>operator 的符号模式表:</p>
<table>
<thead>
<tr>
<th style="text-align:left">Operator</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>+</code></td>
<td style="text-align:left">为指定的用户类型增加权限</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>-</code></td>
<td style="text-align:left">去除指定用户类型的权限</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>=</code></td>
<td style="text-align:left">设置指定用户权限的设置，即将用户类型的所有权限重新设置</td>
</tr>
</tbody>
</table>
<p>permission 的符号模式表:</p>
<table>
<thead>
<tr>
<th style="text-align:left">模式</th>
<th style="text-align:left">名字</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>r</code></td>
<td style="text-align:left">读</td>
<td style="text-align:left">设置为可读权限</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>w</code></td>
<td style="text-align:left">写</td>
<td style="text-align:left">设置为可写权限</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>x</code></td>
<td style="text-align:left">执行权限</td>
<td style="text-align:left">设置为可执行权限</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>X</code></td>
<td style="text-align:left">特殊执行权限</td>
<td style="text-align:left">只有当文件为目录文件，或者其他类型的用户有可执行权限时，才将文件权限设置可执行</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>s</code></td>
<td style="text-align:left">setuid/gid</td>
<td style="text-align:left">当文件被执行时，根据who参数指定的用户类型设置文件的setuid或者setgid权限</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>t</code></td>
<td style="text-align:left">粘贴位</td>
<td style="text-align:left">设置粘贴位，只有超级用户可以设置该位，只有文件所有者u可以使用该位</td>
</tr>
</tbody>
</table>
<h4 id="八进制语法" tabindex="-1"><a class="header-anchor" href="#八进制语法" aria-hidden="true">#</a> 八进制语法</h4>
<p>chmod命令可以使用八进制数来指定权限。文件或目录的权限位是由9个权限位来控制，每三位为一组，它们分别是文件所有者（User）的读、写、执行，用户组（Group）的读、写、执行以及其它用户（Other）的读、写、执行。历史上，文件权限被放在一个比特掩码中，掩码中指定的比特位设为1，用来说明一个类具有相应的优先级。</p>
<table>
<thead>
<tr>
<th style="text-align:left">#</th>
<th style="text-align:left">权限</th>
<th style="text-align:left">rwx</th>
<th style="text-align:left">二进制</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">7</td>
<td style="text-align:left">读 + 写 + 执行</td>
<td style="text-align:left">rwx</td>
<td style="text-align:left">111</td>
</tr>
<tr>
<td style="text-align:left">6</td>
<td style="text-align:left">读 + 写</td>
<td style="text-align:left">rw-</td>
<td style="text-align:left">110</td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left">读 + 执行</td>
<td style="text-align:left">r-x</td>
<td style="text-align:left">101</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">只读</td>
<td style="text-align:left">r--</td>
<td style="text-align:left">100</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">写 + 执行</td>
<td style="text-align:left">-wx</td>
<td style="text-align:left">011</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">只写</td>
<td style="text-align:left">-w-</td>
<td style="text-align:left">010</td>
</tr>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">只执行</td>
<td style="text-align:left">--x</td>
<td style="text-align:left">001</td>
</tr>
<tr>
<td style="text-align:left">0</td>
<td style="text-align:left">无</td>
<td style="text-align:left">---</td>
<td style="text-align:left">000</td>
</tr>
</tbody>
</table>
<p>例如， 765 将这样解释：</p>
<ul>
<li>所有者的权限用数字表达：属主的那三个权限位的数字加起来的总和。如 rwx ，也就是 4+2+1 ，应该是 7。</li>
<li>用户组的权限用数字表达：属组的那个权限位数字的相加的总和。如 rw- ，也就是 4+2+0 ，应该是 6。</li>
<li>其它用户的权限数字表达：其它用户权限位的数字相加的总和。如 r-x ，也就是 4+0+1 ，应该是 5。</li>
</ul>
<h4 id="实例-3" tabindex="-1"><a class="header-anchor" href="#实例-3" aria-hidden="true">#</a> 实例</h4>
<p>将文件 file1.txt 设为所有人皆可读取 :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> ugo+r file1.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将文件 file1.txt 设为所有人皆可读取 :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> a+r file1.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将文件 file1.txt 与 file2.txt 设为该文件拥有者，与其所属同一个群体者可写入，但其他以外的人则不可写入 :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> ug+w,o-w file1.txt file2.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为 <a href="http://ex1.py" target="_blank" rel="noopener noreferrer">ex1.py<ExternalLinkIcon/></a> 文件拥有者增加可执行权限:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> u+x ex1.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将目前目录下的所有文件与子目录皆设为任何人可读取 :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token parameter variable">-R</span> a+r *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外chmod也可以用数字来表示权限如 :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">777</span> <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>语法为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> abc <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中a,b,c各为一个数字，分别表示User、Group、及Other的权限。</p>
<h4 id="r-4-w-2-x-1" tabindex="-1"><a class="header-anchor" href="#r-4-w-2-x-1" aria-hidden="true">#</a> r=4，w=2，x=1</h4>
<ul>
<li>若要 rwx 属性则 4+2+1=7；</li>
<li>若要 rw- 属性则 4+2=6；</li>
<li>若要 r-x 属性则 4+1=5。</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token assign-left variable">a</span><span class="token operator">=</span>rwx <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>和</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">777</span> <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果相同</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token assign-left variable">ug</span><span class="token operator">=</span>rwx,o<span class="token operator">=</span>x <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>和</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">771</span> <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果相同</p>
<p>若用 <strong>chmod 4755 filename</strong> 可使此程序具有 root 的权限。</p>
<h4 id="更多说明" tabindex="-1"><a class="header-anchor" href="#更多说明" aria-hidden="true">#</a> 更多说明</h4>
<table>
<thead>
<tr>
<th style="text-align:left"><code v-pre>命令</code></th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>chmod a+r 文件</code></td>
<td style="text-align:left">给file的所有用户增加读权限</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>chmod a-x 文件</code></td>
<td style="text-align:left">删除file的所有用户的执行权限</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>chmod a+rw 文件</code></td>
<td style="text-align:left">给file的所有用户增加读写权限</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>chmod +rwx 文件</code></td>
<td style="text-align:left">给file的所有用户增加读写执行权限</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>chmod u=rw,go= 文件</code></td>
<td style="text-align:left">对file的所有者设置读写权限，清空该用户组和其他用户对file的所有权限（空格代表无权限）</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>chmod -R u+r,go-r 目录</code></td>
<td style="text-align:left">对目录docs和其子目录层次结构中的所有文件给用户增加读权限，而对用户组和其他用户删除读权限</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>chmod 664 文件</code></td>
<td style="text-align:left">对file的所有者和用户组设置读写权限, 为其其他用户设置读权限</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>chmod 0755 文件</code></td>
<td style="text-align:left">相当于<code v-pre>u=rwx (4+2+1),go=rx (4+1 &amp; 4+1)</code>。<code v-pre>0</code> 没有特殊模式。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>chmod 4755 文件</code></td>
<td style="text-align:left"><code v-pre>4</code>设置了设置用户ID位，剩下的相当于 u=rwx (4+2+1),go=rx (4+1 &amp; 4+1)。</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>find path/ -type d -exec chmod a-x {} \;</code></td>
<td style="text-align:left">删除可执行权限对path/以及其所有的目录（不包括文件）的所有用户，使用'-type f'匹配文件</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>find path/ -type d -exec chmod a+x {} \;</code></td>
<td style="text-align:left">允许所有用户浏览或通过目录path/</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h3>
<p>Linux find 命令用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数，则 find 命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。</p>
<h4 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3" aria-hidden="true">#</a> 语法</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>find   path   -option   [   -print ]   [ -exec   -ok   command ]   {} \;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数说明</strong> :</p>
<p>find 根据下列规则判断 path 和 expression，在命令列上第一个 - ( ) , ! 之前的部份为 path，之后的是 expression。如果 path 是空字串则使用目前路径，如果 expression 是空字串则使用 -print 为预设 expression。</p>
<p>expression 中可使用的选项有二三十个之多，在此只介绍最常用的部份。</p>
<ul>
<li>
<p>-mount, -xdev : 只检查和指定目录在同一个文件系统下的文件，避免列出其它文件系统中的文件</p>
</li>
<li>
<p>-amin n : 在过去 n 分钟内被读取过</p>
</li>
<li>
<p>-anewer file : 比文件 file 更晚被读取过的文件</p>
</li>
<li>
<p>-atime n : 在过去 n 天内被读取过的文件</p>
</li>
<li>
<p>-cmin n : 在过去 n 分钟内被修改过</p>
</li>
<li>
<p>-cnewer file :比文件 file 更新的文件</p>
</li>
<li>
<p>-ctime n : 在过去 n 天内创建的文件</p>
</li>
<li>
<p>-mtime n : 在过去 n 天内修改过的文件</p>
</li>
<li>
<p>-empty : 空的文件-gid n or -group name : gid 是 n 或是 group 名称是 name</p>
</li>
<li>
<p>-ipath p, -path p : 路径名称符合 p 的文件，ipath 会忽略大小写</p>
</li>
<li>
<p>-name name, -iname name : 文件名称符合 name 的文件。iname 会忽略大小写</p>
</li>
<li>
<p>-size n : 文件大小 是 n 单位，b 代表 512 位元组的区块，c 表示字元数，k 表示 kilo bytes，w 是二个位元组。</p>
</li>
<li>
<p>-type c : 文件类型是 c 的文件。</p>
<ul>
<li>d: 目录</li>
<li>c: 字型装置文件</li>
<li>b: 区块装置文件</li>
<li>p: 具名贮列</li>
<li>f: 一般文件</li>
<li>l: 符号连结</li>
<li>s: socket</li>
</ul>
</li>
<li>
<p>-pid n : process id 是 n 的文件</p>
</li>
</ul>
<p>你可以使用 ( ) 将运算式分隔，并使用下列运算。</p>
<p>exp1 -and exp2</p>
<p>! expr</p>
<p>-not expr</p>
<p>exp1 -or exp2</p>
<p>exp1, exp2</p>
<h4 id="实例-4" tabindex="-1"><a class="header-anchor" href="#实例-4" aria-hidden="true">#</a> 实例</h4>
<p>将当前目录及其子目录下所有文件后缀为 <strong>.c</strong> 的文件列出来:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># find . -name "*.c"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将当前目录及其子目录中的所有文件列出：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># find . -type f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将当前目录及其子目录下所有最近 20 天内更新过的文件列出:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># find . -ctime  20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查找 /var/log 目录中更改时间在 7 日以前的普通文件，并在删除之前询问它们：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># find /var/log -type f -mtime +7 -ok rm {} \;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查找当前目录中文件属主具有读、写权限，并且文件所属组的用户和其他用户具有读权限的文件：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># find . -type f -perm 644 -exec ls -l {} \;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查找系统中所有文件长度为 0 的普通文件，并列出它们的完整路径：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># find / -type f -size 0 -exec ls -l {} \;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="mdir" tabindex="-1"><a class="header-anchor" href="#mdir" aria-hidden="true">#</a> mdir</h3>
<p>Linux mdir命令用于显示MS-DOS目录。</p>
<p>mdir为mtools工具指令，模拟MS-DOS的dir指令，可显示MS-DOS文件系统中的目录内容。</p>
<h4 id="语法-4" tabindex="-1"><a class="header-anchor" href="#语法-4" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mdir <span class="token punctuation">[</span>-afwx/<span class="token punctuation">]</span><span class="token punctuation">[</span>目录<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数</strong>：</p>
<ul>
<li>-/ 显示目录下所有子目录与文件。</li>
<li>-a 　显示隐藏文件。</li>
<li>-f 　不显示磁盘所剩余的可用空间。</li>
<li>-w 　仅显示目录或文件名称，并以横排方式呈现，以便一次能显示较多的目录或文件。</li>
<li>-X 　仅显示目录下所有子目录与文件的完整路径，不显示其他信息。</li>
</ul>
<h4 id="实例-5" tabindex="-1"><a class="header-anchor" href="#实例-5" aria-hidden="true">#</a> 实例</h4>
<p>显示a盘中的内容</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ mdir -/ a:<span class="token punctuation">\</span>*   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上命令执行后，mdir将显示指定盘&quot;a:&quot;中的所有子目录及其中的文件信息，如下所示：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Volume <span class="token keyword">in</span> drive A has no label  <span class="token comment">#加载信息  </span>
Volume Serial Number is 13D2~055C  
Directory <span class="token keyword">for</span> A:<span class="token punctuation">\</span>                   <span class="token comment">#以下为目录信息  </span>
./TEST <span class="token operator">&lt;</span>DIR<span class="token operator">></span> <span class="token number">2011</span>-08-23 <span class="token number">16</span>:59     
<span class="token comment">#显示格式为文件名，目录大小，修改时间  </span>
AUTORUN.INF <span class="token number">265</span> <span class="token number">2011</span>-08-23 <span class="token number">16</span>:53  
AUTORUN.BAT <span class="token number">43</span> <span class="token number">2011</span>-08-23 <span class="token number">16</span>:56  
<span class="token number">3</span> files <span class="token number">308</span> bytes               <span class="token comment">#统计总大小  </span>
<span class="token number">724</span> <span class="token number">325</span> bytes <span class="token function">free</span>              <span class="token comment">#剩余空间  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="mv" tabindex="-1"><a class="header-anchor" href="#mv" aria-hidden="true">#</a> mv</h3>
<p>Linux mv（英文全拼：move file）命令用来为文件或目录改名、或将文件或目录移入其它位置。</p>
<h4 id="语法-5" tabindex="-1"><a class="header-anchor" href="#语法-5" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mv</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token builtin class-name">source</span> dest
<span class="token function">mv</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> source<span class="token punctuation">..</span>. directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p>
<ul>
<li><strong>-b</strong>: 当目标文件或目录存在时，在执行覆盖前，会为其创建一个备份。</li>
<li><strong>-i</strong>: 如果指定移动的源目录或文件与目标的目录或文件同名，则会先询问是否覆盖旧文件，输入 y 表示直接覆盖，输入 n 表示取消该操作。</li>
<li><strong>-f</strong>: 如果指定移动的源目录或文件与目标的目录或文件同名，不会询问，直接覆盖旧文件。</li>
<li><strong>-n</strong>: 不要覆盖任何已存在的文件或目录。</li>
<li><strong>-u</strong>：当源文件比目标文件新或者目标文件不存在时，才执行移动操作。</li>
</ul>
<p>mv 参数设置与运行结果</p>
<table>
<thead>
<tr>
<th style="text-align:left">命令格式</th>
<th style="text-align:left">运行结果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>mv source_file(文件) dest_file(文件)</code></td>
<td style="text-align:left">将源文件名 source_file 改为目标文件名 dest_file</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>mv source_file(文件) dest_directory(目录)</code></td>
<td style="text-align:left">将文件 source_file 移动到目标目录 dest_directory 中</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>mv source_directory(目录) dest_directory(目录)</code></td>
<td style="text-align:left">目录名 dest_directory 已存在，将 source_directory 移动到目录名 dest_directory 中；目录名 dest_directory 不存在则 source_directory 改名为目录名 dest_directory</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>mv source_directory(目录) dest_file(文件)</code></td>
<td style="text-align:left">出错</td>
</tr>
</tbody>
</table>
<h4 id="实例-6" tabindex="-1"><a class="header-anchor" href="#实例-6" aria-hidden="true">#</a> 实例</h4>
<p>将文件 aaa 改名为 bbb :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mv</span> aaa bbb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 info 目录放入 logs 目录中。注意，如果 logs 目录不存在，则该命令将 info 改名为 logs。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mv</span> info/ logs 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再如将 <strong>/usr/runoob</strong> 下的所有文件和目录移到当前目录下，命令行为：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">mv</span> /usr/runoob/*  <span class="token builtin class-name">.</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="文件传输" tabindex="-1"><a class="header-anchor" href="#文件传输" aria-hidden="true">#</a> 文件传输</h2>
<h3 id="ftp" tabindex="-1"><a class="header-anchor" href="#ftp" aria-hidden="true">#</a> ftp</h3>
<p>Linux ftp命令设置文件系统相关功能。</p>
<p>FTP是ARPANet的标准文件传输协议，该网络就是现今Internet的前身。</p>
<h4 id="语法-6" tabindex="-1"><a class="header-anchor" href="#语法-6" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ftp</span> <span class="token punctuation">[</span>-dignv<span class="token punctuation">]</span><span class="token punctuation">[</span>主机名称或IP地址<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数</strong>：</p>
<ul>
<li>-d 详细显示指令执行过程，便于排错或分析程序执行的情形。</li>
<li>-i 关闭互动模式，不询问任何问题。</li>
<li>-g 关闭本地主机文件名称支持特殊字符的扩充特性。</li>
<li>-n 不使用自动登陆。</li>
<li>-v 显示指令执行过程。</li>
</ul>
<h4 id="实例-7" tabindex="-1"><a class="header-anchor" href="#实例-7" aria-hidden="true">#</a> 实例</h4>
<p>例如使用ftp命令匿名登录ftp.kernel.org服务器，该服务是Linux 内核的官方服务器，可以使用如下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ftp</span> ftp.kernel.org <span class="token comment">#发起链接请求 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="tftp" tabindex="-1"><a class="header-anchor" href="#tftp" aria-hidden="true">#</a> tftp</h3>
<p>Linux tftp命令用于传输文件。</p>
<p>FTP让用户得以下载存放于远端主机的文件，也能将文件上传到远端主机放置。tftp是简单的文字模式ftp程序，它所使用的指令和FTP类似。</p>
<h4 id="语法-7" tabindex="-1"><a class="header-anchor" href="#语法-7" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>tftp <span class="token punctuation">[</span>主机名称或IP地址<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>操作说明：</strong></p>
<ul>
<li>connect：连接到远程tftp服务器</li>
<li>mode：文件传输模式</li>
<li>put：上传文件</li>
<li>get：下载文件</li>
<li>quit：退出</li>
<li>verbose：显示详细的处理信息</li>
<li>trace：显示包路径</li>
<li>status：显示当前状态信息</li>
<li>binary：二进制传输模式</li>
<li>ascii：ascii 传送模式</li>
<li>rexmt：设置包传输的超时时间</li>
<li>timeout：设置重传的超时时间</li>
<li>help：帮助信息</li>
<li>? ：帮助信息</li>
</ul>
<h4 id="实例-8" tabindex="-1"><a class="header-anchor" href="#实例-8" aria-hidden="true">#</a> 实例</h4>
<p>连接远程服务器&quot;218.28.188.288&quot;，然后使用put 命令下载其中根目录下的文件&quot;README&quot;，可使用命令如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>tftp <span class="token number">218.28</span>.188.288 <span class="token comment">#连接远程服务器 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>连接服务器之后可进行相应的操作，具体如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ tftp <span class="token number">218.28</span>.188.228                      <span class="token comment">#连接远程服务器  </span>
tftp<span class="token operator">></span> ?                                    <span class="token comment">#使用？，参考帮助  </span>
Commands may be abbreviated. Commands are: <span class="token comment">#帮助命令列表  </span>
connect connect to remote tftp  
mode <span class="token builtin class-name">set</span> <span class="token function">file</span> transfer mode  
put send <span class="token function">file</span>  
get receive <span class="token function">file</span>  
quit <span class="token builtin class-name">exit</span> tftp  
verbose toggle verbose mode  
trace toggle packet tracing  
status show current status  
binary <span class="token builtin class-name">set</span> mode to octet  
ascii <span class="token builtin class-name">set</span> mode to netascii  
rexmt <span class="token builtin class-name">set</span> per-packet retransmission <span class="token function">timeout</span>  
<span class="token function">timeout</span> <span class="token builtin class-name">set</span> total retransmission <span class="token function">timeout</span>  
? print <span class="token builtin class-name">help</span> information  
tftp<span class="token operator">></span>get README                             <span class="token comment">#远程下载README文件  </span>
getting from <span class="token number">218.28</span>.188.288 to /home/cmd  
Recived <span class="token number">168236</span> bytes <span class="token keyword">in</span> <span class="token number">1.5</span> seconds<span class="token punctuation">[</span><span class="token number">112157</span> bit/s<span class="token punctuation">]</span>  
tftp<span class="token operator">></span>quit                                   <span class="token comment">#离开tftp </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="ncftp" tabindex="-1"><a class="header-anchor" href="#ncftp" aria-hidden="true">#</a> ncftp</h3>
<p>Linux ncftp命令用于传输文件。</p>
<p>FTP让用户得以下载存放于服务器主机的文件，也能将文件上传到远端主机放置。</p>
<p>NcFTP是文字模式FTP程序的佼佼者，它具备多样特色， 包括显示传输速率，下载进度，自动续传，标住书签，可通过防火墙和代理服务器等。</p>
<p>当不指定用户名时，ncftp 命令会自动尝试使用匿名账户anonymous 去连接远程FTP 服 务器，不需要用户输入账号和密码。</p>
<h4 id="语法-8" tabindex="-1"><a class="header-anchor" href="#语法-8" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ncftp <span class="token punctuation">[</span>主机或IP地址<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数说明：</strong></p>
<ul>
<li>-u&lt;用户名&gt; 指定登录FTP服务器的用户名</li>
<li>-p&lt;密码&gt; 设置用户密码</li>
<li>-P&lt;端口号&gt; 指定FTP端口号，默认为21</li>
<li>-j&lt;账号&gt; 指定账号</li>
<li>-h 帮助信息</li>
<li>-v 版本信息</li>
</ul>
<h4 id="实例-9" tabindex="-1"><a class="header-anchor" href="#实例-9" aria-hidden="true">#</a> 实例</h4>
<p>使用ncftp命令匿名连接FTP服务器。</p>
<p>例如想匿名连接ftp.kernel.org服务器，同时不想输入anonymous等匿名用户名，可直接使用ncftp命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ncftp ftp.kernel.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>得到如下信息：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ ncftp ftp.kernel.org <span class="token comment">#匿名连接ftp.kernel.org服务器  </span>
NcFTP <span class="token number">3.2</span>.1 <span class="token punctuation">(</span>Jul <span class="token number">29</span>, <span class="token number">2007</span><span class="token punctuation">)</span> by Mike Gleason <span class="token punctuation">(</span>http://www.NcFTP.com/contact/<span class="token punctuation">)</span>.  
<span class="token comment">#ncftp版权、版本等信息  </span>
Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">1992</span>-2005 by Mike Gleason.  
All rights reserved.  
Connecting to <span class="token number">149.20</span>.20.133<span class="token punctuation">..</span>. <span class="token comment">#连接服务器  </span>
Welcome to ftp.kernel.org.  
Logging in<span class="token punctuation">..</span>. <span class="token comment">#匿名登录  </span>
Welcome to the <span class="token comment">#欢迎信息  </span>
LINUX KERNEL ARCHIVES  
ftp.kernel.org  
<span class="token string">"Much more than just kernels"</span>  
IF YOU'RE ACCESSING THIS SITE VIA A WEB BROWSER  
PLEASE USE THE HTTP URL BELOW INSTEAD<span class="token operator">!</span>  
----<span class="token operator">></span> If you are looking <span class="token keyword">for</span> mirror sites, please go <span class="token operator">&lt;</span>---- 
----<span class="token operator">></span> to mirrors.kernel.org instead <span class="token operator">&lt;</span>---- 
This site is provided as a public <span class="token function">service</span> by the Linux Kernel  
Organization, a California nonprofit corporation. Bandwidth is  
provided by The Internet Software Consortium, Inc. Our servers are  
located <span class="token keyword">in</span> San Francisco and Palo Alto, California<span class="token punctuation">;</span> Corvallis, Oregon<span class="token punctuation">;</span>  
Amsterdam, Netherlands and Ume., Sweden<span class="token punctuation">;</span> use <span class="token keyword">in</span> violation of any  
applicable laws strictly prohibited.  
Due to U.S. Exports Regulations, all cryptographic software on this  
site is subject to the following legal notice:  
This site includes publicly available encryption <span class="token builtin class-name">source</span> code  
which, together with object code resulting from the compiling of  
publicly available <span class="token builtin class-name">source</span> code, may be exported from the United  
States under License Exception <span class="token string">"TSU"</span> pursuant to <span class="token number">15</span> C.F.R. Section  
<span class="token number">740.13</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>.  
This legal notice applies to cryptographic software only. Please see  
the Bureau of Industry and Security <span class="token punctuation">(</span>http://www.bis.doc.gov/<span class="token punctuation">)</span> <span class="token keyword">for</span> <span class="token function">more</span>  
information about current U.S. regulations.  
Neither the Linux Kernel Organization, nor its sponsors <span class="token function">make</span> any  
guarantees, explicit or implicit, about the contents of this site.  
Use at your own risk.  
This site is accessible via the following mechanisms:  
FTP ftp://ftp.kernel.org/pub/  
HTTP http://www.kernel.org/pub/  
RSYNC rsync://rsync.kernel.org/pub/  
NFS and SMB/CIFS are no longer available.  
For comments on this site, please contact <span class="token operator">&lt;</span>ftpadmin@kernel.org<span class="token operator">></span>.  
Please <span class="token keyword">do</span> not use this address <span class="token keyword">for</span> questions that are not related to  
the operation of this site. Please see our homepage at  
http://www.kernel.org/ <span class="token keyword">for</span> links to Linux documentation resources.  
Login successful.  
Logged <span class="token keyword">in</span> to ftp.kernel.org.  
ncftp / <span class="token operator">></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提示：ncftp的命令提示符为&quot;ncftp / &gt;&quot;，而不是ftp中的&quot;ftp / &gt;&quot;。</p>
<p>使用ncftp命令操作、下载文件。</p>
<p>ncftp的命令基本上与ftp相同，例如可以使用&quot;cd&quot;命令切换在FTP服务器中的当前目录，使用&quot;ls&quot;命令列出当前目录内容，使用&quot;get&quot;命令下载&quot;/pub&quot;目录下的README文件、使用&quot;quit&quot;离开ncftp等。操作结果如下：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ncftp / <span class="token operator">></span> <span class="token builtin class-name">pwd</span>               <span class="token comment">#查看当前路径  </span>
ftp://ftp.kernel.org        <span class="token comment">#当前路径为根目录  </span>
ncftp / <span class="token operator">></span> <span class="token function">ls</span>                <span class="token comment">#查看当前目录列表  </span>
bin/ for_mirrors_only/ pub/  
dev/ lib/ usr@  
etc/ lost+found/ welcome.msg@  
ncftp / <span class="token operator">></span> <span class="token builtin class-name">cd</span> pub            <span class="token comment">#切换目录到pub 子目录  </span>
Directory successfully changed.  
ncftp /pub <span class="token operator">></span> <span class="token function">ls</span>             <span class="token comment">#查看pub 的目录列表  </span>
dist/ media/ scm/  
index.html RCS/ site/  
linux/ README software/  
lost+found/ README_ABOUT_BZ2_FILES tools/  
ncftp /pub <span class="token operator">></span> get README     <span class="token comment">#下载README 文件  </span>
README: <span class="token number">1.87</span> KB <span class="token number">10.39</span> KB/s  
ncftp /pub <span class="token operator">></span> quit           <span class="token comment">#离开ncftp </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与ftp不同的是，ncftp此时会提示用户是否将FTP服务器保存为书签，以便于下次登录，用户可以进行自定义书签名等操作，如下所示：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>You have not saved a bookmark <span class="token keyword">for</span> this site.  <span class="token comment">#离开提示信息  </span>
Would you like to save a bookmark to:  
ftp://ftp.kernel.org/pub/  
Save? <span class="token punctuation">(</span>yes/no<span class="token punctuation">)</span> <span class="token function">yes</span>                            <span class="token comment">#确认是否保存  </span>
Enter a name <span class="token keyword">for</span> this bookmark, or hit enter <span class="token keyword">for</span> <span class="token string">"kernel"</span><span class="token builtin class-name">:</span> kernel <span class="token comment">#输入书签名  </span>
Bookmark <span class="token string">"kernel"</span> saved. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="ftpshut" tabindex="-1"><a class="header-anchor" href="#ftpshut" aria-hidden="true">#</a> ftpshut</h3>
<p>Linux ftpshut命令在指定的时间关闭FTP服务器。</p>
<p>本指令提供系统管理者在设置的时间关闭FTP服务器，且能在关闭之前发出警告信息通知用户。关闭时间若设置后为&quot;none&quot;，则会马上关闭服务器。如果采用&quot;+30&quot;的方式来设置表示服务器在30分钟之后关闭。依次类推，假设使用&quot;1130&quot;的格式则代表服务器会在每日的11时30分关闭，时间格式为24小时制。FTP服务器关闭后，在/etc目录下会产生一个名称为shutmsg的文件，把它删除后即可再度启动FTP服务器的功能。</p>
<h4 id="语法-9" tabindex="-1"><a class="header-anchor" href="#语法-9" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ftpshut <span class="token punctuation">[</span>-d<span class="token operator">&lt;</span>分钟<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-l<span class="token operator">&lt;</span>分钟<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>关闭时间<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"警告信息"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数</strong>：</p>
<ul>
<li>-d&lt;分钟&gt; 切断所有FTP连线时间。</li>
<li>-l&lt;分钟&gt; 停止接受FTP登入的时间。</li>
</ul>
<h4 id="实例-10" tabindex="-1"><a class="header-anchor" href="#实例-10" aria-hidden="true">#</a> 实例</h4>
<p>在晚上11:00 关闭FTP服务器，并在关闭前5 分钟拒绝新的FTP登录，前3 分钟关闭所有ftp的链接，且给出警告信息，可使用如下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ftpshut-d <span class="token number">3</span> <span class="token parameter variable">-1</span> <span class="token number">5</span> <span class="token number">1100</span> <span class="token string">"Server will be shutdown at 23:00:00"</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="ftpwho" tabindex="-1"><a class="header-anchor" href="#ftpwho" aria-hidden="true">#</a> ftpwho</h3>
<p>Linux ftpwho命令用于显示目前所有以FTP登入的用户信息。</p>
<p>执行这项指令可得知目前用FTP登入系统的用户有那些人，以及他们正在进行的操作。</p>
<h4 id="语法-10" tabindex="-1"><a class="header-anchor" href="#语法-10" aria-hidden="true">#</a> 语法</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>ftpwho
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数说明：</strong></p>
<ul>
<li>-v 显示版本信息</li>
</ul>
<h4 id="实例-11" tabindex="-1"><a class="header-anchor" href="#实例-11" aria-hidden="true">#</a> 实例</h4>
<p>查询当前有哪些用户正在登录FTP服务器，可直接使用如下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ftpwho
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令有如下输出结果：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ ftpwho              <span class="token comment">#查询当前正在登录FTP 服务器的用户  </span>
standalone FTP daemon<span class="token punctuation">[</span><span class="token number">2085</span><span class="token punctuation">]</span>：  
<span class="token number">3547</span> wyw <span class="token punctuation">[</span>1m20s<span class="token punctuation">]</span> 1m25s<span class="token punctuation">(</span>idle<span class="token punctuation">)</span>  
Service class - <span class="token number">1</span> user <span class="token comment">#当前有一个用户登录FTP服务器 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="ftpcount" tabindex="-1"><a class="header-anchor" href="#ftpcount" aria-hidden="true">#</a> ftpcount</h3>
<p>Linux ftpcount命令用于显示目前以FTP登入的用户人数。</p>
<p>执行这项指令可得知目前用FTP登入系统的人数以及FTP登入人数的上限。</p>
<h4 id="语法-11" tabindex="-1"><a class="header-anchor" href="#语法-11" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ftpcount
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数说明：</strong></p>
<ul>
<li>-f&lt;设定文件&gt; : 指定设定文件的路径。</li>
<li>-h，--help ：显示帮助信息。</li>
</ul>
<h4 id="实例-12" tabindex="-1"><a class="header-anchor" href="#实例-12" aria-hidden="true">#</a> 实例</h4>
<p>ftpcount 可以直接查询FTP服务器上用户的人数，可直接使用如下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ftpcount              <span class="token comment">#查询当前FTP用户的人数 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令有如下输出结果：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ ftpcount             <span class="token comment">#查询当前FTP用户的人数  </span>
Master proftpd process <span class="token number">2085</span>:  
Service class - <span class="token number">6</span> user <span class="token comment">#当前共6个用户登录到服务器 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="磁盘管理" tabindex="-1"><a class="header-anchor" href="#磁盘管理" aria-hidden="true">#</a> 磁盘管理</h2>
<h3 id="cd" tabindex="-1"><a class="header-anchor" href="#cd" aria-hidden="true">#</a> cd</h3>
<p>Linux cd（英文全拼：change directory）命令用于切换当前工作目录。</p>
<p>其中 dirName 表示法可为绝对路径或相对路径。若目录名称省略，则变换至使用者的 home 目录 (也就是刚 login 时所在的目录)。</p>
<p>另外，<strong>~</strong> 也表示为 home 目录 的意思， <strong>.</strong> 则是表示目前所在的目录， <strong>..</strong> 则表示目前目录位置的上一层目录。</p>
<h4 id="语法-12" tabindex="-1"><a class="header-anchor" href="#语法-12" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">[</span>dirName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>dirName：要切换的目标目录。</li>
</ul>
<h4 id="实例-13" tabindex="-1"><a class="header-anchor" href="#实例-13" aria-hidden="true">#</a> 实例</h4>
<p>跳到 /usr/bin/ :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>跳到自己的 home 目录 :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>跳到目前目录的上上两层 :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="dirs" tabindex="-1"><a class="header-anchor" href="#dirs" aria-hidden="true">#</a> dirs</h3>
<p>Linux dirs命令用于显示目录记录。</p>
<p>显示目录堆叠中的记录。</p>
<h4 id="语法-13" tabindex="-1"><a class="header-anchor" href="#语法-13" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">dirs</span> <span class="token punctuation">[</span>+/-n -l<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数</strong>：</p>
<ul>
<li>+n 显示从左边算起第n笔的目录。</li>
<li>-n 显示从右边算起第n笔的目录。</li>
<li>-l 显示目录完整的记录。</li>
</ul>
<h4 id="实例-14" tabindex="-1"><a class="header-anchor" href="#实例-14" aria-hidden="true">#</a> 实例</h4>
<p>列出&quot;/home/cc/Ruijie&quot;里所有内容的详细信息。可用如下命令。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">dir</span> <span class="token parameter variable">-l</span> /home/cc/Ruijie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是显示的内容：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">dir</span> <span class="token parameter variable">-l</span> /home/cc/Ruijie

总计2168

-rwxr-xr-x <span class="token number">1</span> cc cc  <span class="token number">112876</span> <span class="token number">2008</span>-06-26 libpcap.so.0.6.2 -rwxr-xr-x <span class="token number">1</span> cc cc  <span class="token number">737192</span> <span class="token number">2008</span>-06-26 libstdc++.so.5 -rwxr-xr-x <span class="token number">1</span> cc cc1938 <span class="token number">2004</span>-04-23 readme.txt

-rwxr-xr-x <span class="token number">1</span> cc cc <span class="token number">1350772</span> <span class="token number">2005</span>-08-31 xrgsu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="mkdir" tabindex="-1"><a class="header-anchor" href="#mkdir" aria-hidden="true">#</a> mkdir</h3>
<p>Linux mkdir（英文全拼：make directory）命令用于创建目录。</p>
<h4 id="语法-14" tabindex="-1"><a class="header-anchor" href="#语法-14" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token punctuation">[</span>-p<span class="token punctuation">]</span> dirName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p>
<ul>
<li>-p 确保目录名称存在，不存在的就建一个。</li>
</ul>
<h4 id="实例-15" tabindex="-1"><a class="header-anchor" href="#实例-15" aria-hidden="true">#</a> 实例</h4>
<p>在工作目录下，建立一个名为 runoob 的子目录 :</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> runoob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在工作目录下的 runoob2 目录中，建立一个名为 test 的子目录。</p>
<p>若 runoob2 目录原本不存在，则建立一个。（注：本例若不加 -p 参数，且原本 runoob2 目录不存在，则产生错误。）</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> runoob2/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="系统管理" tabindex="-1"><a class="header-anchor" href="#系统管理" aria-hidden="true">#</a> 系统管理</h2>
<h3 id="adduser" tabindex="-1"><a class="header-anchor" href="#adduser" aria-hidden="true">#</a> adduser</h3>
<p>Linux adduser 命令用于新增使用者帐号或更新预设的使用者资料。</p>
<p>adduser 与 useradd 指令为同一指令（经由符号连结 symbolic link）。</p>
<p>使用权限：系统管理员。</p>
<p>adduser 是增加使用者。相对的，也有删除使用者的指令 <a href="https://www.runoob.com/linux/linux-comm-userdel.html" target="_blank" rel="noopener noreferrer">userdel<ExternalLinkIcon/></a>，语法为 <strong>userdel [login ID]</strong>。</p>
<h4 id="语法-15" tabindex="-1"><a class="header-anchor" href="#语法-15" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>adduser <span class="token punctuation">[</span>-c comment<span class="token punctuation">]</span> <span class="token punctuation">[</span>-d home_dir<span class="token punctuation">]</span> <span class="token punctuation">[</span>-e expire_date<span class="token punctuation">]</span> <span class="token punctuation">[</span>-f inactive_time<span class="token punctuation">]</span> <span class="token punctuation">[</span>-g initial_group<span class="token punctuation">]</span> <span class="token punctuation">[</span>-G group<span class="token punctuation">[</span>,<span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-m <span class="token punctuation">[</span>-k skeleton_dir<span class="token punctuation">]</span> <span class="token operator">|</span> -M<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p passwd<span class="token punctuation">]</span> <span class="token punctuation">[</span>-s shell<span class="token punctuation">]</span> <span class="token punctuation">[</span>-u uid <span class="token punctuation">[</span> -o<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-n<span class="token punctuation">]</span> <span class="token punctuation">[</span>-r<span class="token punctuation">]</span> loginid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>adduser <span class="token parameter variable">-D</span> <span class="token punctuation">[</span>-g default_group<span class="token punctuation">]</span> <span class="token punctuation">[</span>-b default_home<span class="token punctuation">]</span> <span class="token punctuation">[</span>-f default_inactive<span class="token punctuation">]</span> <span class="token punctuation">[</span>-e default_expire_date<span class="token punctuation">]</span> <span class="token punctuation">[</span>-s default_shell<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p>
<ul>
<li>-c comment 新使用者位于密码档（通常是 /etc/passwd）的注解资料</li>
<li>-d home_dir 设定使用者的家目录为 home_dir ，预设值为预设的 home 后面加上使用者帐号 loginid</li>
<li>-e expire_date 设定此帐号的使用期限（格式为 YYYY-MM-DD），预设值为永久有效</li>
<li>-f inactive_time 范例：</li>
</ul>
<h4 id="实例-16" tabindex="-1"><a class="header-anchor" href="#实例-16" aria-hidden="true">#</a> 实例</h4>
<p>添加一个一般用户</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># adduser kk //添加用户kk</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为添加的用户指定相应的用户组</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># adduser -g root kk //添加用户kk，并指定用户所在的组为root用户组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个系统用户</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># adduser -r kk //创建一个系统用户kk</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为新添加的用户指定/home目录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># adduser -d /home/myf kk //新添加用户kk，其home目录为/home/myf</span>
//当用户名kk登录主机时，系统进入的默认目录为/home/myf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="useradd" tabindex="-1"><a class="header-anchor" href="#useradd" aria-hidden="true">#</a> useradd</h3>
<p>Linux useradd 命令用于建立用户帐号。</p>
<p>useradd 可用来建立用户帐号。帐号建好之后，再用 passwd 设定帐号的密码。而可用 userdel 删除帐号。使用 useradd 指令所建立的帐号，实际上是保存在 /etc/passwd 文本文件中。</p>
<h4 id="语法-16" tabindex="-1"><a class="header-anchor" href="#语法-16" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">useradd</span> <span class="token punctuation">[</span>-mMnr<span class="token punctuation">]</span><span class="token punctuation">[</span>-c <span class="token operator">&lt;</span>备注<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-d <span class="token operator">&lt;</span>登入目录<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-e <span class="token operator">&lt;</span>有效期限<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-f <span class="token operator">&lt;</span>缓冲天数<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-g <span class="token operator">&lt;</span>群组<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-G <span class="token operator">&lt;</span>群组<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-s <span class="token operator">&lt;</span>shell<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-u <span class="token operator">&lt;</span>uid<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>用户帐号<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">useradd</span> <span class="token parameter variable">-D</span> <span class="token punctuation">[</span>-b<span class="token punctuation">]</span><span class="token punctuation">[</span>-e <span class="token operator">&lt;</span>有效期限<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-f <span class="token operator">&lt;</span>缓冲天数<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-g <span class="token operator">&lt;</span>群组<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-G <span class="token operator">&lt;</span>群组<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-s <span class="token operator">&lt;</span>shell<span class="token operator">></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p>
<ul>
<li>-c&lt;备注&gt; 　加上备注文字。备注文字会保存在passwd的备注栏位中。</li>
<li>-d&lt;登入目录&gt; 　指定用户登入时的起始目录。</li>
<li>-D 　变更预设值．</li>
<li>-e&lt;有效期限&gt; 　指定帐号的有效期限。</li>
<li>-f&lt;缓冲天数&gt; 　指定在密码过期后多少天即关闭该帐号。</li>
<li>-g&lt;群组&gt; 　指定用户所属的群组。</li>
<li>-G&lt;群组&gt; 　指定用户所属的附加群组。</li>
<li>-m 　制定用户的登入目录。</li>
<li>-M 　不要自动建立用户的登入目录。</li>
<li>-n 　取消建立以用户名称为名的群组．</li>
<li>-r 　建立系统帐号。</li>
</ul>
<h4 id="实例-17" tabindex="-1"><a class="header-anchor" href="#实例-17" aria-hidden="true">#</a> 实例</h4>
<p>添加一般用户</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># useradd tt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为添加的用户指定相应的用户组</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># useradd -g root tt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个系统用户</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># useradd -r tt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为新添加的用户指定home目录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># useradd -d /home/myd tt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>建立用户且制定ID</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># useradd caojh -u 544</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>#添加一个不能登录的用户
useradd -d /usr/local/apache -g apache -s /bin/false apache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>要拒绝系统用户登录，可以将其 shell 设置为 /usr/sbin/nologin 或者 /bin/false。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>usermod -s | --shell /usr/sbin/nologin username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>usermod -s | -shell /bin/false username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>说明及比较：</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/bin/false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>/bin/false 什么也不做只是返回一个错误状态，然后立即退出。将用户的 shell 设置为 /bin/false，用户会无法登录，并且不会有任何提示。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/usr/sbin/nologin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>nologin 会礼貌的向用户显示一条信息，并拒绝用户登录：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>This account is currently not available.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有一些软件，比如一些 ftp 服务器软件，对于本地非虚拟账户，只有用户有有效的 shell 才能使用 ftp 服务。这时候就可以使用 nologin 使用户即不能登录系统，还能使用一些系统服务，比如 ftp 服务。/bin/false 则不行，这是二者的重要区别之一。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/etc/nologin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果存在 /etc/nologin 文件，则系统只允许 root 用户登录，其他用户全部被拒绝登录，并向他们显示 /etc/nologin 文件的内容。</p>
<hr>
<h3 id="sudo" tabindex="-1"><a class="header-anchor" href="#sudo" aria-hidden="true">#</a> sudo</h3>
<p>Linux sudo命令以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行。</p>
<p>使用权限：在 /etc/sudoers 中有出现的使用者。</p>
<h4 id="语法-17" tabindex="-1"><a class="header-anchor" href="#语法-17" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token parameter variable">-V</span>
<span class="token function">sudo</span> <span class="token parameter variable">-h</span>
<span class="token function">sudo</span> <span class="token parameter variable">-l</span>
<span class="token function">sudo</span> <span class="token parameter variable">-v</span>
<span class="token function">sudo</span> <span class="token parameter variable">-k</span>
<span class="token function">sudo</span> <span class="token parameter variable">-s</span>
<span class="token function">sudo</span> <span class="token parameter variable">-H</span>
<span class="token function">sudo</span> <span class="token punctuation">[</span> <span class="token parameter variable">-b</span> <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-p</span> prompt <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-u</span> username/<span class="token comment">#uid] -s</span>
<span class="token function">sudo</span> <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p>
<ul>
<li>-V 显示版本编号</li>
<li>-h 会显示版本编号及指令的使用方式说明</li>
<li>-l 显示出自己（执行 sudo 的使用者）的权限</li>
<li>-v 因为 sudo 在第一次执行时或是在 N 分钟内没有执行（N 预设为五）会问密码，这个参数是重新做一次确认，如果超过 N 分钟，也会问密码</li>
<li>-k 将会强迫使用者在下一次执行 sudo 时问密码（不论有没有超过 N 分钟）</li>
<li>-b 将要执行的指令放在背景执行</li>
<li>-p prompt 可以更改问密码的提示语，其中 %u 会代换为使用者的帐号名称， %h 会显示主机名称</li>
<li>-u username/#uid 不加此参数，代表要以 root 的身份执行指令，而加了此参数，可以以 username 的身份执行指令（#uid 为该 username 的使用者号码）</li>
<li>-s 执行环境变数中的 SHELL 所指定的 shell ，或是 /etc/passwd 里所指定的 shell</li>
<li>-H 将环境变数中的 HOME （家目录）指定为要变更身份的使用者家目录（如不加 -u 参数就是系统管理者 root ）</li>
<li>command 要以系统管理者身份（或以 -u 更改为其他人）执行的指令</li>
</ul>
<h4 id="实例-18" tabindex="-1"><a class="header-anchor" href="#实例-18" aria-hidden="true">#</a> 实例</h4>
<p>sudo命令使用</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">ls</span>
<span class="token punctuation">[</span>sudo<span class="token punctuation">]</span> password <span class="token keyword">for</span> hnlinux: 
hnlinux is not <span class="token keyword">in</span> the sudoers file. This incident will be reported.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定用户执行命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># sudo -u userb ls -l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示sudo设置</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token parameter variable">-L</span> //显示sudo设置
Available options <span class="token keyword">in</span> a sudoers `<span class="token variable"><span class="token variable">`</span>Defaults<span class="token string">''</span> line:

syslog: Syslog facility <span class="token keyword">if</span> syslog is being used <span class="token keyword">for</span> logging
syslog_goodpri: Syslog priority to use when user authenticates successfully
syslog_badpri: Syslog priority to use when user authenticates unsuccessfully
long_otp_prompt: Put OTP prompt on its own line
ignore_dot: Ignore <span class="token string">'.'</span> <span class="token keyword">in</span> <span class="token environment constant">$PATH</span>
mail_always: Always send mail when <span class="token function">sudo</span> is run
mail_badpass: Send mail <span class="token keyword">if</span> user authentication fails
mail_no_user: Send mail <span class="token keyword">if</span> the user is not <span class="token keyword">in</span> sudoers
mail_no_host: Send mail <span class="token keyword">if</span> the user is not <span class="token keyword">in</span> sudoers <span class="token keyword">for</span> this <span class="token function">host</span>
mail_no_perms: Send mail <span class="token keyword">if</span> the user is not allowed to run a <span class="token builtin class-name">command</span>
tty_tickets: Use a separate timestamp <span class="token keyword">for</span> each user/tty combo
lecture: Lecture user the first <span class="token function">time</span> they run <span class="token function">sudo</span>
lecture_file: File containing the <span class="token function">sudo</span> lecture
authenticate: Require <span class="token function">users</span> to authenticate by default
root_sudo: Root may run <span class="token function">sudo</span>
log_host: Log the <span class="token function">hostname</span> <span class="token keyword">in</span> the <span class="token punctuation">(</span>non-syslog<span class="token punctuation">)</span> log <span class="token function">file</span>
log_year: Log the year <span class="token keyword">in</span> the <span class="token punctuation">(</span>non-syslog<span class="token punctuation">)</span> log <span class="token function">file</span>
shell_noargs: If <span class="token function">sudo</span> is invoked with no arguments, start a shell
set_home: Set <span class="token environment constant">$HOME</span> to the target user when starting a shell with <span class="token parameter variable">-s</span>
always_set_home: Always <span class="token builtin class-name">set</span> <span class="token environment constant">$HOME</span> to the target user<span class="token string">'s home directory
path_info: Allow some information gathering to give useful error messages
fqdn: Require fully-qualified hostnames in the sudoers file
insults: Insult the user when they enter an incorrect password
requiretty: Only allow the user to run sudo if they have a tty
env_editor: Visudo will honor the EDITOR environment variable
rootpw: Prompt for root'</span>s password, not the <span class="token function">users</span><span class="token string">'s
runaspw: Prompt for the runas_default user'</span>s password, not the <span class="token function">users</span><span class="token string">'s
targetpw: Prompt for the target user'</span>s password, not the <span class="token function">users</span><span class="token string">'s
use_loginclass: Apply defaults in the target user'</span>s login class <span class="token keyword">if</span> there is one
set_logname: Set the <span class="token environment constant">LOGNAME</span> and <span class="token environment constant">USER</span> environment variables
stay_setuid: Only <span class="token builtin class-name">set</span> the effective uid to the target user, not the real uid
preserve_groups: Don<span class="token string">'t initialize the group vector to that of the target user
loglinelen: Length at which to wrap log file lines (0 for no wrap)
timestamp_timeout: Authentication timestamp timeout
passwd_timeout: Password prompt timeout
passwd_tries: Number of tries to enter a password
umask: Umask to use or 0777 to use user'</span>s
logfile: Path to log <span class="token function">file</span>
mailerpath: Path to mail program
mailerflags: Flags <span class="token keyword">for</span> mail program
mailto: Address to send mail to
mailfrom: Address to send mail from
mailsub: Subject line <span class="token keyword">for</span> mail messages
badpass_message: Incorrect password message
timestampdir: Path to authentication timestamp <span class="token function">dir</span>
timestampowner: Owner of the authentication timestamp <span class="token function">dir</span>
exempt_group: Users <span class="token keyword">in</span> this group are exempt from password and <span class="token environment constant">PATH</span> requirements
passprompt: Default password prompt
passprompt_override: If set, passprompt will override system prompt <span class="token keyword">in</span> all cases.
runas_default: Default user to run commands as
secure_path: Value to override user<span class="token string">'s $PATH with
editor: Path to the editor for use by visudo
listpw: When to require a password for '</span>list<span class="token string">' pseudocommand
verifypw: When to require a password for '</span>verify<span class="token string">' pseudocommand
noexec: Preload the dummy exec functions contained in '</span>noexec_file'
noexec_file: File containing dummy <span class="token builtin class-name">exec</span> functions
ignore_local_sudoers: If LDAP directory is up, <span class="token keyword">do</span> we ignore <span class="token builtin class-name">local</span> sudoers <span class="token function">file</span>
closefrom: File descriptors <span class="token operator">>=</span> %d will be closed before executing a <span class="token builtin class-name">command</span>
closefrom_override: If set, <span class="token function">users</span> may override the value of <span class="token variable">`</span></span>closefrom<span class="token string">' with the -C option
setenv: Allow users to set arbitrary environment variables
env_reset: Reset the environment to a default set of variables
env_check: Environment variables to check for sanity
env_delete: Environment variables to remove
env_keep: Environment variables to preserve
role: SELinux role to use in the new security context
type: SELinux type to use in the new security context
askpass: Path to the askpass helper program
env_file: Path to the sudo-specific environment file
sudoers_locale: Locale to use while parsing sudoers
visiblepw: Allow sudo to prompt for a password even if it would be visisble
pwfeedback: Provide visual feedback at the password prompt when there is user input
fast_glob: Use faster globbing that is less accurate but does not access the filesystem
umask_override: The umask specified in sudoers will override the user'</span>s, even <span class="token keyword">if</span> it is <span class="token function">more</span> permissive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以root权限执行上一条命令</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token operator">!</span><span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以特定用户身份进行编辑文本</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token parameter variable">-u</span> uggc <span class="token function">vi</span> ~www/index.html
//以 uggc 用户身份编辑  home 目录下www目录中的 index.html 文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>列出目前的权限</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>列出 sudo 的版本资讯</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h3 id="kill" tabindex="-1"><a class="header-anchor" href="#kill" aria-hidden="true">#</a> kill</h3>
<p>Linux kill 命令用于删除执行中的程序或工作。</p>
<p>kill 可将指定的信息送至程序。预设的信息为 SIGTERM(15)，可将指定程序终止。若仍无法终止该程序，可使用 SIGKILL(9) 信息尝试强制删除程序。程序或工作的编号可利用 ps 指令或 jobs 指令查看。</p>
<h4 id="语法-18" tabindex="-1"><a class="header-anchor" href="#语法-18" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">kill</span> <span class="token punctuation">[</span>-s <span class="token operator">&lt;</span>信息名称或编号<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>程序<span class="token punctuation">]</span>　或　<span class="token function">kill</span> <span class="token punctuation">[</span>-l <span class="token operator">&lt;</span>信息编号<span class="token operator">></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数说明</strong>：</p>
<ul>
<li>-l &lt;信息编号&gt; 　若不加&lt;信息编号&gt;选项，则 -l 参数会列出全部的信息名称。</li>
<li>-s &lt;信息名称或编号&gt; 　指定要送出的信息。</li>
<li>[程序] 　[程序]可以是程序的PID或是PGID，也可以是工作编号。</li>
</ul>
<p>使用 kill -l 命令列出所有可用信号。</p>
<p>最常用的信号是：</p>
<ul>
<li>1 (HUP)：重新加载进程。</li>
<li>9 (KILL)：杀死一个进程。</li>
<li>15 (TERM)：正常停止一个进程。</li>
</ul>
<h4 id="实例-19" tabindex="-1"><a class="header-anchor" href="#实例-19" aria-hidden="true">#</a> 实例</h4>
<p>杀死进程</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># kill 12345</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>强制杀死进程</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># kill -KILL 123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>发送SIGHUP信号，可以使用一下信号</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># kill -HUP pid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>彻底杀死进程S</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># kill -9 123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示信号</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># kill -l</span>
<span class="token number">1</span><span class="token punctuation">)</span> SIGHUP     <span class="token number">2</span><span class="token punctuation">)</span> SIGINT     <span class="token number">3</span><span class="token punctuation">)</span> SIGQUIT     <span class="token number">4</span><span class="token punctuation">)</span> SIGILL     <span class="token number">5</span><span class="token punctuation">)</span> SIGTRAP
<span class="token number">6</span><span class="token punctuation">)</span> SIGABRT     <span class="token number">7</span><span class="token punctuation">)</span> SIGBUS     <span class="token number">8</span><span class="token punctuation">)</span> SIGFPE     <span class="token number">9</span><span class="token punctuation">)</span> SIGKILL    <span class="token number">10</span><span class="token punctuation">)</span> SIGUSR1
<span class="token number">11</span><span class="token punctuation">)</span> SIGSEGV    <span class="token number">12</span><span class="token punctuation">)</span> SIGUSR2    <span class="token number">13</span><span class="token punctuation">)</span> SIGPIPE    <span class="token number">14</span><span class="token punctuation">)</span> SIGALRM    <span class="token number">15</span><span class="token punctuation">)</span> SIGTERM
<span class="token number">16</span><span class="token punctuation">)</span> SIGSTKFLT    <span class="token number">17</span><span class="token punctuation">)</span> SIGCHLD    <span class="token number">18</span><span class="token punctuation">)</span> SIGCONT    <span class="token number">19</span><span class="token punctuation">)</span> SIGSTOP    <span class="token number">20</span><span class="token punctuation">)</span> SIGTSTP
<span class="token number">21</span><span class="token punctuation">)</span> SIGTTIN    <span class="token number">22</span><span class="token punctuation">)</span> SIGTTOU    <span class="token number">23</span><span class="token punctuation">)</span> SIGURG    <span class="token number">24</span><span class="token punctuation">)</span> SIGXCPU    <span class="token number">25</span><span class="token punctuation">)</span> SIGXFSZ
<span class="token number">26</span><span class="token punctuation">)</span> SIGVTALRM    <span class="token number">27</span><span class="token punctuation">)</span> SIGPROF    <span class="token number">28</span><span class="token punctuation">)</span> SIGWINCH    <span class="token number">29</span><span class="token punctuation">)</span> SIGIO    <span class="token number">30</span><span class="token punctuation">)</span> SIGPWR
<span class="token number">31</span><span class="token punctuation">)</span> SIGSYS    <span class="token number">34</span><span class="token punctuation">)</span> SIGRTMIN    <span class="token number">35</span><span class="token punctuation">)</span> SIGRTMIN+1    <span class="token number">36</span><span class="token punctuation">)</span> SIGRTMIN+2    <span class="token number">37</span><span class="token punctuation">)</span> SIGRTMIN+3
<span class="token number">38</span><span class="token punctuation">)</span> SIGRTMIN+4    <span class="token number">39</span><span class="token punctuation">)</span> SIGRTMIN+5    <span class="token number">40</span><span class="token punctuation">)</span> SIGRTMIN+6    <span class="token number">41</span><span class="token punctuation">)</span> SIGRTMIN+7    <span class="token number">42</span><span class="token punctuation">)</span> SIGRTMIN+8
<span class="token number">43</span><span class="token punctuation">)</span> SIGRTMIN+9    <span class="token number">44</span><span class="token punctuation">)</span> SIGRTMIN+10    <span class="token number">45</span><span class="token punctuation">)</span> SIGRTMIN+11    <span class="token number">46</span><span class="token punctuation">)</span> SIGRTMIN+12    <span class="token number">47</span><span class="token punctuation">)</span> SIGRTMIN+13
<span class="token number">48</span><span class="token punctuation">)</span> SIGRTMIN+14    <span class="token number">49</span><span class="token punctuation">)</span> SIGRTMIN+15    <span class="token number">50</span><span class="token punctuation">)</span> SIGRTMAX-14    <span class="token number">51</span><span class="token punctuation">)</span> SIGRTMAX-13    <span class="token number">52</span><span class="token punctuation">)</span> SIGRTMAX-12
<span class="token number">53</span><span class="token punctuation">)</span> SIGRTMAX-11    <span class="token number">54</span><span class="token punctuation">)</span> SIGRTMAX-10    <span class="token number">55</span><span class="token punctuation">)</span> SIGRTMAX-9    <span class="token number">56</span><span class="token punctuation">)</span> SIGRTMAX-8    <span class="token number">57</span><span class="token punctuation">)</span> SIGRTMAX-7
<span class="token number">58</span><span class="token punctuation">)</span> SIGRTMAX-6    <span class="token number">59</span><span class="token punctuation">)</span> SIGRTMAX-5    <span class="token number">60</span><span class="token punctuation">)</span> SIGRTMAX-4    <span class="token number">61</span><span class="token punctuation">)</span> SIGRTMAX-3    <span class="token number">62</span><span class="token punctuation">)</span> SIGRTMAX-2
<span class="token number">63</span><span class="token punctuation">)</span> SIGRTMAX-1    <span class="token number">64</span><span class="token punctuation">)</span> SIGRTMAX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>杀死指定用户所有进程</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">#kill -9 $(ps -ef | grep hnlinux) //方法一 过滤出hnlinux用户进程 </span>
<span class="token comment">#kill -u hnlinux //方法二</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="备份压缩" tabindex="-1"><a class="header-anchor" href="#备份压缩" aria-hidden="true">#</a> 备份压缩</h2>
<h3 id="gzexe" tabindex="-1"><a class="header-anchor" href="#gzexe" aria-hidden="true">#</a> gzexe</h3>
<p>Linux gzexe命令用于压缩执行文件。</p>
<p>gzexe是用来压缩执行文件的程序。当您去执行被压缩过的执行文件时，该文件会自动解压然后继续执行，和使用一般的执行文件相同。</p>
<h4 id="语法-19" tabindex="-1"><a class="header-anchor" href="#语法-19" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>gzexe <span class="token punctuation">[</span>-d<span class="token punctuation">]</span><span class="token punctuation">[</span>执行文件<span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token comment">#解开压缩文件。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数</strong>：</p>
<ul>
<li>-d 　解开压缩文件。</li>
</ul>
<h4 id="实例-20" tabindex="-1"><a class="header-anchor" href="#实例-20" aria-hidden="true">#</a> 实例</h4>
<p>压缩可执行文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># gzexe abc </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="gzip" tabindex="-1"><a class="header-anchor" href="#gzip" aria-hidden="true">#</a> gzip</h3>
<p>Linux gzip命令用于压缩文件。</p>
<p>gzip是个使用广泛的压缩程序，文件经它压缩过后，其名称后面会多出&quot;.gz&quot;的扩展名。</p>
<h4 id="语法-20" tabindex="-1"><a class="header-anchor" href="#语法-20" aria-hidden="true">#</a> 语法</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>gzip [-acdfhlLnNqrtvV][-S &amp;lt;压缩字尾字符串&amp;gt;][-&amp;lt;压缩效率&amp;gt;][--best/fast][文件...] 或 gzip [-acdfhlLnNqrtvV][-S &amp;lt;压缩字尾字符串&amp;gt;][-&amp;lt;压缩效率&amp;gt;][--best/fast][目录]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数</strong>：</p>
<ul>
<li>-a或--ascii 　使用ASCII文字模式。</li>
<li>-c或--stdout或--to-stdout 　把压缩后的文件输出到标准输出设备，不去更动原始文件。</li>
<li>-d或--decompress或----uncompress 　解开压缩文件。</li>
<li>-f或--force 　强行压缩文件。不理会文件名称或硬连接是否存在以及该文件是否为符号连接。</li>
<li>-h或--help 　在线帮助。</li>
<li>-l或--list 　列出压缩文件的相关信息。</li>
<li>-L或--license 　显示版本与版权信息。</li>
<li>-n或--no-name 　压缩文件时，不保存原来的文件名称及时间戳记。</li>
<li>-N或--name 　压缩文件时，保存原来的文件名称及时间戳记。</li>
<li>-q或--quiet 　不显示警告信息。</li>
<li>-r或--recursive 　递归处理，将指定目录下的所有文件及子目录一并处理。</li>
<li>-S&lt;压缩字尾字符串&gt;或----suffix&lt;压缩字尾字符串&gt; 　更改压缩字尾字符串。</li>
<li>-t或--test 　测试压缩文件是否正确无误。</li>
<li>-v或--verbose 　显示指令执行过程。</li>
<li>-V或--version 　显示版本信息。</li>
<li>-&lt;压缩效率&gt; 　压缩效率是一个介于1－9的数值，预设值为&quot;6&quot;，指定愈大的数值，压缩效率就会愈高。</li>
<li>--best 　此参数的效果和指定&quot;-9&quot;参数相同。</li>
<li>--fast 　此参数的效果和指定&quot;-1&quot;参数相同。</li>
</ul>
<h4 id="实例-21" tabindex="-1"><a class="header-anchor" href="#实例-21" aria-hidden="true">#</a> 实例</h4>
<p>压缩文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@runoob.com a<span class="token punctuation">]</span><span class="token comment"># ls //显示当前目录文件</span>
a.c b.h d.cpp
<span class="token punctuation">[</span>root@runoob.com a<span class="token punctuation">]</span><span class="token comment"># gzip * //压缩目录下的所有文件</span>
<span class="token punctuation">[</span>root@runoob.com a<span class="token punctuation">]</span><span class="token comment"># ls //显示当前目录文件</span>
a.c.gz    b.h.gz    d.cpp.gz
<span class="token punctuation">[</span>root@runoob.com a<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接范例1， 列出详细的信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@runoob.com a<span class="token punctuation">]</span><span class="token comment"># gzip -dv * //解压文件，并列出详细信息</span>
a.c.gz:     <span class="token number">0.0</span>% -- replaced with a.c
b.h.gz:     <span class="token number">0.0</span>% -- replaced with b.h
d.cpp.gz:     <span class="token number">0.0</span>% -- replaced with d.cpp
<span class="token punctuation">[</span>root@runoob.com a<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接范例1，显示压缩文件的信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@runoob.com a<span class="token punctuation">]</span><span class="token comment"># gzip -l *</span>
     compressed    uncompressed ratio uncompressed_name
         <span class="token number">24</span>          <span class="token number">0</span>  <span class="token number">0.0</span>% a.c
         <span class="token number">24</span>          <span class="token number">0</span>  <span class="token number">0.0</span>% b.h
         <span class="token number">26</span>          <span class="token number">0</span>  <span class="token number">0.0</span>% d.cpp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tar" tabindex="-1"><a class="header-anchor" href="#tar" aria-hidden="true">#</a> tar</h3>
<p>Linux tar（英文全拼：tape archive ）命令用于备份文件。</p>
<p>tar 是用来建立，还原备份文件的工具程序，它可以加入，解开备份文件内的文件。</p>
<h4 id="语法-21" tabindex="-1"><a class="header-anchor" href="#语法-21" aria-hidden="true">#</a> 语法</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">tar</span> <span class="token punctuation">[</span>-ABcdgGhiklmMoOpPrRsStuUvwWxzZ<span class="token punctuation">]</span><span class="token punctuation">[</span>-b <span class="token operator">&lt;</span>区块数目<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-C <span class="token operator">&lt;</span>目的目录<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-f <span class="token operator">&lt;</span>备份文件<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-F <span class="token operator">&lt;</span>Script文件<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-K <span class="token operator">&lt;</span>文件<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-L <span class="token operator">&lt;</span>媒体容量<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-N <span class="token operator">&lt;</span>日期时间<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-T <span class="token operator">&lt;</span>范本文件<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-V <span class="token operator">&lt;</span>卷册名称<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-X <span class="token operator">&lt;</span>范本文件<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>-<span class="token operator">&lt;</span>设备编号<span class="token operator">></span><span class="token operator">&lt;</span>存储密度<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>--after-date<span class="token operator">=</span><span class="token operator">&lt;</span>日期时间<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>--atime-preserve<span class="token punctuation">]</span><span class="token punctuation">[</span>--backuup<span class="token operator">=</span><span class="token operator">&lt;</span>备份方式<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>--checkpoint<span class="token punctuation">]</span><span class="token punctuation">[</span>--concatenate<span class="token punctuation">]</span><span class="token punctuation">[</span>--confirmation<span class="token punctuation">]</span><span class="token punctuation">[</span>--delete<span class="token punctuation">]</span><span class="token punctuation">[</span>--exclude<span class="token operator">=</span><span class="token operator">&lt;</span>范本样式<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>--force-local<span class="token punctuation">]</span><span class="token punctuation">[</span>--group<span class="token operator">=</span><span class="token operator">&lt;</span>群组名称<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>--help<span class="token punctuation">]</span><span class="token punctuation">[</span>--ignore-failed-read<span class="token punctuation">]</span><span class="token punctuation">[</span>--new-volume-script<span class="token operator">=</span><span class="token operator">&lt;</span>Script文件<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>--newer-mtime<span class="token punctuation">]</span><span class="token punctuation">[</span>--no-recursion<span class="token punctuation">]</span><span class="token punctuation">[</span>--null<span class="token punctuation">]</span><span class="token punctuation">[</span>--numeric-owner<span class="token punctuation">]</span><span class="token punctuation">[</span>--owner<span class="token operator">=</span><span class="token operator">&lt;</span>用户名称<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>--posix<span class="token punctuation">]</span><span class="token punctuation">[</span>--erve<span class="token punctuation">]</span><span class="token punctuation">[</span>--preserve-order<span class="token punctuation">]</span><span class="token punctuation">[</span>--preserve-permissions<span class="token punctuation">]</span><span class="token punctuation">[</span>--record-size<span class="token operator">=</span><span class="token operator">&lt;</span>区块数目<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>--recursive-unlink<span class="token punctuation">]</span><span class="token punctuation">[</span>--remove-files<span class="token punctuation">]</span><span class="token punctuation">[</span>--rsh-command<span class="token operator">=</span><span class="token operator">&lt;</span>执行指令<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>--same-owner<span class="token punctuation">]</span><span class="token punctuation">[</span>--suffix<span class="token operator">=</span><span class="token operator">&lt;</span>备份字尾字符串<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>--totals<span class="token punctuation">]</span><span class="token punctuation">[</span>--use-compress-program<span class="token operator">=</span><span class="token operator">&lt;</span>执行指令<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>--version<span class="token punctuation">]</span><span class="token punctuation">[</span>--volno-file<span class="token operator">=</span><span class="token operator">&lt;</span>编号文件<span class="token operator">></span><span class="token punctuation">]</span><span class="token punctuation">[</span>文件或目录<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数</strong>：</p>
<ul>
<li>-A或--catenate 新增文件到已存在的备份文件。</li>
<li>-b&lt;区块数目&gt;或--blocking-factor=&lt;区块数目&gt; 设置每笔记录的区块数目，每个区块大小为12Bytes。</li>
<li>-B或--read-full-records 读取数据时重设区块大小。</li>
<li>-c或--create 建立新的备份文件。</li>
<li>-C&lt;目的目录&gt;或--directory=&lt;目的目录&gt; 切换到指定的目录。</li>
<li>-d或--diff或--compare 对比备份文件内和文件系统上的文件的差异。</li>
<li>-f&lt;备份文件&gt;或--file=&lt;备份文件&gt; 指定备份文件。</li>
<li>-F&lt;Script文件&gt;或--info-script=&lt;Script文件&gt; 每次更换磁带时，就执行指定的Script文件。</li>
<li>-g或--listed-incremental 处理GNU格式的大量备份。</li>
<li>-G或--incremental 处理旧的GNU格式的大量备份。</li>
<li>-h或--dereference 不建立符号连接，直接复制该连接所指向的原始文件。</li>
<li>-i或--ignore-zeros 忽略备份文件中的0 Byte区块，也就是EOF。</li>
<li>-k或--keep-old-files 解开备份文件时，不覆盖已有的文件。</li>
<li>-K&lt;文件&gt;或--starting-file=&lt;文件&gt; 从指定的文件开始还原。</li>
<li>-l或--one-file-system 复制的文件或目录存放的文件系统，必须与tar指令执行时所处的文件系统相同，否则不予复制。</li>
<li>-L&lt;媒体容量&gt;或-tape-length=&lt;媒体容量&gt; 设置存放每体的容量，单位以1024 Bytes计算。</li>
<li>-m或--modification-time 还原文件时，不变更文件的更改时间。</li>
<li>-M或--multi-volume 在建立，还原备份文件或列出其中的内容时，采用多卷册模式。</li>
<li>-N&lt;日期格式&gt;或--newer=&lt;日期时间&gt; 只将较指定日期更新的文件保存到备份文件里。</li>
<li>-o或--old-archive或--portability 将资料写入备份文件时使用V7格式。</li>
<li>-O或--stdout 把从备份文件里还原的文件输出到标准输出设备。</li>
<li>-p或--same-permissions 用原来的文件权限还原文件。</li>
<li>-P或--absolute-names 文件名使用绝对名称，不移除文件名称前的&quot;/&quot;号。</li>
<li>-r或--append 新增文件到已存在的备份文件的结尾部分。</li>
<li>-R或--block-number 列出每个信息在备份文件中的区块编号。</li>
<li>-s或--same-order 还原文件的顺序和备份文件内的存放顺序相同。</li>
<li>-S或--sparse 倘若一个文件内含大量的连续0字节，则将此文件存成稀疏文件。</li>
<li>-t或--list 列出备份文件的内容。</li>
<li>-T&lt;范本文件&gt;或--files-from=&lt;范本文件&gt; 指定范本文件，其内含有一个或多个范本样式，让tar解开或建立符合设置条件的文件。</li>
<li>-u或--update 仅置换较备份文件内的文件更新的文件。</li>
<li>-U或--unlink-first 解开压缩文件还原文件之前，先解除文件的连接。</li>
<li>-v或--verbose 显示指令执行过程。</li>
<li>-V&lt;卷册名称&gt;或--label=&lt;卷册名称&gt; 建立使用指定的卷册名称的备份文件。</li>
<li>-w或--interactive 遭遇问题时先询问用户。</li>
<li>-W或--verify 写入备份文件后，确认文件正确无误。</li>
<li>-x或--extract或--get 从备份文件中还原文件。</li>
<li>-X&lt;范本文件&gt;或--exclude-from=&lt;范本文件&gt; 指定范本文件，其内含有一个或多个范本样式，让ar排除符合设置条件的文件。</li>
<li>-z或--gzip或--ungzip 通过gzip指令处理备份文件。</li>
<li>-Z或--compress或--uncompress 通过compress指令处理备份文件。</li>
<li>-&lt;设备编号&gt;&lt;存储密度&gt; 设置备份用的外围设备编号及存放数据的密度。</li>
<li>--after-date=&lt;日期时间&gt; 此参数的效果和指定&quot;-N&quot;参数相同。</li>
<li>--atime-preserve 不变更文件的存取时间。</li>
<li>--backup=&lt;备份方式&gt;或--backup 移除文件前先进行备份。</li>
<li>--checkpoint 读取备份文件时列出目录名称。</li>
<li>--concatenate 此参数的效果和指定&quot;-A&quot;参数相同。</li>
<li>--confirmation 此参数的效果和指定&quot;-w&quot;参数相同。</li>
<li>--delete 从备份文件中删除指定的文件。</li>
<li>--exclude=&lt;范本样式&gt; 排除符合范本样式的文件。</li>
<li>--group=&lt;群组名称&gt; 把加入设备文件中的文件的所属群组设成指定的群组。</li>
<li>--help 在线帮助。</li>
<li>--ignore-failed-read 忽略数据读取错误，不中断程序的执行。</li>
<li>--new-volume-script=&lt;Script文件&gt; 此参数的效果和指定&quot;-F&quot;参数相同。</li>
<li>--newer-mtime 只保存更改过的文件。</li>
<li>--no-recursion 不做递归处理，也就是指定目录下的所有文件及子目录不予处理。</li>
<li>--null 从null设备读取文件名称。</li>
<li>--numeric-owner 以用户识别码及群组识别码取代用户名称和群组名称。</li>
<li>--owner=&lt;用户名称&gt; 把加入备份文件中的文件的拥有者设成指定的用户。</li>
<li>--posix 将数据写入备份文件时使用POSIX格式。</li>
<li>--preserve 此参数的效果和指定&quot;-ps&quot;参数相同。</li>
<li>--preserve-order 此参数的效果和指定&quot;-A&quot;参数相同。</li>
<li>--preserve-permissions 此参数的效果和指定&quot;-p&quot;参数相同。</li>
<li>--record-size=&lt;区块数目&gt; 此参数的效果和指定&quot;-b&quot;参数相同。</li>
<li>--recursive-unlink 解开压缩文件还原目录之前，先解除整个目录下所有文件的连接。</li>
<li>--remove-files 文件加入备份文件后，就将其删除。</li>
<li>--rsh-command=&lt;执行指令&gt; 设置要在远端主机上执行的指令，以取代rsh指令。</li>
<li>--same-owner 尝试以相同的文件拥有者还原文件。</li>
<li>--suffix=&lt;备份字尾字符串&gt; 移除文件前先行备份。</li>
<li>--totals 备份文件建立后，列出文件大小。</li>
<li>--use-compress-program=&lt;执行指令&gt; 通过指定的指令处理备份文件。</li>
<li>--version 显示版本信息。</li>
<li>--volno-file=&lt;编号文件&gt; 使用指定文件内的编号取代预设的卷册编号。</li>
</ul>
<h4 id="实例-22" tabindex="-1"><a class="header-anchor" href="#实例-22" aria-hidden="true">#</a> 实例</h4>
<p>压缩文件 非打包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># touch a.c       </span>
<span class="token comment"># tar -czvf test.tar.gz a.c   //压缩 a.c文件为test.tar.gz</span>
a.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>列出压缩文件内容</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># tar -tzvf test.tar.gz </span>
-rw-r--r-- root/root     <span class="token number">0</span> <span class="token number">2010</span>-05-24 <span class="token number">16</span>:51:59 a.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解压文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># tar -xzvf test.tar.gz </span>
a.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


