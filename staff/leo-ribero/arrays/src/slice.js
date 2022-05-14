function slice(array, start = 0, end = array.length) {
    const result = []


    if (start >= 0) {
        if (end >= 0)
            for (let i = start; i < end; i++)
                result[i - start] = array[i]
        else
            for (let i = start; i < array.length + end; i++)
                result[i - start] = array[i]
    } else {
        if (end >= 0)
            for (let i = end + start; i < end; i++)
                result[i - end - start] = array[i]
        else
            for (let i = array.length + start; i < array.length + end; i++)
                result[i - array.length - start] = array[i]
    }

    return result
}