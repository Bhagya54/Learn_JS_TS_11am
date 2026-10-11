console.log(greeting)//undefined - declaration + initialization - undefined
var greeting = "Hello!"
console.log(greeting)//="Hello!"


//Behind the scene
// var greeting = undefined //<--- hoisted with undefined** > declaration + initialization - undefined
// console.log(greeting);//<--- prints **undefined**
// greeting = "Hello!";// <----- reassigned the value
// console.log(greeting);//<--- prints **"Hello!"**

console.log(a)//hoisted - undefined
var a = 10;
console.log(a)//10