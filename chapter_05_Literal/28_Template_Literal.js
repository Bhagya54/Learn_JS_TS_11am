let lang = "Java Script"
console.log("I am learning " + lang)

console.log(`I am learning ${lang}`)

let fname = "bhagya"
let fullName = `Hi '${fname} kudupudi'`
console.log(fullName)

//api
let env = "staging"
let userId = 678;
env = "staging"
const apiUrl = `https://api-${env}.wipro.com/user/${userId}`;
console.log(`API Url: ${apiUrl}`)

//locator - WebTable - //table/tbody/tr[1]/td[2]
const rowIndex = 2
const colName = 5
const result = `[data-row="${rowIndex}"] [data-col="${colName}"]`
console.log(result)
//await page.locator(result).click();

//logs
const testName = "Login Test"
const status = "Failed"
const duration = 2.3
console.log(`${testName}: ${status} executed in ${duration} minutes`)