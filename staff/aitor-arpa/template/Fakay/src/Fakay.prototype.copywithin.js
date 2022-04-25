Fakay.prototype.copyWithin = function (t,str, fin = this.length) {

    for(str ;str < fin; str++){
        this[t]= this[str]
        t++
    }

}



