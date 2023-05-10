/*

Author：@ddgksf2013

通知频道：https://t.me/ddgksf2021

*/
var body = $response.body;
var ddgksf2013 = JSON.parse(body);

if (ddgksf2013.Variables.data.threaddetail) 
{
ddgksf2013.Variables.data.threaddetail.tagadv = "";
	ddgksf2013.Variables.data.threaddetail.threadapp_ad_video = [];
	ddgksf2013.Variables.data.threaddetail.pingyouadv = "";
	ddgksf2013.Variables.data.threaddetail.middleadv = "";
	ddgksf2013.Variables.data.threaddetail.bottomadv = "";
	ddgksf2013.Variables.data.threaddetail.appdetailadv = [];
}

$done({body: JSON.stringify(ddgksf2013)});