var body = $response.body;
var response = JSON.parse(body);

if (response.Variables.data.threaddetail) {
  response.Variables.data.threaddetail.tagadv = '';
  response.Variables.data.threaddetail.threadapp_ad_video = [];
  response.Variables.data.threaddetail.pingyouadv = '';
  response.Variables.data.threaddetail.middleadv = '';
  response.Variables.data.threaddetail.bottomadv = '';
  response.Variables.data.threaddetail.appdetailadv = [];
}

$done({ body: JSON.stringify(response) });
