let result = ["pass", "fail", "skip"]
console.log(Array.isArray(result))//true
console.log(Array.isArray("a"))//false

let arr = [80, 90, 70]
console.log(arr.every(v => v > 60))//true
console.log(arr.every(v => v > 80))//false


console.log(arr.some(v => v > 80))//true

//playwright - api testing - 200 - 299
let result1 = [200, 201, 404].every(statusCode => statusCode >= 200 && statusCode < 300)
console.log("All api testcases are pass?", result1)

console.log(`All api testcases are pass?, ${result1}`)