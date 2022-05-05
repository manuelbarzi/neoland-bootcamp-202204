function reduce(array, callback, initialValue) { // callback(previousValue, currentValue)
    let previousValue

    if (initialValue !== undefined) {
        previousValue = initialValue

        for (let i = 0; i < array.length; i++) {
            const currentValue = array[i]

            previousValue = callback(previousValue, currentValue)
        }
    } else {
        previousValue = array[0]

        for (let i = 1; i < array.length; i++) {
            const currentValue = array[i]

            previousValue = callback(previousValue, currentValue)
        }
    }

    return previousValue
}