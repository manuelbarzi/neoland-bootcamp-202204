function includes(array, letra, fromIndex = 0){
    for (i=fromIndex; i<array.length; i++){
        if(array[i]===letra){
            return true
        }
    }
    return false
}