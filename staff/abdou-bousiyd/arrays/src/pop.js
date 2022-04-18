function pop(array) {

    const removed = array[array.length -1]
    
    array.length = array.length -1

    return removed
    // return array.splice(array.length-1, 1)

}