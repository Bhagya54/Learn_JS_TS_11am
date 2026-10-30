let arrA = [23, 67, 45, 12, 45, 90]
//indexOf - index of first matching element , -1 if in case the ele is not present
console.log(arrA.indexOf(45))
console.log(arrA.lastIndexOf(45));
console.log(arrA.indexOf(450))//-1

//includes - true/false
console.log(arrA.includes(45))//true
console.log(arrA.includes(125))//false

//find - Returns the value of the first element in the array where predicate is true, and undefined otherwise.
console.log(arrA.find(x => x > 40))//67
console.log(arrA.findLast(x => x > 40))//90
console.log(arrA.find(x => x > 400))//undefined


console.log(arrA.findIndex(x => x > 40))//1
console.log(arrA.findLastIndex(x => x > 40))//5

