/***********************************************
> 应用名称：高德地图☆净化
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2022-01-09
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
***********************************************/

const version = "V1.0.14";

var __encode = "jsjiami.com",
  _a = {},
  _0xb483 = [
    "\x5F\x64\x65\x63\x6F\x64\x65",
    "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C",
  ];
(function (_0xd642x1) {
  _0xd642x1[_0xb483[0]] = _0xb483[1];
})(_a);
var __Oxf3253 = [
  "\x62\x6F\x64\x79",
  "\x70\x61\x72\x73\x65",
  "\x76\x61\x6C\x75\x65\x61\x64\x64\x65\x64\x2F\x61\x6C\x69\x6D\x61\x6D\x61\x2F\x73\x70\x6C\x61\x73\x68\x5F\x73\x63\x72\x65\x65\x6E",
  "\x69\x6E\x64\x65\x78\x4F\x66",
  "\x75\x72\x6C",
  "\x64\x61\x74\x61",
  "\x61\x64",
  "\x64\x69\x73\x70\x6C\x61\x79\x5F\x74\x69\x6D\x65",
  "\x73\x65\x74\x74\x69\x6E\x67",
  "\x73\x65\x74",
  "\x73\x74\x61\x72\x74\x5F\x74\x69\x6D\x65",
  "\x63\x72\x65\x61\x74\x69\x76\x65",
  "\x65\x6E\x64\x5F\x74\x69\x6D\x65",
  "\x73\x74\x72\x69\x6E\x67\x69\x66\x79",
  "\x66\x61\x61\x73\x2F\x61\x6D\x61\x70\x2D\x6E\x61\x76\x69\x67\x61\x74\x69\x6F\x6E\x2F\x6D\x61\x69\x6E\x2D\x70\x61\x67\x65",
  "\x63\x61\x72\x64\x4C\x69\x73\x74",
  "\x64\x61\x74\x61\x54\x79\x70\x65",
  "\x4C\x6F\x67\x69\x6E\x43\x61\x72\x64",
  "\x66\x69\x6C\x74\x65\x72",
  "\x76\x61\x6C\x75\x65\x73",
  "\x70\x75\x6C\x6C\x33",
  "\x6D\x73\x67\x73",
  "\x70\x72\x6F\x66\x69\x6C\x65\x2F\x69\x6E\x64\x65\x78\x2F\x6E\x6F\x64\x65",
  "\x74\x69\x70\x44\x61\x74\x61",
  "\x4D\x79\x4F\x72\x64\x65\x72\x43\x61\x72\x64",
  "\x47\x64\x52\x65\x63\x6F\x6D\x6D\x65\x6E\x64\x43\x61\x72\x64",
  "\x6E\x65\x77\x5F\x68\x6F\x74\x77\x6F\x72\x64",
  "\x68\x65\x61\x64\x65\x72\x5F\x68\x6F\x74\x77\x6F\x72\x64",
  "\x77\x73\x2F\x6D\x73\x67\x62\x6F\x78\x2F\x70\x75\x6C\x6C",
  "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64",
  "\x6C\x6F\x67",
  "\u5220\u9664",
  "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A",
  "\u671F\u5F39\u7A97\uFF0C",
  "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C",
  "\x6A\x73\x6A\x69\x61",
  "\x6D\x69\x2E\x63\x6F\x6D",
];
var obj = JSON[__Oxf3253[0x1]]($response[__Oxf3253[0x0]]);
if ($request[__Oxf3253[0x4]][__Oxf3253[0x3]](__Oxf3253[0x2]) != -1) {
  if (obj[__Oxf3253[0x5]] && obj[__Oxf3253[0x5]][__Oxf3253[0x6]]) {
    for (let item of obj[__Oxf3253[0x5]][__Oxf3253[0x6]]) {
      item[__Oxf3253[0x9]][__Oxf3253[0x8]][__Oxf3253[0x7]] = 0;
      item[__Oxf3253[0xb]][0x0][__Oxf3253[0xa]] = 2240150400;
      item[__Oxf3253[0xb]][0x0][__Oxf3253[0xc]] = 2240150400;
    }
  }
  $done({ body: JSON[__Oxf3253[0xd]](obj) });
} else {
  if ($request[__Oxf3253[0x4]][__Oxf3253[0x3]](__Oxf3253[0xe]) != -1) {
    if (obj[__Oxf3253[0x5]] && obj[__Oxf3253[0x5]][__Oxf3253[0xf]]) {
      obj[__Oxf3253[0x5]][__Oxf3253[0xf]] = Object[__Oxf3253[0x13]](
        obj[__Oxf3253[0x5]][__Oxf3253[0xf]]
      )[__Oxf3253[0x12]]((item) => {
        return item[__Oxf3253[0x10]] == __Oxf3253[0x11];
      });
    }
    if (
      obj[__Oxf3253[0x5]] &&
      obj[__Oxf3253[0x5]][__Oxf3253[0x14]] &&
      obj[__Oxf3253[0x5]][__Oxf3253[0x14]][__Oxf3253[0x15]]
    ) {
      obj[__Oxf3253[0x5]][__Oxf3253[0x14]][__Oxf3253[0x15]] = [];
    }
    $done({ body: JSON[__Oxf3253[0xd]](obj) });
  } else {
    if ($request[__Oxf3253[0x4]][__Oxf3253[0x3]](__Oxf3253[0x16]) != -1) {
      delete obj[__Oxf3253[0x5]][__Oxf3253[0x17]];
      if (obj[__Oxf3253[0x5]] && obj[__Oxf3253[0x5]][__Oxf3253[0xf]]) {
        obj[__Oxf3253[0x5]][__Oxf3253[0xf]] = Object[__Oxf3253[0x13]](
          obj[__Oxf3253[0x5]][__Oxf3253[0xf]]
        )[__Oxf3253[0x12]]((item) => {
          return (
            item[__Oxf3253[0x10]] == __Oxf3253[0x18] ||
            item[__Oxf3253[0x10]] == __Oxf3253[0x19]
          );
        });
      }
      $done({ body: JSON[__Oxf3253[0xd]](obj) });
    } else {
      if ($request[__Oxf3253[0x4]][__Oxf3253[0x3]](__Oxf3253[0x1a]) != -1) {
        if (obj[__Oxf3253[0x5]] && obj[__Oxf3253[0x5]][__Oxf3253[0x1b]]) {
          obj[__Oxf3253[0x5]][__Oxf3253[0x1b]] = [];
        }
        $done({ body: JSON[__Oxf3253[0xd]](obj) });
      } else {
        if ($request[__Oxf3253[0x4]][__Oxf3253[0x3]](__Oxf3253[0x1c]) != -1) {
          if (obj[__Oxf3253[0x15]]) {
            obj[__Oxf3253[0x15]] = [];
          }
          if (obj[__Oxf3253[0x14]] && obj[__Oxf3253[0x14]][__Oxf3253[0x15]]) {
            obj[__Oxf3253[0x14]][__Oxf3253[0x15]] = [];
          }
          $done({ body: JSON[__Oxf3253[0xd]](obj) });
        } else {
          $done({});
        }
      }
    }
  }
}
(function (_0x39d1x3, _0x39d1x4, _0x39d1x5, _0x39d1x6, _0x39d1x7, _0x39d1x8) {
  _0x39d1x8 = __Oxf3253[0x1d];
  _0x39d1x6 = function (_0x39d1x9) {
    if (typeof alert !== _0x39d1x8) {
      alert(_0x39d1x9);
    }
    if (typeof console !== _0x39d1x8) {
      console[__Oxf3253[0x1e]](_0x39d1x9);
    }
  };
  _0x39d1x5 = function (_0x39d1xa, _0x39d1x3) {
    return _0x39d1xa + _0x39d1x3;
  };
  _0x39d1x7 = _0x39d1x5(
    __Oxf3253[0x1f],
    _0x39d1x5(_0x39d1x5(__Oxf3253[0x20], __Oxf3253[0x21]), __Oxf3253[0x22])
  );
  try {
    _0x39d1x3 = __encode;
    if (
      !(
        typeof _0x39d1x3 !== _0x39d1x8 &&
        _0x39d1x3 === _0x39d1x5(__Oxf3253[0x23], __Oxf3253[0x24])
      )
    ) {
      _0x39d1x6(_0x39d1x7);
    }
  } catch (e) {
    _0x39d1x6(_0x39d1x7);
  }
})({});
