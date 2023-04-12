/***********************************
> 应用名称：酷安净化
> 脚本作者：ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2023-01-21
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载、售卖
          ⚠️⚠️⚠️
		  
***********************************/

const version = "V1.0.9";

if (-1 != $request.url.indexOf("replyList")) {
  var t = JSON.parse($response.body);
  t.data.length && (t.data = t.data.filter((t) => t.id)),
    $done({ body: JSON.stringify(t) });
} else if (-1 != $request.url.indexOf("indexV8")) {
  var t = JSON.parse($response.body);
  (t.data = t.data.filter(
    (t) =>
      !(
        "sponsorCard" == t.entityTemplate ||
        8639 == t.entityId ||
        29349 == t.entityId ||
        33006 == t.entityId ||
        32557 == t.entityId ||
        -1 != t.title.indexOf("值得买") ||
        -1 != t.title.indexOf("红包")
      )
  )),
    $done({ body: JSON.stringify(t) });
} else if (-1 != $request.url.indexOf("dataList")) {
  var t = JSON.parse($response.body);
  (t.data = t.data.filter(
    (t) =>
      !("sponsorCard" == t.entityTemplate || -1 != t.title.indexOf("精选配件"))
  )),
    $done({ body: JSON.stringify(t) });
} else if (-1 != $request.url.indexOf("detail")) {
  var t = JSON.parse($response.body);
  t.data?.hotReplyRows?.length &&
    (t.data.hotReplyRows = t.data.hotReplyRows.filter((t) => t.id)),
    t.data?.topReplyRows?.length &&
      (t.data.topReplyRows = t.data.topReplyRows.filter((t) => t.id)),
    t.data?.include_goods_ids && (t.data.include_goods_ids = []),
    t.data?.include_goods && (t.data.include_goods = []),
    t.data?.detailSponsorCard && (t.data.detailSponsorCard = []),
    $done({ body: JSON.stringify(t) });
} else $done($response);
