let url = "https://staging.vwo.com/api/login?locked=false&retry=false"

//includes - true/false
console.log(url.includes("staging"))//true
console.log(url.includes("prod"))//false

//starts-with and end-with
console.log(url.startsWith("https"))
console.log(url.endsWith("true"))

//indexOf / lastIndexOf
console.log(url.indexOf("api"))//24
console.log(url.lastIndexOf("false"))//53

//search 
console.log(url.search("vwo"))
console.log(url.search(/vwo/))

