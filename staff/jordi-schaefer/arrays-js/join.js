function join(array, separator=','){
    let result=''

    result=result+array[0]
    for (i=1; i<array.length; i++){
        result=result+separator+array[i]
    }
    return result
}