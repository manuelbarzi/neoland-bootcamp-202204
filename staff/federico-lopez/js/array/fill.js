function fill(arr, value, start = 0, end = arr.length) {

    if (start < 0)
        start = arr.length + start
    if (end < 0)
        end = arr.length + end

    for (let i = start; i < end; i++)
        arr[i] = value
    return arr
    
}