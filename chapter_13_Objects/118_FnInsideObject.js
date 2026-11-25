const calculator = {
    a: 60,
    b: 20,
    add() {
        return this.a + this.b
    },
    sub() {
        return this.a - this.b
    },
    div() {
        return this.a / this.b
    },
    mul() {
        return this.a * this.b
    }
}

console.log("Add:", calculator.add())
console.log("Subtract:", calculator.sub())
console.log("Divide:", calculator.div())
console.log("Multiply:", calculator.mul())


//Find a num is a prime or not - divisible by 1 and itself - 7 - 1,7
//6 - 1,2,3,6 => 6%2 === 0,6%3===0

const prime = {
    n: 6,
    isPrime() {
        const num = this.n;//7
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return "Not Prime"
            }
        }

        return "Prime"
    }
}

console.log(`Is ${prime.n} a prime??: ${prime.isPrime()}`)