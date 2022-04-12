function concat(){
    result = []
    n=0
    for (j=0; j<arguments.length; j++){
        for (i=0; i<arguments[j].length; i++){
            result[n]=arguments[j][i]
            n++
        }
    }
    return result
}