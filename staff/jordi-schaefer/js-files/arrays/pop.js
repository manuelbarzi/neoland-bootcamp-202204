function pop(array){
    const n=array[array.length-1]
    if (array.length)
        array.length= array.length-1
    return n
}