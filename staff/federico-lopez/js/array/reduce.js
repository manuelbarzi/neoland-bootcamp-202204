function reduce(arr, callback, initialValue = 0) {
    let accumulator = initialValue
    accumulator += callback(arr[0], arr[1])
    for (let i = 2; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i])
    }
    return accumulator
}