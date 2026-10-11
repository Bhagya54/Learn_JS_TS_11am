var a = 10;
let b = 20;
const c = 30;

var browser = "chrome"
var browser = "firefox"//redeclaration
browser = "safari"//reassignment

console.log(browser)

var testcase = ["LoginTest", "RegisterTest", "CheckoutTest"]
for (var i = 0; i < testcase.length; i++) {//i=3
    console.log("Running Test:", testcase[i])
}

console.log("Loop Counter get leaked outside: " + i)
