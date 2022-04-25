
Fakay.prototype.filter = function (callback){
    const result = new Fakay()
    for (let i = 0; i < this.length; i++){
        if (callback(this[i])){   // si se cumple la condicion del callback
            result[result.length++]=this[i]           
        }
    }
    return result
}