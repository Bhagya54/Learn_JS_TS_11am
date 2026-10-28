//Browser
let browser = ["Chrome", "Firefox", "Safari"]

//Array Constructor
let score1 = new Array(2); // size as 2
console.log(score1)

let score2 = new Array(1, 2, 3)
console.log(score2)//[1,2,3]

let result = new Array("pass")
console.log(result)//["pass"]

let numbers = new Array(100, 200, 300)
console.log(numbers[3])//undefined

//Using Array.of()
let test = Array.of("Login", "Register", "Checkout")
console.log(test)

//Using Array.from()
let test1 = Array.from("Login")
console.log(test1)//['L','o','g','i','n']

let test2 = Array.from("12334")
console.log(test2)//['L','o','g','i','n']