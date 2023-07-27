<template><div><h2 id="短信-彩信-取证" tabindex="-1"><a class="header-anchor" href="#短信-彩信-取证" aria-hidden="true">#</a> 短信/彩信 取证</h2>
<p>通常情况下安卓设备的短信/彩信数据都储存在以下文件夹中：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/data/data/com.android.providers.telephony/databases/mmssms.db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Mmssms.db为一个SQLite数据库，使用SQLite查看器都可以读取</p>
<h3 id="oppo备份" tabindex="-1"><a class="header-anchor" href="#oppo备份" aria-hidden="true">#</a> OPPO备份</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/Basic/sms/sms.db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例子：</p>
<figure><img src="https://bu.dusays.com/2023/07/26/64c12e2513c55.png" alt="null" tabindex="0" loading="lazy"><figcaption>null</figcaption></figure>
<h3 id="samsung设备" tabindex="-1"><a class="header-anchor" href="#samsung设备" aria-hidden="true">#</a> SAMSUNG设备</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/data/data/com.sec.android.provider.logsprovider/databases/logs.db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>
<p>- [1] <a href="https://www.magnetforensics.com/blog/android-messaging-forensics-sms-mms-and-beyond/" target="_blank" rel="noopener noreferrer">magnetforensics<ExternalLinkIcon/></a></p>
</div></template>


