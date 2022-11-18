

let response = JSON.parse($response.body);
if (response.biz) {
    response.biz = Object.values(response.biz).filter(item => !(item["type"]=="promoted"));
}
$done({ body: JSON.stringify(response) });