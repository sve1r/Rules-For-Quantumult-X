/***********************************************
 > 应用名称：墨鱼自用deleteHeader脚本
 > 脚本作者：@ddgksf2013
 > 微信账号：墨鱼手记
 > 更新时间：2024-02-03
 > 通知频道：https://t.me/ddgksf2021
 > 贡献投稿：https://t.me/ddgksf2013_bot
 > 问题反馈：ddgksf2013@163.com
 > 特别提醒：如需转载请注明出处，谢谢合作！
 ***********************************************/

const version = 'V1.0.2';


function setHeaderValue(e, a, d) {
    var r = a.toLowerCase();
    r in e ? e[r] = d : e[a] = d
}

var modifiedHeaders = $request.headers;
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", ""), $done({headers: modifiedHeaders});
