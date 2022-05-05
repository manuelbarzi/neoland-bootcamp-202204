function slice(array, start, end = array.length) {
    const result = []

    for (let i = start; i < end; i++)
        result[i - start] = array[i]

    return result
}