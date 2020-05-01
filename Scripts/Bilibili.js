const path1 = "/x/resource/show/tab?access_key";
const path2 = "/x/v2/feed/index?access_key";
const path3 = "/x/v2/account/mine?access_key";
const path4 = "/x/v2/view?access_key";
const path5 = "/x/v2/view/material?access_key";
const path6 = "/x/v2/reply/main?access_key";
const path7 = "/x/v2/rank?access_key";
const path8 = "/x/v2/show/popular/index";
const path9 = "/xlive/app-room/v1/index/getInfoByRoom?access_key";
const path10 = "/x/v2/account/teenagers/status?access_key";
const path11 = "/x/v2/account/mine/ipad?access_key";

let url = $request.url;
let body = JSON.parse($response.body);

if (url.indexOf(path1) != -1) {
  body.data.tab = [{
      "id": 39,
      "name": "直播",
      "uri": "bilibili://live/home",
      "tab_id": "直播tab",
      "pos": 1
    },
    {
      "id": 40,
      "name": "推荐",
      "uri": "bilibili://pegasus/promo",
      "tab_id": "推荐tab",
      "pos": 2,
      "default_selected": 1
    },
    {
      "id": 41,
      "name": "热门",
      "uri": "bilibili://pegasus/hottopic",
      "tab_id": "热门tab",
      "pos": 3
    },
    {
      "id": 42,
      "name": "追番",
      "uri": "bilibili://pgc/home",
      "tab_id": "追番Tab",
      "pos": 4
    },
    {
      "id": 151,
      "name": "影视",
      "uri": "bilibili://pgc/cinema-tab",
      "tab_id": "影视tab",
      "pos": 5,
    },
  ]
  body.data.top = [{
    "id": 176,
    "icon": "http://i0.hdslb.com/bfs/archive/d43047538e72c9ed8fd8e4e34415fbe3a4f632cb.png",
    "name": "消息",
    "uri": "bilibili://link/im_home",
    "tab_id": "消息Top",
    "pos": 1
  }]
  body.data.bottom = [{
      "id": 177,
      "icon": "http://i0.hdslb.com/bfs/archive/63d7ee88d471786c1af45af86e8cb7f607edf91b.png",
      "icon_selected": "http://i0.hdslb.com/bfs/archive/e5106aa688dc729e7f0eafcbb80317feb54a43bd.png",
      "name": "首页",
      "uri": "bilibili://main/home/",
      "tab_id": "首页Bottom",
      "pos": 1
    },
    {
      "id": 178,
      "icon": "http://i0.hdslb.com/bfs/archive/9c453a54eb83f5140cd098bf2e8ed8a599edc7fe.png",
      "icon_selected": "http://i0.hdslb.com/bfs/archive/79d29e6ac3b6e52652881b050e63988e2038130f.png",
      "name": "频道",
      "uri": "bilibili://pegasus/channel/",
      "tab_id": "频道Bottom",
      "pos": 2
    },
    {
      "id": 179,
      "icon": "http://i0.hdslb.com/bfs/archive/86dfbe5fa32f11a8588b9ae0fccb77d3c27cedf6.png",
      "icon_selected": "http://i0.hdslb.com/bfs/archive/25b658e1f6b6da57eecba328556101dbdcb4b53f.png",
      "name": "动态",
      "uri": "bilibili://following/home/",
      "tab_id": "动态Bottom",
      "pos": 3
    },
    {
      "id": 181,
      "icon": "http://i0.hdslb.com/bfs/archive/4b0b2c49ffeb4f0c2e6a4cceebeef0aab1c53fe1.png",
      "icon_selected": "http://i0.hdslb.com/bfs/archive/a54a8009116cb896e64ef14dcf50e5cade401e00.png",
      "name": "我的",
      "uri": "bilibili://user_center/",
      "tab_id": "我的Bottom",
      "pos": 4
    }
  ]
}

if (url.indexOf(path2) != -1) {
  let blacklist = [];
  body.data.items = body.data.items.filter(function(item) {
    if (['ad_web_s', 'ad_web', 'live', 'banner', 'search_subscribe'].includes(item.card_goto)) {
      return false;
    }
    if (item.hasOwnProperty('ad_info')) {
      return false;
    }
    if (blacklist.includes(item.args.up_name)) {
      return false;
    }
    if (blacklist.includes(item.args.rname)) {
      return false;
    }
    for (let word of blacklist) {
      if (item.title.indexOf(word) != -1) {
        return false;
      }
    }
    return true;
  });
}

