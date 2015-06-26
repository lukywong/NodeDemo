var fs = require('fs');

// pending is the 1st level function inside
var pending = (function () {
  var count = 0;
  return function (callback) {
    count++;
    console.log('count++, count=' + count);
    return function () {
      count--;
      console.log('count--, count=' + count);
      if (count === 0) {
        callback();
      }
    };
  };
}());

// call the pending function and return the deepest level function
// so done is a function in the deepest level.
var done = pending(function () {
  console.log('all is over');
});

fs.readFile('app.js', 'utf8', done());
// console.log(1);
// fs.readFile('async.txt', 'utf8', done());
// console.log(2);
