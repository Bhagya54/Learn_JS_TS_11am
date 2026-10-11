getStatus();

function getStatus() {
    console.log(status)//undefined
    var status = "assigned"
    console.log(status)//assigned


    if (true) {
        console.log("block scope:", status)//assigned
        var status = "fixed"
        console.log(status)//fixed
    }
    console.log("outside the block", status)//fixed
}