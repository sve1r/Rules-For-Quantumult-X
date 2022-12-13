/***********************************

> 应用名称：KeepStyle
> 脚本功能：超级净化，具体功能请参考[ # > ]
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 更新时间：2022-12-08
> 通知频道：https://t.me/ddgksf2021
> 投稿助手：https://t.me/ddgksf2013_bot
> 问题反馈：📮 ddgksf2013@163.com 📮
> 特别说明：⛔⛔⛔
            本脚本仅供学习交流使用，禁止转载、售卖
            ⛔⛔⛔
            
hostname=api.gotokeep.com, kad.gotokeep.com

***********************************/

if (-1 != $request.url.indexOf("people/my")) {
  let e = JSON.parse($response.body);
  (e.data.floatingInfo = {}), $done({ body: JSON.stringify(e) });
} else if (-1 != $request.url.indexOf("config/v3/basic")) {
  let e = JSON.parse($response.body);
  (e.data.bottomBarControl.defaultTab = "home"),
    (e.data.bottomBarControl.tabs = Object.values(
      e.data.bottomBarControl.tabs
    ).filter(
      (e) =>
        !("entry" == e.tabType || "mall" == e.tabType || "prime" == e.tabType)
    )),
    (e.data.homeTabs = Object.values(e.data.homeTabs).filter(
      (e) => !("uni_web_activity" == e.type)
    )),
    2 < e.data.homeTabs.length &&
      ((e.data.homeTabs[0].schema = "keep://homepage/homePrime"),
      (e.data.homeTabs[0].name = "會員"),
      (e.data.homeTabs[0].type = "homePrime")),
    $done({ body: JSON.stringify(e) });
} else if (-1 != $request.url.indexOf("homepage/v7/tab/find")) {
  let e = JSON.parse($response.body);
  (e.data.sections = Object.values(e.data.sections).filter(
    (e) => "quickEntranceV3" == e.contentStyle
  )),
    (e.data.sections[0].quickEntrances =
      e.data.sections[0].quickEntrances.filter(
        (e) =>
          0 == e.itemTrackProps.itemPosition ||
          1 == e.itemTrackProps.itemPosition ||
          2 == e.itemTrackProps.itemPosition ||
          3 == e.itemTrackProps.itemPosition
      )),
    $done({ body: JSON.stringify(e) });
} else if (-1 != $request.url.indexOf("preview")) {
  let e = JSON.parse($response.body);
  (e.data.detailSections = Object.values(e.data.detailSections).filter(
    (e) => !("recommendation" == e.sectionType)
  )),
    $done({ body: JSON.stringify(e) });
} else if (-1 != $request.url.indexOf("sportpage/sport/v3/mysport")) {
  let e = JSON.parse($response.body);
  e.data.sections && delete e.data.sections, $done({ body: JSON.stringify(e) });
}
