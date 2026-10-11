console.log(score)//ReferenceError: Cannot access 'score' before initialization- hoisted - declaration 
let score=123;
console.log(score)

{
//TDZ - Temporal Dead Zone
//console.log(score)  //ReferenceError: Cannot access 'score' before initialization
//score=50            //ReferenceError
//typeof score        //ReferenceError
//console.log(score)  //ReferenceError
//TDZ ends here as score has been initialized in the next step**


let score=123;
console.log(score)

}