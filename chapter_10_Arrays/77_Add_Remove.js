let arr = [12, 13, 14]
//add at the end - push()
//remove at the end - pop()
console.log("Length of the updated array", arr.push(23, 45));//returns the new length of the array-size of the updated array - 5
console.log("Updated array after push()", arr)

console.log("Removed element:", arr.pop());//return removed element - 45
console.log("Updated array after pop()", arr)//[12,13,14,23]

console.log("******************************")

//add the value at the beginning - unshift()
//remove value from the begining - shift()

//[ 12, 13, 14, 23 ]
console.log("Length of the updated array", arr.unshift(230, 120));
console.log("Updated array after unshift()", arr)//[230,120,12,13,14,23]

//[ 230, 120, 12, 13, 14, 23 ]
console.log("Removed element:", arr.shift(230, 120));//230
console.log("Updated array after shift()", arr)//[120,12,13,14,23]


//edge case
let arr1 = [];
console.log(arr1.pop())//undefined
//console.log(arr1.push(12))//1

console.log(arr1.shift())//undefined
console.log(arr1.unshift(120))//1
