function reduce(array, callback, initialValue) {
    let initialValue
    if (initialValue) {
        let accumulator = initialValue
    accumulator += callback(accumulator, array[i])
    for (let i = 2; i < arr.length; i++) {
        accumulator = callback(accumulator, array[i])
    }
    
    }
    return accumulator
}

function reduce(array, callback, initialValue)