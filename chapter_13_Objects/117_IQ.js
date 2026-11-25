const user = {
    name: "John",
    age: 30,
    "email id": "john@example.com"
}

console.log(user.name)
console.log(user["email id"])
console.log(user["age"])

//Dynamic Property access
let ageVal = "age"
console.log(user[ageVal])

//modify/add
user.age = 78;
user.city = "NY"
console.log(user.age)
console.log(user.city)

console.log(user)

console.log(Object.getOwnPropertyDescriptor(user, "city"))