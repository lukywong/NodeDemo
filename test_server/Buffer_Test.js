// var buf1 = new Buffer(3);
// console.log(buf1);
// buf1.fill();
// console.log(buf1);
//
// var buf = new Buffer(5);
// console.log(buf.length);
// buf.write("hello world");
// console.log(buf.toString());
// console.log(buf.length);
//
//
// var a = [];
// for (var i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[0](); // 10
//
// var buf = new Buffer([0,2,42,255]);
// console.log(buf[2])  // 打印出255

// var buf = new Buffer([12,257,258,259]);
// console.log(buf[1]); // 打印 1
// console.log(buf[2]); // 打印 2
// console.log(buf[3]); // 打印 3

// var buf = new Buffer([12,22.4,23.5,24.6]);
// console.log(buf[1]); // 打印 22
// console.log(buf[2]); // 打印 23
// console.log(buf[3]); // 打印 24

// var buf3 = new Buffer("世界你好");
// console.log(buf3);
// var buf4 = buf3.slice(3,9);
// console.log(buf4);
// console.log(buf4.toString())  // 打印“界你”，截取了全部buf3 3~9 的字节。

// console.log(Buffer.isEncoding("gb2312"));
// console.log(Buffer.isEncoding("utf8"));
// var buf = new ArrayBuffer(8);
// console.log(buf);
//
// // 用无符号8位整数类型数组包装ArrayBuffer对象
// var arr = new Uint8Array(buf, 1, 1);
// // 设置arr视图的第一个byte，也就是buf的第二个byte为12
// arr.set(0, 12);
// console.log(buf);

var buf = new Buffer("你好");
console.log(buf.toJSON());

var jsonObj = [ 228, 189, 160, 229, 165, 189 ];
var buf = new Buffer(jsonObj);
console.log(buf.toString());
