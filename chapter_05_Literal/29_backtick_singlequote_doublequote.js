// 3 ways to write a string in JS
let single = 'hello'   // single quote
let double = "hello"   // double quote
let back = `hello`     // backtick (template literal)
console.log(single === double, double === back) // true true - same string

// 1. Quotes inside a string
let s1 = "It's sunny"          // ' inside " - no escape needed
let s2 = 'He said "Hi"'        // " inside ' - no escape needed
let s3 = "It\"s sunny"        // same quote inside -> escape with \
let s4 = `It's "sunny"`        // backtick: both ' and " free
console.log(s1, s2, s3, s4)

// 2. Variables inside a string (interpolation) - ONLY backtick
let name = "jaasritha"
let age = 12
console.log('Name: ' + name + ', Age: ' + age) // ' -> concat with +
console.log("Name: " + name + ", Age: " + age) // " -> concat with +
console.log(`Name: ${name}, Age: ${age}`)      // ` -> ${} directly
console.log('Name: ${name}')                   // ' prints ${name} as plain text

// 3. Expressions inside ${} - ONLY backtick
let a = 10, b = 20
console.log(`Sum: ${a + b}`)                // Sum: 30
console.log(`Adult? ${age >= 18 ? "Yes" : "No"}`) // Adult? No

// 4. Multi-line strings - ONLY backtick
let poem = `Roses are red,
Violets are blue`
console.log(poem)

let poem2 = "Roses are red,\nViolets are blue" // ' or " need \n
console.log(poem2)
// let bad = "Roses are red,
// Violets are blue"   -> SyntaxError: Invalid or unexpected token

// 5. Escape characters work in all three
console.log('Tab:\tEnd')
console.log("New\nLine")
console.log(`Backslash: \\`)

// 6. typeof - all same
console.log(typeof single, typeof double, typeof back) // string string string

// Summary:
// '  and "  -> identical, pick one and stay consistent
// `         -> same + ${interpolation} + multi-line
