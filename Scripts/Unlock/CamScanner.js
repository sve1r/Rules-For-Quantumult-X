/*
CamScanner 解锁部分高级特权

***************************
Quantumult X:

[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

[mitm]
hostname = ap*.intsig.net

**************************/
let obj = {
    "data":
        {
            "psnl_vip_property": {
                "expiry": "1687017600"
            }
        }
};
$done({body: JSON.stringify(obj)});