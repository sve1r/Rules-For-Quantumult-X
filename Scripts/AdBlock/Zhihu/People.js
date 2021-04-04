let body = $response.body
body = JSON.parse(body)
delete body['mcn_user_info']
body = JSON.stringify(body)
$done({body})