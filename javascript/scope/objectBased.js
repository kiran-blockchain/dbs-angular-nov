//Object Literal
var person1 = {
    name:"Ravi"
}

//By using new Object
var person2 = new Object({name:"kiran", age:"54"});
console.log(person1);
console.log(person2);


function Person(){
  this.name= "I am inside function"; // if you create the instance it will be avaibale
  var myname="kiran";//local to the funciton
}
var y = new Person();
console.log(y);