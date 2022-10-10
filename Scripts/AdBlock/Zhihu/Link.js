//通知中心链接跳转到默认浏览器
let url = $request.url
let regex = /link.zhihu.com\/\?target=(.*?)&source/
let target = regex.exec(url)
let tmpurl = target[1]

let realurl = decodeURIComponent(tmpurl)
$notification.post('', '', realurl)
$done({})