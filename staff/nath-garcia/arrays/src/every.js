function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        if (callback(currentValue))
        return true 
    }
    return false

}