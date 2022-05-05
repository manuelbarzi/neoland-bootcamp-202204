function slice(array, start, end = array.length) {
    const result = []


    if (start >= 0) {
        if (end >= 0)
            for (let i = start; i < end; i++)
                result[i - start] = array[i]
        else
            for (let i = start; i < array.length + end; i++)
                result[i - start] = array[i]
    } else
        for (let i = end + start; i < end; i++)
            result[i - end - start] = array[i]

    return result
}