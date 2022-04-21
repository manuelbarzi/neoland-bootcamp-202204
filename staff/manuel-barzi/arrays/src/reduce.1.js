function reduce(array, callback, initialValue) { // callback(previousValue, currentValue)
    let accumulator = callback(initialValue, array[0])

    for (let i = 1; i < array.length; i++)
        accumulator = callback(accumulator, array[i])

    return accumulator
}