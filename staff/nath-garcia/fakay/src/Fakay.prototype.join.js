Fakay.prototype.join = function(separator = ',') {

    let string = ''

    for (let i = 0; i < this.length; i++) {
        const currentElement = this[i]

        string += currentElement

        if (i < this.length - 1)
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