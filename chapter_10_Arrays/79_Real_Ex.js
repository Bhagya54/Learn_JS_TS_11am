let browser = ["chrome", "firefox", "safari", "opera", "edge"]
console.log("All array values:", browser)
console.log("Length of an array:", browser.length)//5

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i])
}

//Remove the last element - pop
let removedValue = browser.pop();
console.log("Removed Value - pop()", removedValue)
console.log("After pop()", browser)
//["chrome", "firefox", "safari", "opera"]

//Add element at the beginning - unshift
browser.unshift("edge", "opera");
console.log(`Array after unshift('edge','opera'), ${browser}`)//["edge","opera","chrome", "firefox", "safari", "opera"]

