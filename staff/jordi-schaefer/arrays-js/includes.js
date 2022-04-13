function includes(array, searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++)
        if (array[i] === searchElement) 
            return true

    return false
}