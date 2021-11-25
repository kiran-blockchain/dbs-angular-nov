function first(a, b) {
 let type= typeof a;
 console.log("Type of a is",type);
}

//var  or let or const
let second = function () {
    console.log("I am second")
};

//var  or let or const
const third = () => {
    console.log("I am Third");
};
first(10, 20);
first("kiran", "Kiran");

first(second, third);

first ({name:"Kiran"})
first([1,2,3])
// second();
// third();