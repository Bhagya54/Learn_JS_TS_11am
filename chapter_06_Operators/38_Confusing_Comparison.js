// == (loose) converts types before comparing, === (strict) compares type + value

// 1. Strings and numbers
console.log('"1"==1', "1" == 1)//true - "1" becomes 1
console.log('"1"===1', "1" === 1)//false - string vs number
console.log('" "==0', " " == 0)//true - whitespace string becomes 0
console.log('"\\n"==0', "\n" == 0)//true - newline string becomes 0
console.log('"abc"==NaN', "abc" == NaN)//false - NaN never equals anything

// 2. Booleans (true -> 1, false -> 0)
console.log('true==1', true == 1)//true
console.log('true===1', true === 1)//false
console.log('true==2', true == 2)//false - true is 1, not "truthy"
console.log('"true"==true', "true" == true)//false - "true" -> NaN, true -> 1
console.log('"0"==false', "0" == false)//true - both become 0
console.log('"1"==true', "1" == true)//true - both become 1

// 3. Not transitive: a==b and b==c but a!=c
console.log('""==0', "" == 0)//true
console.log('0=="0"', 0 == "0")//true
console.log('""=="0"', "" == "0")//false - both strings, no conversion

// 4. null and undefined
console.log('null==undefined', null == undefined)//true - special rule
console.log('null===undefined', null === undefined)//false - different types
console.log('null==false', null == false)//false - null only loosely equals undefined
console.log('undefined==false', undefined == false)//false
console.log('null>=0', null >= 0)//true - relational ops convert null to 0, == does not
console.log('null>0', null > 0)//false

// 5. NaN
console.log('NaN==NaN', NaN == NaN)//false
console.log('NaN===NaN', NaN === NaN)//false
console.log('Number.isNaN(NaN)', Number.isNaN(NaN))//true - correct way to check
console.log('Object.is(NaN, NaN)', Object.is(NaN, NaN))//true

// 6. +0 and -0
console.log('0===-0', 0 === -0)//true
console.log('Object.is(0, -0)', Object.is(0, -0))//false

// 7. Arrays (converted to string first)
console.log('[]==0', [] == 0)//true - [] -> "" -> 0
console.log('[]==""', [] == "")//true - [] -> ""
console.log('[0]==false', [0] == false)//true - [0] -> "0" -> 0
console.log('[1]==1', [1] == 1)//true - [1] -> "1" -> 1
console.log('[1,2]=="1,2"', [1, 2] == "1,2")//true - [1,2] -> "1,2"
console.log('[]==![]', [] == ![])//true - ![] is false (array is truthy), [] -> 0
console.log('[]==[]', [] == [])//false - different references
console.log('[]===[]', [] === [])//false

// 8. Objects (compared by reference)
console.log('{}=={}', {} == {})//false - different references
const obj = {}
const sameObj = obj
console.log('obj===sameObj', obj === sameObj)//true - same reference
console.log('{}=="[object Object]"', {} == "[object Object]")//true - {} -> "[object Object]"

// 9. Truthy but not == true
console.log('"0" is truthy', Boolean("0"))//true
console.log('"0"==true', "0" == true)//false - "0" -> 0, true -> 1
console.log('[] is truthy', Boolean([]))//true
console.log('[]==true', [] == true)//false - [] -> 0, true -> 1

// Rule of thumb: always use === unless you need null == undefined check
