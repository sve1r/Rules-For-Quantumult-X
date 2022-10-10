/*
解锁知音漫客付费章节 (需登录)

***************************
QuantumultX:

[rewrite_local]
^https:\/\/apigate\.zymk\.cn\/(zymk-getuserinfo-api\/v1\/getuserinfo|zymk-userpurchased-api\/v1\/userpurchased\/paychapters)\/ url script-response-body https://cdn.jsdelivr.net/gh/sve1r/Rules-For-Quantumult-X@develop/Scripts/VIP/Zymh/unlock.js

[mitm]
hostname = apigate.zymk.cn

**************************/

var obj = JSON.parse($response.body);
obj.status = 0;
obj.data.isvip = 1;
obj.data.coins = 6666;
obj.data.Cgold = 6666;
$done({body: JSON.stringify(obj)});