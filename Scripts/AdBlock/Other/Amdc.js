/***********************************************
 > 应用名称：墨鱼自用amdc脚本
 > 脚本作者：@ddgksf2013
 > 微信账号：墨鱼手记
 > 更新时间：2025-09-06
 > 通知频道：https://t.me/ddgksf2021
 > 贡献投稿：https://t.me/ddgksf2013_bot
 > 问题反馈：ddgksf2013@163.com
 > 特别提醒：如需转载请注明出处，谢谢合作！
 ***********************************************/



const version = 'V1.0.11';


var ua=$request.headers["User-Agent"]||$request.headers["user-agent"];/(AMap|Cainiao|%E9%97%B2%E9%B1%BC|%E9%A3%9E%E7%8C%AA%E6%97%85%E8%A1%8C|%E5%96%B5%E8%A1%97|%E5%A4%A9%E7%8C%AB|Alibaba|Hema4iPhone|Moon|DMPortal)/.test(ua)?$done({body:"ddgksf2013"}):$done({});