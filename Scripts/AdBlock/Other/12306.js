/*

https://t.me/ddgksf2013

12306 去除倒计时 made by ddgksf2013 on 2023-01-06

使用本重写，请务必在本地添加分流 host, ad.12306.cn, direct

[rewrite_local]

^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/12306.js

[mitm]

hostname = ad.12306.cn

*/

var __encode = "jsjiami.com",
  _a = {},
  _0xb483 = [
    "\x5F\x64\x65\x63\x6F\x64\x65",
    "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C",
  ];
(function (_0xd642x1) {
  _0xd642x1[_0xb483[0]] = _0xb483[1];
})(_a);
var __Oxf322f = [
  "\x62\x6F\x64\x79",
  "\x70\x61\x72\x73\x65",
  "\x6D\x61\x74\x65\x72\x69\x61\x6C\x73\x4C\x69\x73\x74",
  "\x6C\x65\x6E\x67\x74\x68",
  "\x66\x69\x6C\x65\x50\x61\x74\x68",
  "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x64\x75\x6A\x69\x6E\x2E\x6F\x72\x67\x2F\x62\x69\x6E\x67\x2F\x6D\x2E\x70\x68\x70",
  "\x73\x6B\x69\x70\x54\x69\x6D\x65",
  "\x61\x64\x76\x65\x72\x74\x50\x61\x72\x61\x6D",
  "\x62\x69\x6C\x6C\x49\x64",
  "\x62\x69\x6C\x6C\x4D\x61\x74\x65\x72\x69\x61\x6C\x73\x49\x64",
  "\x36\x34\x39\x31",
  "\x73\x74\x72\x69\x6E\x67\x69\x66\x79",
  "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64",
  "\x6C\x6F\x67",
  "\u5220\u9664",
  "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A",
  "\u671F\u5F39\u7A97\uFF0C",
  "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C",
  "\x6A\x73\x6A\x69\x61",
  "\x6D\x69\x2E\x63\x6F\x6D",
];
var ddgksf2013 = JSON[__Oxf322f[0x1]]($response[__Oxf322f[0x0]]);
if (ddgksf2013[__Oxf322f[0x2]]) {
  if (ddgksf2013[__Oxf322f[0x2]][__Oxf322f[0x3]] == 1) {
    ddgksf2013[__Oxf322f[0x2]][0x0][__Oxf322f[0x4]] = __Oxf322f[0x5];
    ddgksf2013[__Oxf322f[0x7]][__Oxf322f[0x6]] = 1;
    delete ddgksf2013[__Oxf322f[0x2]][0x0][__Oxf322f[0x8]];
    ddgksf2013[__Oxf322f[0x2]][0x0][__Oxf322f[0x9]] = __Oxf322f[0xa];
  } else {
    if (ddgksf2013[__Oxf322f[0x2]][__Oxf322f[0x3]] > 1) {
      ddgksf2013[__Oxf322f[0x2]] = [{}];
    }
  }
}
$done({ body: JSON[__Oxf322f[0xb]](ddgksf2013) });
(function (_0xddf1x2, _0xddf1x3, _0xddf1x4, _0xddf1x5, _0xddf1x6, _0xddf1x7) {
  _0xddf1x7 = __Oxf322f[0xc];
  _0xddf1x5 = function (_0xddf1x8) {
    if (typeof alert !== _0xddf1x7) {
      alert(_0xddf1x8);
    }
    if (typeof console !== _0xddf1x7) {
      console[__Oxf322f[0xd]](_0xddf1x8);
    }
  };
  _0xddf1x4 = function (_0xddf1x9, _0xddf1x2) {
    return _0xddf1x9 + _0xddf1x2;
  };
  _0xddf1x6 = _0xddf1x4(
    __Oxf322f[0xe],
    _0xddf1x4(_0xddf1x4(__Oxf322f[0xf], __Oxf322f[0x10]), __Oxf322f[0x11])
  );
  try {
    _0xddf1x2 = __encode;
    if (
      !(
        typeof _0xddf1x2 !== _0xddf1x7 &&
        _0xddf1x2 === _0xddf1x4(__Oxf322f[0x12], __Oxf322f[0x13])
      )
    ) {
      _0xddf1x5(_0xddf1x6);
    }
  } catch (e) {
    _0xddf1x5(_0xddf1x6);
  }
})({});
