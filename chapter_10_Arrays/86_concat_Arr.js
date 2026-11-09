let a = [1, 2, 3]
let b = [5, 7, 8]
//[1,2,3,5,7,8]
console.log(a.concat(b))

//spread 
let d = [...a, ...b]
console.log(d)

//join
let result = ["pass", "fail", "skip"]
//pass|fail|skip
console.log(result.join("-"))