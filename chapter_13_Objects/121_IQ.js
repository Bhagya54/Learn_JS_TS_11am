const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj))//[ 'a', 'b', 'c' ]
console.log(Object.values(obj))
console.log(Object.entries(obj))

//for .. of - arrays,strings
//for .. in - js objects


console.log(obj.a)//1
console.log(obj["a"])

let allKeys = Object.keys(obj);
for (let key of allKeys) {
    console.log(`Using for of -> Key : ${key} - Value - ${obj[key]}`)
}

for (let key in obj) {
    console.log(`Using for in -> Key : ${key} - Value - ${obj[key]}`)
}

//for..each - [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
Object.entries(obj).forEach(([key,val])=>{
    console.log(`Using for each -> Key : ${key} - Value - ${val}`)
})