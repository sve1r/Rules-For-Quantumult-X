const version = 'V1.0.19';


var ddgksf2013 = JSON.parse($response.body);
if (-1 != $request.url.indexOf("mtop.cainiao.nbpresentation.protocol.homepage.get.cn"))
    ddgksf2013.data?.result?.dataList?.length > 0 && (ddgksf2013.data.result.dataList = ddgksf2013.data.result.dataList.filter(d => !("big_banner_area_v870" == d.type || "todo_list_v860" == d.type))); else if (-1 != $request.url.indexOf("mtop.cainiao.nbpresentation.homepage.merge.get.cn")) for (let i = 0; i < 4; i++) {
    let d = `mtop.cainiao.nbpresentation.protocol.homepage.get.cn@${i}`;
    ddgksf2013.data?.[d]?.data?.result?.dataList?.length > 0 && (ddgksf2013.data[d].data.result.dataList = ddgksf2013.data[d].data.result.dataList.filter(d => !("big_banner_area_v870" == d.type || "todo_list_v860" == d.type)))
} else -1 != $request.url.indexOf("mtop.cainiao.guoguo.nbnetflow.ads.mshow") ? (ddgksf2013.data["1308"] && delete ddgksf2013.data["1308"], ddgksf2013.data["1275"] && delete ddgksf2013.data["1275"], ddgksf2013.data["205"] && delete ddgksf2013.data["205"]) : -1 != $request.url.indexOf("mtop.cainiao.guoguo.nbnetflow.ads.index.cn") ? ddgksf2013.data?.result && (ddgksf2013.data.result = [{}]) : -1 != $request.url.indexOf("mtop.cainiao.adkeyword") && ddgksf2013.data?.result?.adHotKeywords && (ddgksf2013.data.result.adHotKeywords = []);
var body = JSON.stringify(ddgksf2013);
$done({body});