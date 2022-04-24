function pop(array){
    const lastElement = array[array.length-1]
    array.length = array.length-1

    return lastElement

}