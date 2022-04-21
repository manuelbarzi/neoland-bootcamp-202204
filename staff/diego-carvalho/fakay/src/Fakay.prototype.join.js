Fakay.prototype.join = function join(separator=','){
    let result=''
    result=result+this[0]
    for (i=1; i<this.length; i++){
        result=result+separator+this[i]
    }
    return result
}