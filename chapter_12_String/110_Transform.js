let str = " Hello World "
console.log("String Original Value:", str)
console.log("Trimmed Value:", str.trim())
console.log("Lowercase Value:", str.trim().toLowerCase())
console.log("Upper case Value:", str.trim().toUpperCase())

let msg = "Test:FAIL.Retry:FAIL"
console.log(msg.replace("FAIL", "PASS"))//first occurance
console.log(msg.replaceAll("FAIL", "PASS"))//all occurances
console.log(msg.replace(/FAIL/g, "PASS"))// all occurances . /g - global flag

let url = "https://staging.vwo.com/env=qa&&prom=qa"
console.log(url.replace(/qa/g, "prod"))

//concat
console.log("Hello".concat(" World"))
console.log("Hello" + " World")
console.log(`Hello World`)

//split
let res="pass,fail,skip"
let resArr=res.split(",")
console.log(resArr)

//join
let s="test:pass:pass".split(":").join("_")
console.log(s)