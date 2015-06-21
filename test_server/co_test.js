var co = require("co");
var fs = require("fs");
var thunkify = require("thunkify");

function fun(time,callback){
    setTimeout(function(){
        callback(null,"setTimeout time is - "+time);
    },time)
}

var func = thunkify(fun);

var f1 = function* (){
    console.log(yield func(2000));
    console.log(yield func(1000));
    console.log(yield func(500));
};

// 包装异步函数，让其符合co规范。
var readdir = thunkify(fs.readdir);
var readFile = thunkify(fs.readFile);

var f2 = function *(){

    // 得到当前目录下的文件名列表
    var fns = yield readdir(".");
    for(var i=0,len = fns.length;i<len;i++){
        var rs= yield readFile(fns[i]);
        console.log(rs);
    }

};

// f1();
// f2();
co(f1);
co(f2);
