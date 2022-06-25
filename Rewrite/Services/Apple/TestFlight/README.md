# Apple 相关服务脚本

---
## 文件目录
```
1.TestFlightAccount.js
2.TestFlightDownload.conf
3.TestFlightDownload.js
```
---
###  TestFlight账户管理脚本 (TestFlightAccount.js) 
####  脚本作者: @NobyDa
#### 脚本兼容: Surge4、QuantumultX、Loon(2.1.20 413+)
#### 主要功能: 
 - 自动存储多个TestFlight账户，并自动合并APP列表，避免切换账户。
 - 账户内单个测试版APP允许多方共享：
     - 导出：点击测试版APP -> 底部开发者许可协议 -> 复制密钥并分享给对方
     - 导入：TestFlight 右上角"兑换" -> 粘贴密钥 -> 弹出保存成功通知后刷新APP列表
     - 多方共享为实验性功能，双方都需要使用该脚本； 该功能主要解决某些APP的TF名额稀缺的问题

```
 请注意，该脚本已经与"TF区域限制解除脚本"合并，如需使用该脚本请务必禁用它，否则可能出现APP安装异常

 注：以上引用地址需要打开并使用KOP-XIAO资源解析器，如没有解析器请使用脚本配置：

 [rewrite_local]
 ^https:\/\/testflight\.apple\.com\/v\d\/(app|account|invite)s\/ url script-analyze-echo-response https://raw.githubusercontent.com/NobyDa/Script/master/TestFlight/TestFlightAccount.js
```
## TestFlight 区域限制解除脚本
####  脚本作者: @NobyDa
```
该订阅仅适用于QuantumultX, 用于更新TestFlight App时, 提示"APP不可用"问题. 解除区域限制.
```