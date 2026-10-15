// undefined - JS sets it: variable declared but no value given
// null      - YOU set it: "empty on purpose"

// 1. Declared, not assigned -> undefined
let noOfFlats;
console.log(noOfFlats) // undefined

// 2. Assigned null on purpose
let carName = null;
console.log(carName) // null

// 3. typeof
console.log(typeof noOfFlats) // undefined
console.log(typeof carName)   // object (old JS bug, null is NOT an object)

// 4. Missing object property -> undefined
let student = { name: "jaasritha" };
console.log(student.age) // undefined

// 5. Function with no return -> undefined
function sayHi() { }
console.log(sayHi()) // undefined

// 6. Missing function argument -> undefined
function greet(name) { console.log(name) }
greet() // undefined

// 7. Comparison
console.log(null == undefined)  // true  (loose: both mean "no value")
console.log(null === undefined) // false (strict: different types)

// 8. Math
console.log(null + 1)      // 1   (null becomes 0)
console.log(undefined + 1) // NaN (undefined becomes NaN)

// 9. Clearing a value
let user = "bhagya";
user = null; // reset on purpose
console.log(user) // null
