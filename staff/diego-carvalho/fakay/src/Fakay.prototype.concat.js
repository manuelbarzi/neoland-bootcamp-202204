Fakay.prototype.concat = function contac(){
    result = []
    n=0
    for (j=0; j < arguments.length; j++){
        if (arguments[j] instanceof Fakay)
            for (i=0; i<arguments[j].length; i++){
                result[n]=arguments[j][i]
                n++
            }
        else {
            result[n]=arguments[j]
            n++
        }
    }
    return result
}