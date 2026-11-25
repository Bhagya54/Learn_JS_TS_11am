let a=10;
let b=a;
console.log(a)//10
console.log(b)//10

b=99;
console.log(a)//10
console.log(b)//99

let obj1={name:"giri"}
let obj2=obj1;

obj2.name="satish"
console.log(obj1.name)
console.log(obj2.name)

//"Objects - follow copy by reference"
//"Copy by reference is applicable on - objects,array,function"