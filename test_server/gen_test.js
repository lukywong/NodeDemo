var co = require('co');
var test = function * (){
  console.log("start");
  var a = yield "a";
  console.log(a, " - inside");
  var b = yield "b";
  console.log(b, " - inside");
  var c = yield "c";
  console.log(c, " - inside");
  return "game over";
}

// test();
//
// var g = test();
// g.next();

// var g = test();
// var a = g.next();
// console.log(a.value);

// var g = test();
// var a = g.next();
// console.log(a.value);
// var b = g.next(a.value);

// var g = test();
// var a = g.next();
// console.log(a.value);
// var b = g.next(a.value);
// console.log(b.value);
// var c = g.next(b.value);
// console.log(c.value);
// var d = g.next(c.value);
// console.log(d.value);

test();
//co(test);
