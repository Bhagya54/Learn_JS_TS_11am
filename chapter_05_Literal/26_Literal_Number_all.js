// JS has ONE number type (64-bit float) + BigInt for huge integers

// 1. Integers
let count = 23
let negative = -45
let zero = 0
let negZero = -0
console.log(count, negative, zero, negZero) // 23 -45 0 -0

// 2. Decimals (floating point)
let pi = 3.14
let half = .5
let price = 10.0 // same as 10
console.log(pi, half, price) // 3.14 0.5 10

// 3. Exponent (scientific notation)
let big = 1e6     // 1000000
let small = 2.5e-3 // 0.0025
console.log(big, small)

// 4. Other bases
let hx = 0xff      // hexadecimal -> 255
let octalValue = 0o77 // octal -> 63
let bin = 0b1010   // binary -> 10
console.log(hx, octalValue, bin)

// 5. Numeric separator (readability only)
let salary = 1_000_000
console.log(salary) // 1000000

// 6. Special values
let inf = Infinity
let negInf = -Infinity
let nanValue = NaN // "Not a Number" but typeof is number
console.log(1 / 0, -1 / 0, "abc" * 2) // Infinity -Infinity NaN
console.log(NaN === NaN) // false - NaN never equals itself
console.log(Number.isNaN(nanValue)) // true - correct way to check

// 7. Limits
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991
console.log(Number.MAX_VALUE)        // 1.7976931348623157e+308
console.log(Number.MIN_VALUE)        // 5e-324 (smallest positive)
console.log(Number.EPSILON)          // 2.220446049250313e-16

// 8. Float precision gotcha
console.log(0.1 + 0.2)          // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2)) // "0.30"

// 9. BigInt - integers bigger than MAX_SAFE_INTEGER
let huge = 9007199254740993n
console.log(huge + 1n)    // 9007199254740994n
console.log(typeof huge)  // bigint (separate type!)
// huge + 1  -> TypeError: cannot mix BigInt and number

// 10. Number object (avoid - use plain literals)
let objNum = new Number(5)
console.log(typeof objNum) // object

// typeof check
console.log(typeof count)  // number
console.log(typeof pi)     // number
console.log(typeof hx)     // number
console.log(typeof inf)    // number
console.log(typeof nanValue) // number
