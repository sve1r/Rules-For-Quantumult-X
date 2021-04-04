let body = $response.body

body = JSON.parse(body)
body['data']['sections_v2'] = [
    {
        "items": [
            {
                "id": 397,
                "title": "历史记录",
                "icon": "http://i0.hdslb.com/bfs/archive/8385323c6acde52e9cd52514ae13c8b9481c1a16.png",
                "uri": "bilibili://user_center/history"
            },
            {
                "id": 398,
                "title": "我的收藏",
                "icon": "http://i0.hdslb.com/bfs/archive/d79b19d983067a1b91614e830a7100c05204a821.png",
                "uri": "bilibili://user_center/favourite"
            },
            {
                "id": 396,
                "title": "离线缓存",
                "icon": "http://i0.hdslb.com/bfs/archive/5fc84565ab73e716d20cd2f65e0e1de9495d56f8.png",
                "uri": "bilibili://user_center/download"
            },
            {
                "id": 399,
                "title": "稍后再看",
                "icon": "http://i0.hdslb.com/bfs/archive/63bb768caa02a68cb566a838f6f2415f0d1d02d6.png",
                "need_login": 1,
                "uri": "bilibili://user_center/watch_later"
            }
        ],
        "style": 1,
        "button": {}
    },
    {
        "title": "创作中心",
        "items": [
            {
                "need_login": 1,
                "display": 1,
                "id": 171,
                "title": "创作首页",
                "global_red_dot": 1,
                "uri": "bilibili://uper/homevc",
                "icon": "http://i0.hdslb.com/bfs/archive/d3aad2d07538d2d43805f1fa14a412d7a45cc861.png"
            },
        ],
        "style": 1,
        "button": {
            "icon": "http://i0.hdslb.com/bfs/archive/205f47675eaaca7912111e0e9b1ac94cb985901f.png",
            "style": 1,
            "url": "bilibili://uper/user_center/archive_selection",
            "text": "发布"
        }
    },

    {
        //"title": "其他设置",
        "items": [
            {
                "id": 410,
                "title": "设置",
                "icon": "http://i0.hdslb.com/bfs/archive/e932404f2ee62e075a772920019e9fbdb4b5656a.png",
                "uri": "bilibili://user_center/setting"
            }
        ],
        "style": 2,
        "button": {}
    }
],


    body = JSON.stringify(body)
$done({body})