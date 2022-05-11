Fakay.prototype.at = function(pos){
    if (pos>=0){
        return this[pos]
    }
    else if (pos<0){
        return this[this.length+pos]
    }
}