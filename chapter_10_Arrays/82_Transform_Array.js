let scores = [45, 85, 91, 60, 73]
//map - Calls a defined callback function on each element of an array, 
////It will always returns same number of values that you have in the original array,
// and returns an array that contains the results.
let grades = scores.map(score => (score > 70 ? "PASS" : "FAIL"))
console.log(grades)

//filter- Returns the elements of an array that meet the condition specified in a callback function.
let passedGrades = scores.filter(score => score > 70);
console.log(passedGrades)

//reduce - Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result 
//45,85,91,60,73
let totalSum = scores.reduce((a, b) => a + b, 5)
console.log(totalSum)
/*
5+45=50
50+85=135
135+91= 226
226+60=286
286+73=359
*/

//flat:Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.


let nested = [1, [1, [2, [4, 3]]]]
let flatArr = nested.flat(Infinity)
console.log(flatArr)

