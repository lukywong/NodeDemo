function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayhello = function(){
      console.log("hello");
    };
}
function Print(){
    this.funcName = "Print";
    this.show = function(){
        var msg = [];
        for(var key in this){
            if(typeof(this[key]) != "function"){
                msg.push([key, ":", this[key]].join(""));
            }
        }
        console.log(msg.join(" "));
    };
}

function Student(name, age, grade, school){
    console.log(this);
    // Person.call(this, [].prototype.slice.call(this, arguments));
    Person.apply(this, arguments);
    console.log(this);
    Print.apply(this, arguments);
    console.log(this);
    this.grade = grade;
    this.school = school;
}
var p1 = new Person("jake", 10);
p1.sayhello();
var s1 = new Student("tom", 13, 6, "清华小学");
s1.show();
s1.sayhello();
console.log(s1.funcName);
