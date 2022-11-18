/**
 * 阿里云去广告
 * @type {any}
 */
let response = JSON.parse($response.body);
if (response.result) {
    response.result = Object.values(response.result)
        .filter(item => (item["appCode"]==="file" || item["appCode"]==="video"));
}
$done({ body: JSON.stringify(response) });