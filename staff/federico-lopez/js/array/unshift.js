function unshift(arr) {
    for (let i = arguments.length - 1; i >= 1; i--) {
        for (let j = arr.length - 1; j >= 0; j--)
            arr[j + 1] = arr[j]
        arr[0] = arguments[i]
    }
    return arr.length
}