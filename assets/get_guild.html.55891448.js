import{_ as s,o as n,c as a,a as l}from"./app.b78ca57a.js";const e={},t=l(`<h1 id="\u83B7\u53D6\u9891\u9053\u8BE6\u60C5" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u9891\u9053\u8BE6\u60C5" aria-hidden="true">#</a> \u83B7\u53D6\u9891\u9053\u8BE6\u60C5</h1><p>\u83B7\u53D6\u9891\u9053\u8BE6\u60C5\u4FE1\u606F\u3002</p><h2 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h2><div class="language-python ext-py line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> botpy</span></span>
<span class="line"><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> botpy.message </span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> Message</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">MyClient</span><span style="color:#D4D4D4;">(</span><span style="color:#4EC9B0;">botpy</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Client</span><span style="color:#D4D4D4;">):</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">def</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">on_at_message_create</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">self</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">: Message):</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">self</span><span style="color:#D4D4D4;">.api.get_guild(</span><span style="color:#9CDCFE;">guild_id</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;xxxx&quot;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">intents = botpy.Intents(</span><span style="color:#9CDCFE;">public_guild_messages</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">True</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">client = MyClient(</span><span style="color:#9CDCFE;">intents</span><span style="color:#D4D4D4;">=intents)</span></span>
<span class="line"><span style="color:#D4D4D4;">client.run(</span><span style="color:#9CDCFE;">appid</span><span style="color:#D4D4D4;">={appid}, </span><span style="color:#9CDCFE;">token</span><span style="color:#D4D4D4;">={token})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h2><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>guild_id</td><td>\u662F</td><td>string</td><td>\u9891\u9053 ID</td></tr></tbody></table><h2 id="\u8FD4\u56DE\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u8BF4\u660E" aria-hidden="true">#</a> \u8FD4\u56DE\u8BF4\u660E</h2><p>\u8FD4\u56DE <a href="#guild">Guild</a> \u5BF9\u8C61\u3002</p><h3 id="guild" tabindex="-1"><a class="header-anchor" href="#guild" aria-hidden="true">#</a> Guild</h3><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>\u9891\u9053 ID</td></tr><tr><td>name</td><td>string</td><td>\u9891\u9053\u540D\u79F0</td></tr><tr><td>owner_id</td><td>string</td><td>\u521B\u5EFA\u4EBA\u7528\u6237 ID</td></tr><tr><td>owner</td><td>boolean</td><td>\u5F53\u524D\u4EBA\u662F\u5426\u662F\u521B\u5EFA\u4EBA</td></tr><tr><td>member_count</td><td>number</td><td>\u6210\u5458\u6570</td></tr><tr><td>max_members</td><td>number</td><td>\u6700\u5927\u6210\u5458\u6570</td></tr><tr><td>description</td><td>string</td><td>\u63CF\u8FF0</td></tr></tbody></table><h2 id="\u8FD4\u56DE\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u793A\u4F8B" aria-hidden="true">#</a> \u8FD4\u56DE\u793A\u4F8B</h2><p><code>data</code>\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;id&quot;</span><span style="color:#D4D4D4;">:</span><span style="color:#CE9178;">&quot;guildId&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">:</span><span style="color:#CE9178;">&quot;\u9891\u9053\u540D\u79F0&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;owner_id&quot;</span><span style="color:#D4D4D4;">:</span><span style="color:#CE9178;">&quot;owner_id&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;owner&quot;</span><span style="color:#D4D4D4;">:</span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;member_count&quot;</span><span style="color:#D4D4D4;">:</span><span style="color:#B5CEA8;">8</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;max_members&quot;</span><span style="color:#D4D4D4;">:</span><span style="color:#B5CEA8;">300</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;description&quot;</span><span style="color:#D4D4D4;">:</span><span style="color:#CE9178;">&quot;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[t];function p(r,d){return n(),a("div",null,o)}var i=s(e,[["render",p],["__file","get_guild.html.vue"]]);export{i as default};