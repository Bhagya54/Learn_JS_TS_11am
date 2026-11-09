let fruits = ["banana", "apple", "cherry", "ball"]
fruits.sort()
console.log(fruits)

let numbers = [3, 1, 4]
numbers.sort();
console.log(numbers)

let arrNum = [3, 10, 20, 5]//lexicographic  - sorts based on the first character
arrNum.sort();
console.log(arrNum)

arrNum.sort((a,b) => a-b)//ascending order
console.log(arrNum)

arrNum.sort((a,b) => b-a)//descending order
console.log(arrNum)

/*
[3, 10, 20, 5]
Cycle 1
IT1: a=3,b=10 => -1 - as it is - [3,10,20,5]
IT2: a=10,b=20 => -1 - as it is - [3,10,20,5]
IT3: a=20,b=5 => 1 -swap -[3,10,5,20]

Cycle 2 - [3,10,5,20]
IT1: a=3,b=10 => -1 - as it is - [3,10,5,20]
IT2: a=10,b=5 => 1 - swap - [3,5,10,20]
IT3: a=10,b=20 => -1 - as it is -[3,5,10,20]


[3, 10, 20, 5] - (a,b => b-a)
+ve - swap
-ve - as it is
= - as it is

a=3,b=10 => 10-3 =+ve (swap) - [10,3,20,5]
a=3,b=20 => 20-3 =+ve (swap ) - [10,20,3,5]
a=3,b=5 => 5-3 -+ve (swap) - [10,20,5,3]

a=10,b=20 => 20-10 = +ve (swap) - [20,10,5,3]


*/