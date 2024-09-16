/***********************************

 > ScriptName        BuyiTunes多合一脚本[墨鱼版]
 > Author            @ddgksf2013
 > ForHelp           若有屏蔽广告的需求，可公众号后台回复APP名称
 > WechatID          墨鱼手记
 > TgChannel         https://t.me/ddgksf2021
 > Contribute        https://t.me/ddgksf2013_bot
 > Feedback          📮 ddgksf2013@163.com 📮
 > UpdateTime        2024-02-20
 > Suitable          自行观看“# > ”注释内容，解锁是暂时的，购买也不是永久的[订阅、跑路]
 > Attention         如需引用请注明出处，谢谢合作！
 > Attention         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
 > ScriptURL         https://gist.githubusercontent.com/ddgksf2013/9e0f6c7341beea09a31aa309d9d7f502/raw/buyitunes.js

 ***********************************/



var ddgksf2013 = JSON.parse($response.body);

// ========= 动态ID ========= //
var productidmap = {
    'default': ['ddgksf2013', 'https://t.me/ddgksf2021', 0],
    'com.sugarmo.ScrollClip': ['picsewV3.9.4', 'com.sugarmo.ScrollClip.pro', 1],
    'com.zijayrate.analogcam': ['oldroll', 'com.zijayrate.analogcam.vipforever10', 0],
    'com.loveyouchenapps.knockout': ['proknockout', 'com.knockout.7daysplus', 0],
    'net.shinyfrog.bear-iOS': ['bear', 'net.shinyfrog.bear_iOS.pro_yearly_subscription_bis', 0],
    'com.yengshine.proccd': ['proccd', 'com.yengshine.proccd.year', 0],
    'com.yumiteam.Kuki.ID': ['PicsLeap', 'com.yumiteam.Kuki.ID.4', 1],
    'com.calc.iphone': ['Calculator', 'calc_Unlock_1', 0],
    'me.imgbase.intolive': ['intolive', 'me.imgbase.intolive.proSubYearly', 0],
    'MVH6DNU2ZP.input': ['logcg', 'com.logcg.loginput', 1],
    'com.waterminder.waterminder': ['waterminder', 'waterminder.premiumYearly', 0],
    'wtf.riedel.one-sec': ['onesec', 'wtf.riedel.one_sec.pro.annual.individual', 0],
    'com.aaaalab.nepacket': ['http', 'com.li.blur.pro.month', 0],
    'com.inturnex.Sticker-Maker': ['Sticker', 'com.inturnex.Sticker_Maker.full_access', 1],
    'FuYuan.inkDiary': ['Secai', 'FuYuan.inkDiary.YearB.Pro', 0],
    'me.imgbase.imgplay': ['imgplay', 'me.imgbase.imgplay.subscriptionYearly', 0],
    'com.mediaeditor.video': ['PrettyUp', 'yearautorenew', 0],
    'com.anycasesolutions.SexTracker': ['SexTracker', 'com.anycasesolutions.SexTracker.3mon', 0],
    'com.jianili.pawff': ['pawff', 'com.jianili.pawff.pro.monthly', 0],
    'icar.ren.smk': ['smk', 'smoke19870727', 0],
    'com.meditation.heartratehrv': ['meditation', 'lifetimeusa', 1],
    'livintis.com.wallpapermonster': ['wallpaper', 'wallpaperworld.subscription.yearly.12.notrial', 0],
    'com.tianlang.gifmaker': ['gifmaker', 'com.tianlang.gifmaker.forever', 1],
    'me.imgbase.videoday': ['videoday', 'me.imgbase.videoday.profeaturesYearly', 0],
    'com.icandiapps.nightsky': ['nightsky', 'com.icandiapps.ns4.annual', 0],
    'com.lixkit.diary': ['diary', 'com.lixkit.diary.permanent_68', 0],
    'com.touchbits.subscriptions': ['dyt', 'com.touchbits.subscriptions.iap.pro.yearly', 0],
    'dev.sanjin.WasteCat': ['cat', 'dev.sanjin.WasteCat.PermanentVip', 1]
}

// ========= 固定部分 ========= //
ddgksf2013.Attention = "恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！";
var mapid = ddgksf2013.receipt.bundle_id, mapping = productidmap[mapid] || productidmap.default, inapp = {
    product_id: mapping[1],
    quantity: "1",
    expires_date: "2099-12-18 23:59:59 Etc/GMT",
    expires_date_pst: "2099-12-18 23:59:59 America/Los_Angeles",
    expires_date_ms: "4101292799000",
    is_in_intro_offer_period: "false",
    transaction_id: "100000000000000",
    is_trial_period: "false",
    original_transaction_id: "100000000000000",
    purchase_date_ms: "1701705599000",
    purchase_date: "2023-12-04 23:59:59 Etc/GMT",
    purchase_date_pst: "2023-12-04 23:59:59 America/Los_Angeles",
    original_purchase_date: "2023-12-04 23:59:59 Etc/GMT",
    original_purchase_date_pst: "2023-12-04 23:59:59 America/Los_Angeles",
    original_purchase_date_ms: "1701705599000",
    in_app_ownership_type: "PURCHASED",
    web_order_line_item_id: "100000000000000"
}, renew = {
    product_id: mapping[1],
    original_transaction_id: "100000000000000",
    auto_renew_product_id: mapping[1],
    auto_renew_status: "1"
};
mapping[2] ? (delete inapp.expires_date, delete inapp.expires_date_ms, delete inapp.expires_date_pst) : (ddgksf2013.latest_receipt_info = [inapp], ddgksf2013.latest_receipt = "https://t.me/ddgksf2021", ddgksf2013.pending_renewal_info = [renew]), ddgksf2013.receipt.in_app = [inapp], console.log('操作成功🎉🎉🎉\nCuttlefishの自留地: https://t.me/ddgksf2021'), $done({body: JSON.stringify(ddgksf2013)});