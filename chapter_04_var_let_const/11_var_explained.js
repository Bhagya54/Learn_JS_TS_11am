var a = 10;
console.log("Global Scope:", a)

function sayHello() {
    console.log("Hello")

    var a = 20;//local scope
    console.log("Inside the Fn:", a)//20

    if (true) {
        var a = 30;//local scope
        console.log("Inside the If:", a)//30
    }

    for (var a = 50; a < 60; a++) {//a=60

    }

    //var is function-scoped - var ignores block scope (if, for, while),
    //After the block ends, the variable still exists because it belongs 
    //to the entire function,not the if/for block
    console.log("Outside the for loop:", a)//60
}
sayHello();
console.log("Outside the function", a)//10
