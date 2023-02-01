const version = "V1.0.18";

var body = JSON.parse($response.body);
body.materialsList &&
  (1 == body.materialsList.length
    ? ((body.materialsList[0].filePath = "https://api.dujin.org/bing/m.php"),
      (body.advertParam.skipTime = 1),
      delete body.materialsList[0].billId,
      (body.materialsList[0].billMaterialsId = "6491"))
    : body.materialsList.length > 1 && (body.materialsList = [{}])),
  $done({ body: JSON.stringify(body) });
