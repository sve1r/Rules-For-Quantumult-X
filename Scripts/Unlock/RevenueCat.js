/***********************************

 > ScriptName        𝐑𝐞𝐯𝐞𝐧𝐮𝐞𝐂𝐚𝐭多合一脚本[墨鱼版]
 > Author            @ddgksf2013
 > ForHelp           若有屏蔽广告的需求，可公众号后台回复APP名称
 > WechatID          墨鱼手记
 > TgChannel         https://t.me/ddgksf2021
 > Contribute        https://t.me/ddgksf2013_bot
 > Feedback          📮 𝐝𝐝𝐠𝐤𝐬𝐟𝟐𝟎𝟏𝟑@𝟏𝟔𝟑.𝐜𝐨𝐦 📮
 > UpdateTime        2024-02-13
 > Suitable          自行观看“# > ”注释内容，解锁是暂时的，购买也不是永久的[订阅、跑路]
 > Attention         📣个别失效的APP请相关需求者自行降级、或寻找替代品、或购买支持
 > Attention         如需引用请注明出处，谢谢合作！
 > ScriptURL         https://gist.githubusercontent.com/ddgksf2013/dbb1695cd96743eef18f3fac5c6fe227/raw/revenuecat.js
 ***********************************/


// ========= 动态ID ========= //
const mapping = {
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
    'FinancialNote': ['category'],
    'Precious/': ['Pro'],
    'LUTCamera': ['ProVersion', 'com.uzero.funforcam.monthlysub'],
    'totowallet': ['all', 'com.ziheng.totowallet.yearly'],
    'Aphrodite': ['all'],
    'apollo': ['all'],
    'widget_art': ['all'],
    'OneBox': ['all'],
    'Spark': ['premium'],
    'Pillow': ['premium'],
    '1Blocker': ['premium'],
    'VSCO': ['membership'],
    'UTC': ['Entitlement.Pro'],
    '%E8%AC%8E%E5%BA%95%E9%BB%91%E8%86%A0': ['Entitlement.Pro'],
    '%E8%AC%8E%E5%BA%95%E6%99%82%E9%90%98': ['Entitlement.Pro'],
    'OffScreen': ['Entitlement.Pro'],
    'ScannerPro': ['plus'],
    'WhiteCloud': ['allaccess'],
    'HTTPBot': ['pro'],
    'audiomack': ['Premium1'],
    'server_bee': ['Pro'],
    'simple-': ['patron'],
    'streaks': ['patron'],
    'andyworks-calculator': ['patron'],
    'vibes': ['patron'],
    'CountDuck': ['premium', 'Lifetime'],
    'IPTVUltra': ['premium'],
    'Happy%3ADays': ['pro', 'happy_999_lifetime'],
    'PDF_convertor/': ['VIP', 'com.pdf.convertor.forever'],
    'ChatGPTApp': ['Advanced'],
    'APTV': ['pro'],
    'TouchRetouchBasic': ['premium'],
    'My%20Jump%20Lab': ['lifetime'],
    '%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE': ['pro'],
    'Paku': ['pro'],
    'Awesome%20Habits': ['premium'],
    'Gear': ['pro', 'com.gear.app.yearly'],
    'MoneyThings': ['Premium'],
    'Anybox': ['pro'],
    'Fileball': ['filebox_pro'],
    'Noto': ['pro'],
    'Grow': ['grow.pro', 'grow_lifetime'],
    'WidgetSmith': ['Premium'],
    'Percento': ['premium'],
    'Planny': ['premium'],
    'CPUMonitor': ['Pro'],
    'Locket': ['Gold'],
    'My%20Tim': ['Pro'],
    'Photom': ['premium', 'pixelmator_photo_pro_subscription_v1_pro_offer'],
    'mizframa': ['premium', 'mf_20_lifetime2'],
    'ImageX': ['imagex.pro.ios', 'imagex.pro.ios.lifetime'],
    'Fin': ['premium', 'com.circles.fin.premium.yearly'],
    'Ledger': ['Pro', 'com.lifetime.pro'],
    'One4Wall': ['lifetime', 'lifetime_key'],
    'SimpleScan/': ['premium', 'com.atlantia.SimpleScan.Purchases.Lifetime'],
    'OneWidget': ['allaccess'],
    'CardPhoto': ['premium'],
    'Journal_iOS/': ['PRO'],
    'LemonKeepAccounts/': ['VIP', 'lm_1_1month'],
    'PDF%20Viewer': ['sub.pro'],
    'PhotoRoom': ['business'],
    'Decision': ['com.nixwang.decision.entitlements.pro'],
    'Tangerine': ['Premium'],
    'PastePal': ['premium'],
    'Fiery': ['premium'],
    'Airmail': ['Airmail Premium'],
    'Stress': ['StressWatch Pro'],
    'PinPaper': ['allaccess'],
    'Echo': ['PLUS'],
    'MyThings': ['pro', 'xyz.jiaolong.MyThings.pro.infinity'],
    'Overdue': ['Pro'],
    'BlackBox': ['plus', 'app.filmnoir.appstore.purchases.lifetime'],
    'Spektr': ['premium'],
    'MusicMate': ['premium', 'mm_lifetime_68_premium'],
    '%E4%BA%8B%E7%BA%BF': ['pro', 'xyz.jiaolong.eventline.pro.lifetime'],
    'Tasks': ['Pro'],
    'Currency': ['plus'],
    'money_manager': ['premium'],
    'fastdiet': ['premium'],
    'Blurer': ['paid_access'],
    'Everlog': ['premium'],
    'reader': ['vip2', 'com.valo.reader.vip2.year'],
    'GetFace': ['Pro access'],
    'intervalFlow': ['All Access', 'wodtimer_lf_free'],
    'Period%20Calendar': ['Premium', 'com.lbrc.PeriodCalendar.premium.yearly'],
    'Cookie': ['allaccess', 'app.ft.Bookkeeping.lifetime'],
    'ScientificCalculator': ['premium', 'com.simpleinnovation.calculator.ai.premium.yearly.base'],
    'MOZE': ['premium'],
    '1LemonKeepAccounts/': ['vip'],
    'To%20Me/': ['Premium'],
    '%E8%A8%80%E5%A4%96%E7%AD%86%E8%A8%98/': ['Premium'],
    'alcohol.tracker': ['pro', 'drinklog_lifetime'],
    'DayPoem': ['Pro Lifetime'],
    'Budget%20Flow': ['full_access', 'com.fabian.hasse.haushaltsbuch.upgrade.combined'],
    'G%20E%20I%20S%20T': ['memorado_premium'],
    'multitimer_app': ['premium', 'timus_lt'],
    'Darkroom': ['co.bergen.Darkroom.entitlement.allToolsAndFilters'],
    'tiimo': ['full_access'],
    'FaceMa/': ['Pro access'],
    'Record2Text/': ['Pro access'],
    'jinduoduo_calculator': ['jinduoduoapp', 'mobile_vip'],
    'Focused%20Work': ['Pro'],
    'GoToSleep': ['Pro'],
    'kegel': ['kegel_pro'],
    'Ochi': ['Pro'],
    'Pomodoro': ['Plus', 'com.MINE.PomodoroTimer.plus.yearly'],
    'universal/': ['Premium', 'remotetv.yearly.07'],
    'ShellBean/': ['pro', 'com.ningle.shellbean.subscription.year'],
    'AI%20Art%20Generator/': ['Unlimited Access'],
    'Email%20Me': ['premium'],
    'GoodThing/': ['pro', 'goodhappens_basic_year'],
    'Reels%20Editor': ['Unlimited Access'],
    'com.dison.diary': ['vip'],
    'iRead': ['vip'],
    'jizhi': ['jizhi_vip'],
    'card/': ['vip'],
    'EraseIt/': ['ProVersionLifeTime'],
    'Alpenglow': ['newPro'],
    'MindBreathYoga/': ['lifetimeusa'],
    'MetadataEditor': ['unlimited_access'],
    '%E6%9F%A5%E5%A6%86%E5%A6%86': ['Pro access'],
    '%E5%85%83%E6%B0%94%E8%AE%A1%E6%97%B6': ['plus'],
    'WidgetCat': ['MiaoWidgetPro'],
    'Emphasis/': ['premium'],
    'FormScanner/': ['Pro', 'formscanner_lifetime'],
    'streamer/': ['Premium'],
    'NeatNook/': ['com.neatnook.pro', 'com.neatnook.pro.forever'],
    'Blackout/': ['premium', 'blackout_299_lt'],
    'Budgetify/': ['premium', 'budgetify_3999_lt'],
    'Dedupe/': ['Pro', 'com.curiouscreatorsco.Dedupe.pro.lifetime.notrial.39_99'],
    'Wozi': ['wozi_pro_2023']
};

