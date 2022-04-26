function join(array, separator = ',') {
    let string = ''

    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i]

        string += currentElement;

        if (i < array.length - 1)
            string += separator
    }
    return string

}
/*
function join(array, separator=','){
    let result=''

    result=result+array[0]
    for (i=1; i<array.length; i++){
        result=result+separator+array[i]
    }
    return result
}*/