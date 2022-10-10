/*
网易蜗牛读书 解锁特权
原作者: yxiaocai & JO2EY

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://cdn.jsdelivr.net/gh/sve1r/Rules-For-Quantumult-X@develop/Scripts/VIP/Wnyd/vip.js

[mitm]
hostname = p.du.163.com

**************************/
var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 1679685290000;
body = JSON.stringify(obj);
$done({body});