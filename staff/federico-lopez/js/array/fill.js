function fill(arr, value, start = 0, end = arr.length) {
    const arrFilled = []
    for (let i = 0; i < start; i++)
        arrFilled[i] = arr[i]
    for (let i = start; i < end; i++)
        arrFilled[i] = value
    for (let i = end; i < arr.length; i++)
        arrFilled[i] = arr[i]
    return arrFilled
}