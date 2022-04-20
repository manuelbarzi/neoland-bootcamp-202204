function slice(arr, start = 0, end = arr.length) {
    
    const newArray = []

    if (start > arr.length)
        return newArray
    if (end > arr.length)
        end = arr.length
    if (start < 0) 
        start = arr.length + start
    if (end < 0) 
        end = arr.length + end

    for (let i = start; i < end; i++) {
        newArray.push(arr[i])
    }

    return newArray

}