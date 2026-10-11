const baseURL = "https://google.com"
//const baseURL="https://gmail.com"// it cannot be redeclared
//baseURL="https://redbus.com"// TypeError: Assignment to constant variable.

const name = "pending"
{
    const name = "done";
    console.log("Inside the block:", name)
}

function say() {
    const name = "bhagya";
    console.log("Inside the function:", name)//bhagya

    if (true) {
        const name = "hari";
        console.log("Inside the if block:", name)//hari
    }

    console.log("Outside the if block:", name)//bhagya

}
say();
console.log("Outside the block:", name)