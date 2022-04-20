function slice(array, start) {
    const result = []

    for (let i = start; i < array.length; i++)
        result[i - start] = array[i]

    return result
}