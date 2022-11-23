<template><div><h2 id="需要使用的软件" tabindex="-1"><a class="header-anchor" href="#需要使用的软件" aria-hidden="true">#</a> 需要使用的软件</h2>
<ul>
<li>
<p>FTK Imager</p>
<blockquote>
<p>下载地址：<a href="https://accessdata.com/product-download/ftk-imager-version-4-7-1" target="_blank" rel="noopener noreferrer">https://accessdata.com/product-download/ftk-imager-version-4-7-1<ExternalLinkIcon/></a></p>
</blockquote>
</li>
<li>
<p>VMware Workstation 16 PRO</p>
<blockquote>
<p>下载地址：<a href="https://pan.baidu.com/s/1RIQEtK1Arone6gRNwAj5LA?pwd=wiki" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1RIQEtK1Arone6gRNwAj5LA?pwd=wiki<ExternalLinkIcon/></a></p>
<p>提取码: wiki</p>
<p>激活码：ZF3R0-FHED2-M80TY-8QYGC-NPKYF</p>
</blockquote>
</li>
</ul>
<h2 id="ftk-imager挂载镜像" tabindex="-1"><a class="header-anchor" href="#ftk-imager挂载镜像" aria-hidden="true">#</a> FTK Imager挂载镜像</h2>
<ol>
<li>
<p>选择 文件 -&gt; 镜像挂载</p>
<p><img src="https://bu.dusays.com/2022/11/20/637994235bb38.png" alt="image-20221120104249194" loading="lazy"></p>
</li>
<li>
<p>选择镜像文件 -&gt; 加载方法选择：“Block Device / Writeable” -&gt; 点击装载 -&gt; 记住驱动号(Drive)</p>
<p><img src="https://bu.dusays.com/2022/11/20/637994d51f3a2.png" alt="image-20221120104547101" loading="lazy"></p>
</li>
<li>
<p>挂载成功后，会在原来的镜像文件处，多出一个<code v-pre>.adcf</code>文件，它是用来<code v-pre>存放镜像虚拟写入的文件</code>。</p>
<p><img src="https://bu.dusays.com/2022/11/20/63799588b8bac.png" alt="image-20221120104846834" loading="lazy"></p>
</li>
</ol>
<h2 id="vmware新建虚拟机" tabindex="-1"><a class="header-anchor" href="#vmware新建虚拟机" aria-hidden="true">#</a> VMware新建虚拟机</h2>
<ol>
<li>
<p>新建虚拟机 -&gt; 自定义（高级） -&gt; 下一步 -&gt; 硬件兼容性默认 -&gt; 下一步</p>
<p><img src="https://bu.dusays.com/2022/11/20/6379961985ba3.png" alt="image-20221120105111667" loading="lazy"></p>
<p><img src="https://bu.dusays.com/2022/11/20/6379965f9b848.png" alt="image-20221120105221590" loading="lazy"></p>
</li>
<li>
<p>选择稍后安装操作系统 -&gt; 下一步</p>
<p><img src="https://bu.dusays.com/2022/11/20/63799686b1745.png" alt="image-20221120105300752" loading="lazy"></p>
</li>
<li>
<p>操作系统及保存位置 按照实际需要</p>
<p><img src="https://bu.dusays.com/2022/11/20/637996cecf8a1.png" alt="image-20221120105412923" loading="lazy"></p>
<p><img src="https://bu.dusays.com/2022/11/20/637996d9033b5.png" alt="image-20221120105423088" loading="lazy"></p>
<blockquote>
<p>如果不知道操作系统，在FTK Imager里可以查看到</p>
<p><img src="https://bu.dusays.com/2022/11/20/63799720790c3.png" alt="image-20221120105534578" loading="lazy"></p>
</blockquote>
</li>
<li>
<p>固件类型选择<code v-pre>UEFI</code></p>
<p><img src="https://bu.dusays.com/2022/11/20/637997b867b11.png" alt="image-20221120105806553" loading="lazy"></p>
</li>
<li>
<p>处理器及内存根据自己电脑配置选择</p>
</li>
<li>
<p>网络类型选择<code v-pre>使用网络地址转换</code></p>
<p><img src="https://bu.dusays.com/2022/11/20/6379982c05bfd.png" alt="image-20221120110002137" loading="lazy"></p>
</li>
<li>
<p>SCSI控制器选择<code v-pre>LSI Logic SAS(S)</code></p>
<p><img src="https://bu.dusays.com/2022/11/20/637998627c31f.png" alt="image-20221120110056596" loading="lazy"></p>
</li>
<li>
<p>磁盘类型选择<code v-pre>SATA</code></p>
<p><img src="https://bu.dusays.com/2022/11/20/63799885d10ca.png" alt="image-20221120110131987" loading="lazy"></p>
</li>
<li>
<p>磁盘选择<code v-pre>物理磁盘</code></p>
<p><img src="https://bu.dusays.com/2022/11/20/637998ad561fb.png" alt="image-20221120110211388" loading="lazy"></p>
</li>
<li>
<p>设备选择<code v-pre>之前FTK Imager挂载后的Drive</code></p>
<p><img src="https://bu.dusays.com/2022/11/20/637998f2811da.png" alt="image-20221120110320634" loading="lazy"></p>
</li>
<li>
<p>之后所有选项默认</p>
</li>
<li>
<p>在启动虚拟机后，如果显示下面的内容，则选择<code v-pre>否</code></p>
<p><img src="https://bu.dusays.com/2022/11/20/6379998a9f876.png" alt="image-20221120110552742" loading="lazy"></p>
</li>
<li>
<p>成功启动</p>
<p><img src="https://bu.dusays.com/2022/11/20/637999af27678.png" alt="image-20221120110627310" loading="lazy"></p>
</li>
</ol>
</div></template>


