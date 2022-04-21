function reduce(array, callback, initialValue) { // callback(previousValue, currentValue)
    let previousValue = initialValue

    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]

        previousValue = callback(previousValue, currentValue)
    }

    return previousValue
}