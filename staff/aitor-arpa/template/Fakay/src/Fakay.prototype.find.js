Fakay.prototype.find = function (callback){
    for (let i = 0; i < this.length; i++)
        if (callback(this[i]))   // cuando encuentro elprimero que cumple la condicion del callback
            return this[i] // lo devueldo
}