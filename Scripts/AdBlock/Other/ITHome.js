const version = 'V1.0.1';

var obj=JSON.parse($response.body);obj.data.list=Object.values(obj.data.list).filter(a=>2!=a.feedContent.flag),$done({body:JSON.stringify(obj)});
