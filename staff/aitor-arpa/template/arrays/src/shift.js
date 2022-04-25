function shift(arr) {
    
    if (arr.length === 0)
        return undefined

    deletedElement = arr[0]

    for (let i = 0; i < arr.length; i++) 
        arr[i] = arr[i + 1]
    
    arr.pop()
    return deletedElement

}