// =========    固定部分  ========= //
// =========  @ddgksf2021 ========= //
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"], obj = JSON.parse($response.body);
obj.Attention = "恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！";
var ddgksf2013 = {
    is_sandbox: !1,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    period_type: "normal",
    expires_date: "2099-12-18T01:04:17Z",
    grace_period_expires_date: null,
    unsubscribe_detected_at: null,
    original_purchase_date: "2022-09-08T01:04:18Z",
    purchase_date: "2022-09-08T01:04:17Z",
    store: "app_store"
}, ddgksf2021 = {
    grace_period_expires_date: null,
    purchase_date: "2022-09-08T01:04:17Z",
    product_identifier: "com.ddgksf2013.premium.yearly",
    expires_date: "2099-12-18T01:04:17Z"
};
const match = Object.keys(mapping).find(e => ua.includes(e));
if (match) {
    let [e, s] = mapping[match];
    s ? (ddgksf2021.product_identifier = s, obj.subscriber.subscriptions[s] = ddgksf2013) : obj.subscriber.subscriptions["com.ddgksf2013.premium.yearly"] = ddgksf2013, obj.subscriber.entitlements[e] = ddgksf2021
} else obj.subscriber.subscriptions["com.ddgksf2013.premium.yearly"] = ddgksf2013, obj.subscriber.entitlements.pro = ddgksf2021;
$done({body: JSON.stringify(obj)});