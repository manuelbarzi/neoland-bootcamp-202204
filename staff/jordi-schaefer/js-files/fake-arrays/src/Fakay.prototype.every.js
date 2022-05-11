Fakay.prototype.every = function (callback){
    for( let i=0; i< this.length; i++){
        if (!callback(this[i])){
            return false
        }
    }
    return true
}