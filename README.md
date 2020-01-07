

# Sveir Dev. | Quantumult X 自用规则集


<a href="https://info.yce.ink"><img src="https://img.shields.io/badge/导航-Home-brightgreen.svg" alt="官网"></a>
<a href="https://www.sveir.xyz"><img src="https://img.shields.io/badge/博客-Blog-blue.svg" alt="博客"></a>
<a href="https://sveir.design"><img src="https://img.shields.io/badge/鬼地方-Sveir Dev-important.svg" alt="导航"></a>
<a href="https://github.com/sve1r"><img src="https://img.shields.io/badge/Git-Hub-critical.svg" alt="Github"></a>


>  仓库内容来源于网络，仅用于 Quantumult X 中 增添策略组图标以达到*装逼*的效果

### 标准版

- 使用公共 DNS 达到快速、准确、稳定及安全的解析
- 国内直连、海外加速
- Apple 服务(可选择性)加速
- 海外媒体（部分）服务指定节点
- 拦截运营商劫持
- 拦截臭名昭著的欺诈网站（如**思杰马克丁**伪造的一系列软件官网、MacKeeper等）
- 拦截应用广告
  ⚠️ 网页广告请使用 Safari 内容拦截器如 [ADGuard](https://apps.apple.com/app/apple-store/id1047223162) 或集成去广告功能浏览器

### 回国版

- 国内媒体服务解锁
- 拦截应用广告
  ⚠️ 网页广告请使用 Safari 内容拦截器如 [ADGuard](https://itunes.apple.com/app/apple-store/id1047223162?mt=8) 或集成去广告功能浏览器

### DNS 推荐

    - 119.29.29.29
    - 182.254.116.116
    - 223.5.5.5
    - 223.6.6.6
------



### 关于 Quantumult X Filter Remote 说明

要求排序如下：

1. Unbreak.list - 用于修正 PROXY 和 REJECT 行为
2. Advertising.list - 广告、行为分析、隐私追踪（macOS 不建议开启）
3. Hijacking.list - 劫持（运营商、臭名昭著的诈骗网站或恶意应用）
4. ForeignMedia.list - 国际流媒体
5. DomesticMedia.list - 国内流媒体（可不加）
6. Global.list - 国际网站/应用
7. Apple.list - Apple 服务（可不加）
9. China.list - 国内网站/应用

**说明**

- 如若**不需要**观看哔哩哔哩、爱奇艺面向港澳台的限定内容可不加「DomesticMedia.list」。
- 如若**不需要**代理 Apple 服务可不加「Apple.list」，若加入必须在「Global.list」和「China.list」之间。
- 如需细化流媒体如「Youtube.list」需要加在「ForeignMedia.list」之前。
- 如需应用类的如「Telegram.list、Google.list、PayPal.list」需要加在「Global.list」之前。

一般情况下默认引入上述 8 个（如不需要 DomesticMedia 和 Apple 可减至 6 个）即可，那么为什么还有更多的如「Youtube.list、Netflix.list、Spotify.list、Mail.list」？

1. 对于一些「进阶玩家」来说其拥有专用于观看流媒体的线路，比如观看限定区域的 Netflix、Hulu、HBO 等，所以引入相关 .list 建立一个策略组设置相应服务区节点线路。但对于普通用户来说，那些「Youtube.list、Hulu.list」来说都是集成在「ForeignMedia.list」中**不需要**额外引入。
2. 对于一些「机场」来说为了避免有恶意用户利用节点线路滥发垃圾邮件，所以对服务器相关邮件端口进行了屏蔽，这时候可以引入「Mail.list」指定一个可收发邮件对节点。
3. 对于一些「进阶玩家」来说其拥有高速的新加坡节点线路，为了提升 Telegram 使用体验所以会引入「Telegram.list」指定一些节点。

综上所述、以此类推，独立的 .list 一般都集成在了默认的 6 条 .list 文件中，如果你没有进阶的定制化需求是**不 需 要**引入那么多的，根据需求使用才是 Ruleset/Filter 的灵活用法，规则不是越多越好。

------



### 常见问题

> 0.Final 有什么作用？该怎样使用？

⚠️ 注意：在日常使用之中，推荐使用 [Final，Proxy] 模式，除非有着特殊需求。

换种方式而言，就是除了配置文件中选定规则以外的所有请求，都通过代理访问。

- GeoIP 规则已经可以解决绝大多数的境内网站直连。
- 剩下未能被匹配的规则使用 Final 就好。

> 1.遇到连接公共场所 Wi-Fi 时验证页面无法显示？

请暂时关闭待验证成功后再开启，或者如校园网运营商客户端的可将相关域名或 IP 地址手动加入至 【分流】中。

> 2.iOS 12 上 Siri 无法正常使用

[#55](https://github.com/ConnersHua/Profiles/issues/55) （仅）iOS 12 的 Bug，尝试多次重启直至正常。

> 3.Clash 连接不上内网服务器

您可以手动移除掉配置内的相关 DNS 配置。

> 4.打开「淘宝」等阿里系应用时遇到「访问被拒绝」、「请检查是否使用了代理」等提示

部分「阿里云」节点会导致此问题，请尝试使用其他节点。

> 5.关于 Speedtest 想直连/代理？

规则对于 Speedtest 不是绝对的直连也不是绝对的代理，对于国内测速点是直连，对于国外测速点是代理。

默认打开  Speedtest 会自动选择适用于代理服务器节点的国外测速节点，若要进行国内网速测试手动修改「测速点」搜索你所在城市或省会的拼音然后选择运营商即可。

------



### 关于去广告

#### ⚠️ 为什么 Youtube、知乎、微博等应用（存在于 MitM 域名列表）无法使用？

1. 开启「HTTPS 解密(MitM)」功能
2. 安装证书
3. **到系统「设置 > 通用 > 关于本机」中底部的「证书信任设置」中信任所安装的证书！**

#### 为什么某应用还是有广告

**1.缓存**

有些应用会**将广告缓存**，如果在使用规则前应用就已经缓存了广告，所以你需要：

1. 应用内设置里清除缓存。
2. 但有的应用并不会清除广告的缓存，所以需要将应用删除重装。

⚠️ 广告加载是实时的，这就意味着：

- 需要实时开着类 Surge 应用托管网络
- 即便一直开着，但在遇到信号断开重连、蜂窝数据和 Wi-Fi 网络切换时会有一些网络请求先于类 Surge 应用加载导致广告出现，怎么办？看上面两步。

**2.功能**

广告阻止不仅于使用 [Rule] 规则，有的广告需要 [URL Rewrite] 和 [MITM]

**3.规则不是万能的**

不是所有广告都能简单的依靠规则阻止。

**4.其他**

> Youtube 去广告会造成以下问题

- 网页版可能无法正常播放
- YouTube Premium 用户无法正常播放
- Quantumult X 个别情况下遇到片头广告时可能会卡黑屏

所以默认并没有启用，如果仍需启用需在「HTTPS 解密(MitM)」的「主机名」列表中添加：

```
*.googlevideo.com
```

------



## 部分规则来源及鸣谢
- [ConnersHua](https://github.com/ConnersHua)
- [lhie1](https://github.com/lhie1)
- Lison Bin
- [linjiacheng](https://github.com/linjiacheng)
- Booui
- liceva
- [JO2EY](https://github.com/JO2EY) 
- [Choler](https://github.com/Choler)
- [xream](https://github.com/xream)
- [gkeyes](https://github.com/gkeyes)

## 许可与说明

- 本项目的所有文件，README 等资源基于一个 [MIT License](LICENSE) 发布，你可以拷贝、再发行本项目的内容, 但是你将必须：
  - 使用**完全相同**的条款和格式发布。
  - 请注明原作者信息以及协议声明。
  - 同时请勿**将本项目用于商业用途**，**任何盈利活动都属于商业用途**。
  

- 本项目的所有代码除另有说明外，均基于MIT License发布。

- 此处的文字仅用于说明，条款以LICENSE文件中的内容为准。

- 请在遵守当地相关法律法规的前提下使用本项目，我们不为使用此项目内容出现问题负任何责任。


