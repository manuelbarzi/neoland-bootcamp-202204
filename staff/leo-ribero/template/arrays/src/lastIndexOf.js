


function lastIndexOf(array, searchElement, fromIndex = -1){
    for (let i = fromIndex; i < array.length; i--){
        var currentElement = array[i]
        if (currentElement === searchElement)
        return i
    }
    return -1
}
