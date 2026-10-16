let rajKumar_age = 8
let rj_vote = rajKumar_age >= 18 ? "RJ can Vote" : "RJ cannot Vote"
console.log(rj_vote)

let actualStatusCode = 404
let expectedStatusCode = 200

let testResult = (actualStatusCode === expectedStatusCode) ? "PASS" : "FAIL";
console.log(testResult)

let environment = "staging";
let baseURL = (environment === "Prod") ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseURL)

let isCI = true
let browserMode = isCI ? "headless" : "headed"
console.log("Launching browser in", browserMode, "mode")

//Nested Ternary
let a = 500;
let b = 67;
let c = 1200;
//compare a and b and get the largest value
let result = a > b ? "a is the largest" : "b is the largest";

//compare a,b,c and get the largest value
// a>b && a>c -> a is the greatest - 
// b>c ->  b is the greatest : c is the greatest

let greaterValue = (a > b && a > c) ? "a is the greatest" : (b > c ? "b is the greatest" : "c is the greatest")
console.log(greaterValue)

let statusCode = 404
let category =  statusCode < 300 ? "Success" :
                statusCode < 400 ? "Redirect" :
                statusCode < 500 ? "Client error" : "Server error";
console.log(`Status ${statusCode} - Category ${category}`);