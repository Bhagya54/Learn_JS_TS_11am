let a = { status: "pass" }
console.log(`Way 1: Access the status value: ${a.status}`)
console.log(`Way 2: Access the status value: ${a["status"]}`)

let b = a;
console.log(b.status)

b.status = "fail"
console.log(a.status)//fail
console.log(b.status)//fail

if(b===a){
    console.log("both are pointing to same object")
}
else{
    console.log("both are not pointing to same object")
}