function retry(testcase,maxRetries=3,delay=15000){
    console.log(`Testcase: ${testcase} retried for ${maxRetries} times, with a delay of ${delay} ms`)
}

retry("LoginTest",5,2000)
retry("RegisterTest")