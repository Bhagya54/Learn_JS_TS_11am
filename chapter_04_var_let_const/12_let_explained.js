let retryCount = 0;
retryCount = retryCount + 1
retryCount = retryCount + 1
console.log("retryCount:", retryCount)//2

let testStatus = "pending"
if (testStatus === "pending") {
    let executionTime = 2000;
    console.log("Inside the if Block:", executionTime)
}
{
    let executionTime = 5000;
    console.log("Inside the Block:", executionTime)
}

for (let i = 10; i < 11; i++) {
    let executionTime = 1000;
    console.log("Inside the for Block:", executionTime)
}

console.log("Outside the all the Blocks:", executionTime)//ReferenceError: executionTime is not defined

