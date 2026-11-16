function getStatus(code){
    if(code>=200 && code <300) return "success"
    if(code>=400 && code <500) return "Client error"
    if(code>=500) return "server error"
}
console.log(getStatus(200));
console.log(getStatus(404));
console.log(getStatus(500));

console.log("***********************")

function logTest(name){
    console.log(`Running ${name}`)
    //no return statement
}
let result=logTest("Login")//Running Login
console.log(result)//undefined

console.log("***********************")

//Normal functions are hoisted
const c=greet('Alice')
console.log(c)

function greet(name){
    return `Hello ${name}`
}

console.log("***********************")

// Function expressions assigned to a const variable cannot be called
// before initialization because the variable is in the Temporal Dead Zone (TDZ).
// ReferenceError: Cannot access 'sayHi' before initialization.

sayHi("Bob")

const sayHi=function (name){
    return `Hi ${name}`
}