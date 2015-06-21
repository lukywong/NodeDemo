function * gf() {
  console.log("start")
  var str = yield "hello";
  console.log("result", str);
};

var g = gf();
var g1 = g.next();
//console.log(g1.value);
g.next(g1.value);
