const user = {
    name: "John",
    age: 30,
    city: "NY"
}

//Basic Destructuring
//const {name,age}=user
// let { city, age } = user
// //console.log(name)
// console.log(age)
// console.log(city)

//rename the variable while destructuring
const { name: userName, age: ageVal } = user
console.log(userName)
console.log(ageVal)

//Assign default Value if the property does not exist
//const countryName=user.countryName!==undefined?user.countryName:"USA"

const { countryName = "USA" } = user
console.log(countryName)

console.log(user)

const { city = "Tokyo" } = user;
console.log(city)
//const city=user.city!==undefined?user.city:"Tokyo"

const data = {
    user: {
        name: "John",
        address: {
            city: "NYC"
        }
    }
}

console.log(data.user.address)