if (url.indexOf(path3) != -1) {
  body.data.sections = [{
    "title": "个人中心",
    "items": [{
        "title": "历史记录",
        "icon": "http://i0.hdslb.com/bfs/archive/ae502b4b69b6a3b287ea59b1552859332e59c277.png",
        "uri": "bilibili://user_center/history"
      },
      {
        "title": "我的收藏",
        "icon": "http://i0.hdslb.com/bfs/archive/1e6b0583257a086f40779c10ad7e2fcd72984463.png",
        "uri": "bilibili://user_center/favourite"
      },
      {
        "title": "稍后再看",
        "icon": "http://i0.hdslb.com/bfs/archive/56893a05f41d7c503f7f1f5b67e9ee2add8581fa.png",
        "uri": "bilibili://user_center/watch_later"
      },
      {
        "title": "创作首页",
        "icon": "http://i0.hdslb.com/bfs/archive/d3aad2d07538d2d43805f1fa14a412d7a45cc861.png",
        "uri": "bilibili://uper/homevc"
      },
      {
        "title": "投稿",
        "icon": "http://i0.hdslb.com/bfs/archive/86a8fdc40f4a5842d9b6454dead1f049db64ffc5.png",
        "uri": "/uper/user_center/add_archive"
      }
    ]
  }]
}

if (url.indexOf(path4) != -1) {
  if (body.data.hasOwnProperty('relates')) {
    body.data.relates = body.data.relates.filter(function(item) {
      if (item.hasOwnProperty('is_ad')) {
        return false;
      }
      return true;
    });
  }
  delete body.data.cms;
}


if (url.indexOf(path5) != -1) {
  body.data = null;
}

if (url.indexOf(path6) != -1) {
  if (body.hasOwnProperty('data')) {
    delete body.data.notice;
  }
}

if (url.indexOf(path7) != -1) {
  let blacklist = [];
  body.data = body.data.filter(function(item) {
    if (blacklist.includes(item.name)) {
      return false;
    }
    return true;
  });
}

if (url.indexOf(path8) != -1) {
  let blacklist = [];
  body.data = body.data.filter(function(item) {
    if (blacklist.includes(item.right_desc_1) || item.card_type !== "small_cover_v5") {
      return false;
    }
    return true;
  });
}

if (url.indexOf(path9) != -1) {
  body.data.activity_banner_info = null;
}

if (url.indexOf(path10) != -1) {
  body.data.teenagers_status = 0;
}

if (url.indexOf(path11) != -1) {
  body.data.ipad_upper_sections = [{
      "title": "投稿",
      "icon": "http://i0.hdslb.com/bfs/archive/86a8fdc40f4a5842d9b6454dead1f049db64ffc5.png",
      "uri": "/uper/user_center/add_archive"
    },
    {
      "title": "稿件管理",
      "icon": "http://i0.hdslb.com/bfs/archive/eec4a9f65dad19b5e92130d236ba3bf46248309e.png",
      "uri": "/uper/user_center/archive_list"
    },
    {
      "title": "创作中心",
      "icon": "http://i0.hdslb.com/bfs/archive/f4da9a7940d29f6b01676b039f685053f77615fd.png",
      "uri": "/uper/homevc"
    }
  ];
  body.data.ipad_sections = [{
      "title": "历史记录",
      "icon": "http://i0.hdslb.com/bfs/archive/cdfb36f4835f3f09f8c9d2fef20c025c84d96a66.png",
      "uri": "bilibili://user_center/history"
    },
    {
      "title": "我的收藏",
      "icon": "http://i0.hdslb.com/bfs/archive/a1a5aa50956e0c7d75f6f89bb4b93da340bf4a0d.png",
      "uri": "bilibili://user_center/favourite"
    },
    {
      "title": "稍后再看",
      "icon": "http://i0.hdslb.com/bfs/archive/3fa793dda7a6236d03cf0dec8507bbffe1d4e8ae.png",
      "uri": "bilibili://user_center/watch_later"
    },
    {
      "title": "我的消息",
      "icon": "http://i0.hdslb.com/bfs/archive/b2b4e1c010ea57cfe600c312b11c2909d77b46f1.png",
      "uri": "bilibili://link/im_home"
    },
    {
      "title": "设置",
      "icon": "http://i0.hdslb.com/bfs/archive/3aa6fa00d4718be2a9a4f0c608ea04ddb7407d15.png",
      "uri": "bilibili://user_center/setting"
    }
  ]
}

$done({
  body: JSON.stringify(body)
});
