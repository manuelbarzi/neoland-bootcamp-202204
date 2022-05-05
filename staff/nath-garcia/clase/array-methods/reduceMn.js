function reduce(array, callback, initialValue = array[0]) {
    let previousValue = initialValue;

    for(let i = 0; i < array.length; i++ ) {
        const currentValue = array[i]

        previousValue = callback(previousValue, currentValue)
    }

    return previousValue
}