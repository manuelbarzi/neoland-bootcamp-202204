
function some(array, callback, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
        if (callback(array[i])) 
        return true

    }
    return false
}