<template><div><p>此处仅使用FTK Imager制作</p>
<h2 id="磁盘镜像" tabindex="-1"><a class="header-anchor" href="#磁盘镜像" aria-hidden="true">#</a> 磁盘镜像</h2>
<ol>
<li>打开FTK Imager选择文件</li>
<li>点击创建磁盘镜像
<img src="@source/forensics-base/img/QQ截图20220928193501.png" alt="image" loading="lazy"></li>
<li>选择自己需要的源证据类型
<img src="@source/forensics-base/img/QQ截图20220928195359.png" alt="image" loading="lazy"></li>
<li>在镜像目标这里选择需要的制作镜像类型
<img src="@source/forensics-base/img/QQ截图20220928193826.png" alt="image" loading="lazy">
<img src="@source/forensics-base/img/QQ截图20220928193927.png" alt="image" loading="lazy">
关于各镜像的区别请参考 <RouterLink to="/forensics-base/file.html">证据文件格式</RouterLink></li>
<li>证据项信息根据实际填写</li>
<li>镜像目标选择
<ul>
<li>镜像目标文件夹：制作成功的镜像存放的文件夹，请存放在外置硬盘中，禁止放在嫌疑人计算机中。</li>
<li>镜像文件名：根据个人选择，注意不要包含后缀名。</li>
<li>镜像分片大小：如因镜像太大，可能导致无法打开，因为需要将镜像切片，此处即 每个分片的大小。</li>
<li>压缩：0为镜像原大小，数值越大 压缩程度越高。</li>
<li>Use AD Encryption：请根据实际情况选择
<img src="@source/forensics-base/img/QQ截图20220928194134.png" alt="image" loading="lazy"></li>
</ul>
</li>
<li>点击Finsh即可开始制作</li>
</ol>
<h2 id="内存镜像" tabindex="-1"><a class="header-anchor" href="#内存镜像" aria-hidden="true">#</a> 内存镜像</h2>
<ol>
<li>在FTK Imager中选择文件-内存抓取
<img src="@source/forensics-base/img/QQ截图20220928194814.png" alt="image" loading="lazy"></li>
<li>内存抓取</li>
<li>目标路径：抓取的内存镜像存放位置。</li>
<li>目标文件名：需带上文件后缀名。</li>
<li>包含pagefile：即电脑的<code v-pre>虚拟内存</code>，请参考：<a href="https://baike.baidu.com/item/pagefile.sys/460068?fr=aladdin" target="_blank" rel="noopener noreferrer">百度百科<ExternalLinkIcon/></a>。</li>
<li>创建AD1文件：请根据实际情况选择。</li>
<li>点击 抓取内存 即可</li>
</ol>
</div></template>


