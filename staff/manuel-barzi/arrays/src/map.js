function map(array, callback) {
    const result = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i]

        result[i] = callback(element)
    }

    return result
}