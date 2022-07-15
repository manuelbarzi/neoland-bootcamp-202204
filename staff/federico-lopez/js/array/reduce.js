function reduce(arr, callback, initialValue) {
    let accumulator
    if (initialValue !== undefined) {
        accumulator = callback(initialValue, arr[0])
        for (let i = 1; i < arr.length; i++) {
            accumulator = callback(accumulator, arr[i])
        }
    } else {
        accumulator = callback(arr[0], arr[1])
        for (let i = 2; i < arr.length; i++) {
            accumulator = callback(accumulator, arr[i])
        }
    }
    return accumulator
}