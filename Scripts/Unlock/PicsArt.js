/*
PicsArt 解锁高级功能

***************************
QuantumultX:

[rewrite_local]
^https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/PicsArt.js

[mitm]
hostname = api.picsart.c*, api.meiease.c*

**************************/

let obj = JSON.parse($response.body);
obj.subscription.granted = "true";
$done({body: JSON.stringify(obj)});