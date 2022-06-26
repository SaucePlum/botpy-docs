import{_ as s,o as n,c as t,a}from"./app.b78ca57a.js";const l={},e=a(`<h1 id="\u521B\u5EFA\u9891\u9053\u8EAB\u4EFD\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9891\u9053\u8EAB\u4EFD\u7EC4" aria-hidden="true">#</a> \u521B\u5EFA\u9891\u9053\u8EAB\u4EFD\u7EC4</h1><p>\u521B\u5EFA\u4E00\u4E2A\u9891\u9053\u8EAB\u4EFD\u7EC4\u3002</p><h2 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h2><div class="language-python ext-py line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> botpy</span></span>
<span class="line"><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> botpy.message </span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> Message</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">MyClient</span><span style="color:#D4D4D4;">(</span><span style="color:#4EC9B0;">botpy</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Client</span><span style="color:#D4D4D4;">):</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">def</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">on_at_message_create</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">self</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">: Message):</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">self</span><span style="color:#D4D4D4;">.api.create_guild_role(</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">guild_id</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;xxxx&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;xxxx&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;10395294&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#9CDCFE;">hoist</span><span style="color:#D4D4D4;">=</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">intents = botpy.Intents(</span><span style="color:#9CDCFE;">public_guild_messages</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">True</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">client = MyClient(</span><span style="color:#9CDCFE;">intents</span><span style="color:#D4D4D4;">=intents)</span></span>
<span class="line"><span style="color:#D4D4D4;">client.run(</span><span style="color:#9CDCFE;">appid</span><span style="color:#D4D4D4;">={appid}, </span><span style="color:#9CDCFE;">token</span><span style="color:#D4D4D4;">={token})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u9700\u8981\u4F7F\u7528\u7684 token \u5BF9\u5E94\u7684\u7528\u6237\u5177\u5907\u521B\u5EFA\u8EAB\u4EFD\u7EC4\u6743\u9650\u3002\u5982\u679C\u662F\u673A\u5668\u4EBA\uFF0C\u8981\u6C42\u88AB\u6DFB\u52A0\u4E3A\u7BA1\u7406\u5458\u3002</p></div><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h2><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>guild_id</td><td>\u662F</td><td>string</td><td>\u9891\u9053 ID</td></tr><tr><td>name</td><td>\u662F</td><td>string</td><td>\u540D\u79F0</td></tr><tr><td>color</td><td>\u5426</td><td>number</td><td>ARGB \u7684 HEX \u5341\u516D\u8FDB\u5236\u989C\u8272\u503C\u8F6C\u6362\u540E\u7684\u5341\u8FDB\u5236\u6570\u503C\uFF08\u4F8B\uFF1A4294927682\uFF09</td></tr><tr><td>hoist</td><td>\u5426</td><td>number</td><td>\u5728\u6210\u5458\u5217\u8868\u4E2D\u5355\u72EC\u5C55\u793A: 0-\u5426, 1-\u662F</td></tr></tbody></table><h2 id="\u8FD4\u56DE\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u8BF4\u660E" aria-hidden="true">#</a> \u8FD4\u56DE\u8BF4\u660E</h2><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>role_id</td><td>string</td><td>\u9891\u9053\u8EAB\u4EFD\u7EC4 ID</td></tr><tr><td>role</td><td><a href="#guildrole">GuildRole</a></td><td>\u9891\u9053\u8EAB\u4EFD\u7EC4\u5BF9\u8C61</td></tr></tbody></table><h3 id="guildrole" tabindex="-1"><a class="header-anchor" href="#guildrole" aria-hidden="true">#</a> GuildRole</h3><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>\u8EAB\u4EFD\u7EC4 ID</td></tr><tr><td>name</td><td>string</td><td>\u540D\u79F0</td></tr><tr><td>color</td><td>number</td><td>ARGB \u7684 HEX \u5341\u516D\u8FDB\u5236\u989C\u8272\u503C\u8F6C\u6362\u540E\u7684\u5341\u8FDB\u5236\u6570\u503C\uFF08\u4F8B\uFF1A4294927682\uFF09</td></tr><tr><td>hoist</td><td>number</td><td>\u662F\u5426\u5728\u6210\u5458\u5217\u8868\u4E2D\u5355\u72EC\u5C55\u793A: 0-\u5426, 1-\u662F</td></tr><tr><td>number</td><td>number</td><td>\u4EBA\u6570</td></tr><tr><td>member_limit</td><td>number</td><td>\u6210\u5458\u4E0A\u9650</td></tr></tbody></table>`,11),o=[e];function r(p,d){return n(),t("div",null,o)}var i=s(l,[["render",r],["__file","create_guild_role.html.vue"]]);export{i as default};