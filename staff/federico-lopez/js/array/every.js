function every(arr, callback, fromIndex = 0) {
    for (let i = fromIndex; i < arr.length; i++)
        if(!callback(arr[i])) return false
    return true
}