const version = 'V1.0.2';

let ua = $request.headers.rpid || $request.headers.Rpid;

let flag = ua.includes("10000012")
    || ua.includes("1000019");

if (flag) {
    $done({status: "HTTP/1.1 404 Not Found"});
} else {
    $done({});
}