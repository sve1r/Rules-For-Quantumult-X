/*
酷我音乐 解锁会员试听及部分功能

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://cdn.jsdelivr.net/gh/sve1r/Rules-For-Quantumult-X@develop/Scripts/VIP/Kuwo/vip.js

[mitm]
hostname = vip1.kuwo.cn

**************************/

let body = $response.body;
const url = $request.url;
let obj = JSON.parse(body);

const vip = '/vip/v2/user/vip';
const time = '/vip/spi/mservice';

if (url.indexOf(vip) !== -1) {
    obj.data["isNewUser"] = "2";
    obj.data["vipLuxuryExpire"] = "1835312949000";
    obj.data["time"] = "1961170340993";
    obj.data["isYearUser"] = "2";
    obj.data["vipmExpire"] = "1835312949000";
    obj.data["vipOverSeasExpire"] = "1835312949000";
    obj.data["vipExpire"] = "1835312949000";
    obj.data["vip3Expire"] = "1835312949000";
    body = JSON.stringify(obj);
}

if (url.indexOf(time) !== -1) {
    obj["isVIPMAutoPay"] = 2;
    obj["isVIPLuxAutoPay"] = 2;
    body = JSON.stringify(obj);
}

$done({body});