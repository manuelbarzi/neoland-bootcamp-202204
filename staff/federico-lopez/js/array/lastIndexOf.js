function lastIndexOf(array, value) {
    let index = -1
    for (let i = array.length; i >= 0; i--) {
        if (array[i] === value) {
            index = i
            return index
        }
    }
    return index
}