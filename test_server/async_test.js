var fs = require("fs");

var body = fs.readFile("async.txt", function(err, body){
  if (err) {
    console.log(err);
  } else{
    console.log(body.toString());
}
});
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
