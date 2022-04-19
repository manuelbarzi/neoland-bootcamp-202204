function indexOf(array, valor, fromIndex = 0){
    for (i=fromIndex; i<array.length; i++){
        if(array[i]===valor){
            return i
        }
    }
    return -1
}