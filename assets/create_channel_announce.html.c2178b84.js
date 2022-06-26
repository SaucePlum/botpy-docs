import{_ as s,o as n,c as a,a as e}from"./app.b78ca57a.js";const l={},o=e(`<h1 id="\u521B\u5EFA\u5B50\u9891\u9053\u516C\u544A" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5B50\u9891\u9053\u516C\u544A" aria-hidden="true">#</a> \u521B\u5EFA\u5B50\u9891\u9053\u516C\u544A</h1><p>\u5C06\u67D0\u6761\u6D88\u606F\u521B\u5EFA\u4E3A\u5B50\u9891\u9053\u7684\u516C\u544A\u3002</p><h2 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h2><div class="language-python ext-py line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> botpy</span></span>
<span class="line"><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> botpy.message </span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> Message</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">MyClient</span><span style="color:#D4D4D4;">(</span><span style="color:#4EC9B0;">botpy</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Client</span><span style="color:#D4D4D4;">):</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">def</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">on_at_message_create</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">self</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">: Message):</span></span>
<span class="line"><span style="color:#D4D4D4;">        message_id = </span><span style="color:#CE9178;">&quot;088de19cbeb883e7e97110a2e39c0138d401&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">self</span><span style="color:#D4D4D4;">.api.create_announce(message.guild_id, message.channel_id, message_id)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">intents = botpy.Intents(</span><span style="color:#9CDCFE;">public_guild_messages</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">True</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">client = MyClient(</span><span style="color:#9CDCFE;">intents</span><span style="color:#D4D4D4;">=intents)</span></span>
<span class="line"><span style="color:#D4D4D4;">client.run(</span><span style="color:#9CDCFE;">appid</span><span style="color:#D4D4D4;">={appid}, </span><span style="color:#9CDCFE;">token</span><span style="color:#D4D4D4;">={token})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h2><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>guild_id</td><td>\u662F</td><td>string</td><td>\u9891\u9053 ID</td></tr><tr><td>channel_id</td><td>\u662F</td><td>string</td><td>\u5B50\u9891\u9053 ID</td></tr><tr><td>message_id</td><td>string</td><td>\u6D88\u606F ID</td><td></td></tr></tbody></table><h2 id="\u8FD4\u56DE\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u793A\u4F8B" aria-hidden="true">#</a> \u8FD4\u56DE\u793A\u4F8B</h2><p><code>data</code>\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;guild_id&quot;</span><span style="color:#D4D4D4;">:</span><span style="color:#CE9178;">&quot;guild_id&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;channel_id&quot;</span><span style="color:#D4D4D4;">:</span><span style="color:#CE9178;">&quot;channel_id&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;message_id&quot;</span><span style="color:#D4D4D4;">:</span><span style="color:#CE9178;">&quot;message_id&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),t=[o];function p(c,i){return n(),a("div",null,t)}var d=s(l,[["render",p],["__file","create_channel_announce.html.vue"]]);export{d as default};