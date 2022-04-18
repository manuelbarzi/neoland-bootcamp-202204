function slice(array, start = 0, end = array.length) {
    
    const newarray = []

    if (start > array.length)
        return []
    if (start > array.length)
        return newarray
    if (end > array.length)
        end = array.length
    if (start < 0) 
        start = array.length + start
    if (end < 0) 
        end = array.length + end

    for (let i = start; i < end; i++) {
        newarray.push(array[i])
    }

    return newarray

}