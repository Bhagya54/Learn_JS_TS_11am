let count = 10
while (count < 5) {
    console.log("while loop:", count)
    count++
}

do {
    console.log("do while loop:", count)
    count++
} while (count < 5)

let n = 1
do {
    console.log(n)
    n++;
    if (n === 2) {
        break;
    }
} while (n < 5)