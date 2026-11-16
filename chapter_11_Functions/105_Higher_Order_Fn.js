function runWithLogin(testName, testFn) {
    let status = testFn();
    //console.log("Status of the test:", status)
    return result(testName, status)
}

function loginTest() {
    return "pass"
}

function loginTestFailed() {
    return "fail"
}

function result(testName, result) {
    console.log(`${testName} is ${result}`)
}

runWithLogin("Login Test", function loginTestFailed() {
    return "fail"
})
runWithLogin("Login Test Failed", loginTestFailed)

// test('has title', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
  
//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle(/Playwright/);
//   });
  