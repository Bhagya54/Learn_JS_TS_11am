let arr=[10,20,30]
//## splice(startIndex,deleteCount,...itemsToAdd)

//returning the deleted elements.
// console.log("Removed elements:",arr.splice(1,2))//[20,30]- deletion
// console.log("Updated arr after-arr.splice(1,2) ",arr)

// console.log("Removed elements:",arr.splice(0,2,100,200))//replace
// console.log("Updated arr after-arr.splice(0,2,100,200)",arr)//[100,200,30]


console.log("Removed elements:",arr.splice(0,2,100,200,300,400))//add
console.log("Updated arr after-arr.splice(0,2,100,200)",arr)//[100,200,300,400,30]