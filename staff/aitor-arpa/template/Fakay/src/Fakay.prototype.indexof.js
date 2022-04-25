Fakay.prototype.indexOf = function (valor, fromIndex=0) {
    for (i=fromIndex; i<this.length; i++){
        if(this[i]==valor){
            return i
        }
    }
    return -1
}