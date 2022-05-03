function some(array, callback) {
    for(let i = 0; i < array.length; i++) {
        // console.log(callback(array[i]))
        // console.log(callback(array[i]))
        if (callback(array[i]))
            return true
    }
    return false
}