function shift(array) {
    
    if (array.length === 0)
        return undefined

    deletedElement = array[0]

    for (let i = 0; i < array.length; i++) 
        array[i] = array[i + 1]
    
    array.pop()
    return deletedElement

}