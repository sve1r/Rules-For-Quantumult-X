/***********************************************
> 应用名称：墨鱼自用B站去广告脚本
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2022-01-11
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
***********************************************/

const version = "V2.0.98";

let body = $response.body;
if (body) {
  switch (!0) {
    case /^https:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\?/.test(
      $request.url
    ):
      try {
        let t = JSON.parse(body),
          i = [];
        for (let e of t.data.items)
          if (!e.hasOwnProperty("banner_item")) {
            if (
              e.hasOwnProperty("ad_info") ||
              -1 !== e.card_goto.indexOf("ad") ||
              ("small_cover_v2" !== e.card_type &&
                "large_cover_v1" !== e.card_type &&
                "large_cover_single_v9" !== e.card_type)
            )
              continue;
            else i.push(e);
          }
        (t.data.items = i), (body = JSON.stringify(t));
      } catch (a) {
        console.log("bilibili index:" + a);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\/story\?/.test(
      $request.url
    ):
      try {
        let s = JSON.parse(body),
          l = [];
        for (let o of s.data.items)
          o.hasOwnProperty("ad_info") ||
            -1 !== o.card_goto.indexOf("ad") ||
            l.push(o);
        (s.data.items = l), (body = JSON.stringify(s));
      } catch (r) {
        console.log("bilibili Story:" + r);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/v\d\/account\/teenagers\/status\?/.test(
      $request.url
    ):
      try {
        let d = JSON.parse(body);
        (d.data.teenagers_status = 0), (body = JSON.stringify(d));
      } catch (b) {
        console.log("bilibili teenagers:" + b);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab/.test(
      $request.url
    ):
      try {
        let p = new Set([177, 178, 179, 181, 102, 104, 106, 486, 488, 489]),
          c = JSON.parse(body);
        if (
          (c.data?.tab &&
            (c.data.tab = [
              {
                id: 39,
                name: "直播",
                uri: "bilibili://live/home",
                tab_id: "直播tab",
                pos: 1,
              },
              {
                id: 40,
                name: "推荐",
                uri: "bilibili://pegasus/promo",
                tab_id: "推荐tab",
                pos: 2,
                default_selected: 1,
              },
              {
                id: 41,
                name: "热门",
                uri: "bilibili://pegasus/hottopic",
                tab_id: "hottopic",
                pos: 3,
              },
              {
                id: 545,
                name: "番剧",
                uri: "bilibili://pgc/home",
                tab_id: "bangumi",
                pos: 4,
              },
              {
                id: 151,
                name: "影视",
                uri: "bilibili://pgc/cinema-tab",
                tab_id: "film",
                pos: 5,
              },
            ]),
          c.data.top &&
            (c.data.top = [
              {
                id: 481,
                icon: "http://i0.hdslb.com/bfs/archive/d43047538e72c9ed8fd8e4e34415fbe3a4f632cb.png",
                name: "消息",
                uri: "bilibili://link/im_home",
                tab_id: "消息Top",
                pos: 1,
              },
            ]),
          c.data.bottom)
        ) {
          let n = c.data.bottom.filter((t) => p.has(t.id));
          c.data.bottom = n;
        }
        body = JSON.stringify(c);
      } catch (y) {
        console.log("bilibili tab processing:" + y);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine/.test(
      $request.url
    ):
      try {
        let m = JSON.parse(body),
          h = new Set([
            396, 397, 398, 399, 407, 410, 402, 404, 425, 426, 427, 428, 430,
            432, 433, 434, 494, 495, 496, 497, 500, 501,
          ]);
        m.data.sections_v2.forEach((t, i) => {
          let e = t.items.filter((t) => h.has(t.id));
          (m.data.sections_v2[i].items = e),
            (m.data.sections_v2[i].button = {}),
            delete m.data.sections_v2[i].be_up_title,
            delete m.data.sections_v2[i].tip_icon,
            delete m.data.sections_v2[i].tip_title,
            "创作中心" == m.data.sections_v2[i].title &&
              (delete m.data.sections_v2[i].title,
              delete m.data.sections_v2[i].type);
        }),
          delete m.data.vip_section_v2,
          delete m.data.vip_section,
          m.data.hasOwnProperty("live_tip") && (m.data.live_tip = {}),
          m.data.hasOwnProperty("answer") && (m.data.answer = {}),
          (m.data.vip_type = 2),
          (m.data.vip.type = 2),
          (m.data.vip.status = 1),
          (m.data.vip.vip_pay_type = 1),
          (m.data.vip.due_date = 4669824160),
          (body = JSON.stringify(m));
      } catch (u) {
        console.log("bilibili mypage:" + u);
      }
      break;
    case /^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom/.test(
      $request.url
    ):
      try {
        let f = JSON.parse(body);
        (f.data.activity_banner_info = null), (body = JSON.stringify(f));
      } catch (g) {
        console.log("bilibili live broadcast:" + g);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity/.test(
      $request.url
    ):
      try {
        let v = JSON.parse(body);
        v.data && ((v.data.hash = "ddgksf2013"), (v.data.online.icon = "")),
          (body = JSON.stringify(v));
      } catch (_) {
        console.log("bilibili right corner:" + _);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/v2\/search\/square/.test(
      $request.url
    ):
      try {
        let $ = JSON.parse(body);
        ($.data = {
          type: "history",
          title: "搜索历史",
          search_hotword_revision: 2,
        }),
          (body = JSON.stringify($));
      } catch (k) {
        console.log("bilibili hot search:" + k);
      }
      break;
    case /https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\?/.test(
      $request.url
    ):
      try {
        let w = JSON.parse(body);
        (w.data.vip.type = 2),
          (w.data.vip.status = 1),
          (w.data.vip.vip_pay_type = 1),
          (w.data.vip.due_date = 4669824160),
          (body = JSON.stringify(w));
      } catch (x) {
        console.log("bilibili 1080p:" + x);
      }
      break;
    case /pgc\/page\/bangumi/.test($request.url):
      try {
        let O = JSON.parse(body);
        O.result.modules.forEach((t) => {
          t.style.startsWith("banner") &&
            (t.items = t.items.filter((t) => -1 != t.link.indexOf("play"))),
            t.style.startsWith("function") &&
              ((t.items = t.items.filter(
                (t) => -1 == t.blink.indexOf("www.bilibili.com")
              )),
              (1283 == t.module_id || 241 == t.module_id) && (t.items = [])),
            t.style.startsWith("tip") && (t.items = []);
        }),
          (body = JSON.stringify(O));
      } catch (P) {
        console.log("bilibili fanju:" + P);
      }
      break;
    case /pgc\/page\/cinema\/tab\?/.test($request.url):
      try {
        let W = JSON.parse(body);
        W.result.modules.forEach((t) => {
          t.style.startsWith("banner") &&
            (t.items = t.items.filter((t) => -1 != t.link.indexOf("play"))),
            t.style.startsWith("function") &&
              ((t.items = t.items.filter(
                (t) => -1 == t.blink.indexOf("www.bilibili.com")
              )),
              (1441 == t.module_id || 1284 == t.module_id) && (t.items = [])),
            t.style.startsWith("tip") && (t.items = []);
        }),
          (body = JSON.stringify(W));
      } catch (q) {
        console.log("bilibili video:" + q);
      }
      break;
    case /^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\?/.test(
      $request.url
    ):
      try {
        let E = JSON.parse(body);
        E &&
          E.hasOwnProperty("data") &&
          E.data.hasOwnProperty("common_equip") &&
          E.data.common_equip.hasOwnProperty("package_url"),
          (body = JSON.stringify(E));
      } catch (j) {
        console.log("bilibili skin:" + j);
      }
      break;
    case /^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list/.test(
      $request.url
    ):
      try {
        let B = JSON.parse(body);
        if (B.data && B.data.list)
          for (let I of B.data.list)
            (I.duration = 0),
              (I.begin_time = 2240150400),
              (I.end_time = 2240150400);
        body = JSON.stringify(B);
      } catch (R) {
        console.log("bilibili openad:" + R);
      }
      break;
    default:
      $done({});
  }
  $done({ body });
} else $done({});
