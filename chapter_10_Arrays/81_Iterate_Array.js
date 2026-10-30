let tests = ["login", "checkout", "search"]
console.log("----Normal for loop-----")
for (let i = 0; i < tests.length; i++) {
    console.log("Using normal for loop:", tests[i])
}

console.log("----Using for of-----")
for (let test of tests) {
    console.log("Using of:", test)
}

console.log("----Using for each-----")
tests.forEach((item, index) => {
    console.log(`Index:${index} - Value :${item}`)
})

console.log("----Using for in-----")
for (let index in tests) {
    console.log("Using for in:", tests[index])
}