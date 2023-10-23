const version = "V1.0.16";

var respBody = JSON.parse($response.body);
-1 != $request.url.indexOf("mtop.cainiao.nbpresentation.protocol.homepage.get.cn")
  ? respBody.data?.result?.dataList?.length > 0 &&
    (respBody.data.result.dataList = respBody.data.result.dataList.filter(
      (d) => "big_banner_area_v870" != d.type
    ))
  : -1 != $request.url.indexOf("mtop.cainiao.guoguo.nbnetflow.ads.index.cn")
  ? respBody.data?.result && (respBody.data.result = [])
  : -1 != $request.url.indexOf("mtop.cainiao.adkeyword") &&
    respBody.data?.result?.adHotKeywords &&
    (respBody.data.result.adHotKeywords = []);
var body = JSON.stringify(respBody);
$done({ body });
