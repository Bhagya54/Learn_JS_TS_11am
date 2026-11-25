let config = {}
config.browser = "chrome"
config.timeout = 3000;
config.testName = "Login Test"
console.log(config)

if (config.browser === "chrome") {
    console.log("Please execute the testcase")
}

//delete
delete config.browser
console.log(config)

let config2={ browser: 'firefox', timeout: 5000, testName: 'Register Test' }
console.log(config2)