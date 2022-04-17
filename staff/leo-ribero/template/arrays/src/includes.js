function includes(array, searchElement, fromIndex = 0){
    for (let i = fromIndex; i < array.length; i++){
        var currentElement = array[i]

        if (currentElement === searchElement)
        //  es igual a indexOf solo que en lugar de retornar i, retorna true
        return true
    }
    return false
}