//Normal Function - Type 4
function greet1(name) {
    return `hello ${name}`
}

let c = greet1("Hari")
console.log("Using Normal Fn :", c)

// arrow fn
const greet2=(name)=>`hello ${name}`
console.log("Usin Arrow Fn:",greet2("Sekhar"))

/*
- Remove 'function' keyword
- Remove 'return' keyword
- Remove 'name of function'
- Remove {} curly braces
- use =>

*/

const triple=n=>n**3
console.log(`Triple value is: ${triple(7)}`)

const sum= (a,b)=> a+b
console.log(sum(12,10))


const printAge=(age)=>console.log("Age is:",age)
printAge(23)