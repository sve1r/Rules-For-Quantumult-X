const version = 'V1.0.0';

var obj = JSON.parse($response.body);
obj.data && (obj.data = Object.values(obj.data)
    .filter(o => !(320 == o.position_type || 710 == o.position_type || 50 == o.position_type))),
    $done({body: JSON.stringify(obj)});