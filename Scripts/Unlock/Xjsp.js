/*
香蕉视频 解锁部分观看限制
官网: https://www.aa2.app

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/.+?\.(pipi|fuli|xiang(jiao|xiang))apps\.com\/(ucp\/index|getGlobalData|(\/|)vod\/reqplay\/) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/xjsp.js

[mitm]
hostname = ios.fuliapps.com, apple.fuliapps.com, ios.xiangjiaoapps.com, apple.xiangjiaoapps.com, *.xiangxiangapps.com, *.pipiapps.com
**************************/

let body = $response.body;
let url = $request.url;

if (body) {
    let obj = JSON.parse($response.body);
    if (/\/ucp\/index/.test(url) && obj.data) {
        obj.data.uinfo.minivod_play_daily_remainders = "666";
        obj.data.uinfo.minivod_down_daily_remainders = "666";
        obj.data.uinfo.down_daily_remainders = "666";
        obj.data.uinfo.play_daily_remainders = "666";
        obj.data.uinfo["next_upgrade_need"] = "0";
        obj.data.user.isvip = "1";
        obj.data.user.gicon = "V5";
        obj.data.user.gid = "5";
    }
    if (/\/getGlobalData/.test(url) && obj.data) {
        obj.data.app_launch_times_adshow = "0";
        obj.data.adgroups = "";
        obj.data.iOS_adgroups = "";
    }
    if (/\/reqplay\//.test(url) && obj.data) {
        obj.retcode = "0";
        if (obj.data.hasOwnProperty("httpurl_preview")) {
            obj.data["httpurl"] = obj.data["httpurl_preview"];
        }
    }
    $done({ body: JSON.stringify(obj) });
} else {
    $done({})
}