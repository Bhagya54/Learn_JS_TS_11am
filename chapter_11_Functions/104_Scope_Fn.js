let env = "staging"//global scope

function setUpConfig() {
    let timeout = 3000;//local scope
    console.log("Env:", env)
    console.log("Timeout:", timeout)
}

setUpConfig();
console.log("Env:", env)
console.log("Timeout:", timeout)