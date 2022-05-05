function concat() {
    let newArray = [];
    for (let i = 0; i < arguments.length; i++) {
        for (let element of arguments[i]) {
            newArray.push(element)
        }
    }
    return newArray
}

