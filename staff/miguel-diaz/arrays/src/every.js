function every(array, callback, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++)
        if(!callback(array[i])) return false
    return true
}