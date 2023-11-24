let obj = JSON.parse($response.body);

delete obj.adSlots, $done({body: JSON.stringify(obj)});