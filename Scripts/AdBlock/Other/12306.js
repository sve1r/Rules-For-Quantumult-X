const version = "V1.0.22";

var obj = JSON.parse($request.body),
  advy = {};
"0007" == obj.placementNo
  ? ((advy.materialsList = [
      { billMaterialsId: "6491", filePath: "advy", creativeType: 1 },
    ]),
    (advy.advertParam = { skipTime: 1 }),
    (advy.code = "00"))
  : (advy =
      "G0054" == obj.placementNo
        ? { code: "00", materialsList: [{}] }
        : { code: "00", message: "无广告返回" }),
  $done({ body: JSON.stringify(advy) });
