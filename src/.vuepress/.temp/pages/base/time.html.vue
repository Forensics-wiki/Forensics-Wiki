<template><div><h2 id="秒时间戳-10位" tabindex="-1"><a class="header-anchor" href="#秒时间戳-10位" aria-hidden="true">#</a> 秒时间戳（10位）</h2>
<p>例：1670208072</p>
<h2 id="毫秒时间戳-13位" tabindex="-1"><a class="header-anchor" href="#毫秒时间戳-13位" aria-hidden="true">#</a> 毫秒时间戳（13位）</h2>
<p>例：1670208633000</p>
<h3 id="在线工具" tabindex="-1"><a class="header-anchor" href="#在线工具" aria-hidden="true">#</a> 在线工具</h3>
<p><a href="https://www.beijing-time.org/shijianchuo/" target="_blank" rel="noopener noreferrer">https://www.beijing-time.org/shijianchuo/<ExternalLinkIcon/></a></p>
<h3 id="离线工具" tabindex="-1"><a class="header-anchor" href="#离线工具" aria-hidden="true">#</a> 离线工具</h3>
<p><a href="https://github.com/zhangqi-ulua/ConvertTools/tree/1.0.0" target="_blank" rel="noopener noreferrer">https://github.com/zhangqi-ulua/ConvertTools/tree/1.0.0<ExternalLinkIcon/></a></p>
<hr>
<h2 id="_17位时间戳" tabindex="-1"><a class="header-anchor" href="#_17位时间戳" aria-hidden="true">#</a> 17位时间戳</h2>
<p>Chrome的基准时间是1601年1月1日00:00:00。要计算本地时间，Chrome time必须除以一百万转换为秒，然后必须减去01/01/1601 00:00:00和01/01/1970 00:00:00之间的秒差</p>
<h3 id="在线工具-1" tabindex="-1"><a class="header-anchor" href="#在线工具-1" aria-hidden="true">#</a> 在线工具</h3>
<p><a href="https://www.epochconverter.com/webkit" target="_blank" rel="noopener noreferrer">https://www.epochconverter.com/webkit<ExternalLinkIcon/></a></p>
<h3 id="代码转换" tabindex="-1"><a class="header-anchor" href="#代码转换" aria-hidden="true">#</a> 代码转换</h3>
<h4 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h4>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> datetime
<span class="token keyword">def</span> <span class="token function">date_from_webkit</span><span class="token punctuation">(</span>webkit_timestamp<span class="token punctuation">)</span><span class="token punctuation">:</span>
    epoch_start <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">(</span><span class="token number">1601</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
    delta <span class="token operator">=</span> datetime<span class="token punctuation">.</span>timedelta<span class="token punctuation">(</span>microseconds<span class="token operator">=</span><span class="token builtin">int</span><span class="token punctuation">(</span>webkit_timestamp<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span> epoch_start <span class="token operator">+</span> delta

inTime <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">raw_input</span><span class="token punctuation">(</span><span class="token string">'Enter a Webkit timestamp to convert:'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
date_from_webkit<span class="token punctuation">(</span>inTime<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Copy</p>
<h4 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">date_to_webkit</span><span class="token punctuation">(</span><span class="token parameter">date_string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  epoch_start <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">1601</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  date_ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>date_string<span class="token punctuation">)</span><span class="token punctuation">;</span>
  diff <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>date_ <span class="token operator">-</span> epoch_start<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> diff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
date_string <span class="token operator">=</span> <span class="token string">"2022-04-14 00:00:00"</span><span class="token punctuation">;</span>
webkit_string <span class="token operator">=</span> <span class="token function">date_to_webkit</span><span class="token punctuation">(</span>date_string<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>webkit_string<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Copy</p>
<h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h3>
<p><a href="https://blog.csdn.net/weixin_54430656/article/details/124239030" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_54430656/article/details/124239030<ExternalLinkIcon/></a></p>
<hr>
<h2 id="_18位时间戳" tabindex="-1"><a class="header-anchor" href="#_18位时间戳" aria-hidden="true">#</a> 18位时间戳</h2>
<h3 id="转换方法" tabindex="-1"><a class="header-anchor" href="#转换方法" aria-hidden="true">#</a> 转换方法：</h3>
<p>取前9位的数值，数值 +<code v-pre>978307200</code>，得到一个常见的9位时间戳，使用工具转换成正常时间即可</p>
<blockquote>
<p>例：617613267628200064<br>
取前九位<code v-pre>617613267</code>+978307200=1595920467<br>
1595920467转换后2020-7-28 15:14:27</p>
</blockquote>
</div></template>


