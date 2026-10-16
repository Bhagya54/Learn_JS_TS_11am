console.log(`42=="42": ${42 == "42"}`)
console.log(`42==="42": ${42 === "42"}`)

console.log(`0=="": ${0 == ""}`)//true - ""== converted to 0
console.log(`0==="": ${0 === ""}`)//false 
//false - 0,"",''

console.log(`true==1: ${true == 1}`)//true
console.log(`true=="1": ${true == "1"}`)//true
console.log(`false==0: ${false == 0}`)//true
console.log(`false=="0": ${false == "0"}`)//true
console.log('false==""', false == "")//true
console.log('true==2', true == 2)//false
console.log('true===1', true === 1)//false
console.log('true===2', true === 2)//false