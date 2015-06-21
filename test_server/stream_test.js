var fs = require('fs');
var reader = fs.createReadStream("async.txt");
console.log(reader);

var Readable = require("stream");
var reader = new Readable({objectMode: true, encoding:"utf16le", highWaterMark: 1024*10});

console.log(reader);
