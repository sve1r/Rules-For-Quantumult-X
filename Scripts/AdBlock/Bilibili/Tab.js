let body = $response.body

body = JSON.parse(body)
body['data']['tab'] = [
    {
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

body['data']['top'] = [
    {
        "id": 176,
        "icon": "http://i0.hdslb.com/bfs/archive/d43047538e72c9ed8fd8e4e34415fbe3a4f632cb.png",
        "name": "消息",
        "uri": "bilibili://link/im_home",
        "tab_id": "消息Top",
        "pos": 1
    }
]

body['data']['bottom'] = [
    {
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

body = JSON.stringify(body)
$done({body})