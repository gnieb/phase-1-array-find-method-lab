

function superbowlWin(someArray) {
    const found = someArray.find(cb)
    if (found) {
        return found.year
    }
}

function cb (object) {
    if (object.result === "W")
    return true
}

//test console.log(superbowlWin(record))
