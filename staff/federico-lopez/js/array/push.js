function push() {
    let array = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        array[array.length] = arguments[i]
    }
    return array.length
}

