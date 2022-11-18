/*
version     v0.0.1
updatetime  2022-11-17
tgchannel   https://t.me/ddgksf2021
function    顺丰
author      response
*/

if ($request.url.indexOf("app/ad/queryInfoFlow") != -1) {
    var response = JSON.parse($response.body);
    response.obj = Object.values(response.obj).filter((item) => item.adverId==2833);
    $done({
        body: JSON.stringify(response),
    });
}