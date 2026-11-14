//Normal Function - Type 4
function greet1(name) {
    return `hello ${name}`
}

let c = greet1("Hari")
console.log("Using Normal Fn :", c)

const greet2 = function (name) {
    return `hello ${name}`
}

let d = greet2("giri")
console.log("Using Fn Exp:", d)