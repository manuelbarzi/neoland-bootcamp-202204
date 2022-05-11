
Fakay.prototype.copyWithin = function(indice, inicio, fin=this.length){

    for (let i = inicio; i < fin; i++){ // copio desde el inicio hasta el final
        this[indice] = this[i] // se los copio a partir del indicie, y voy sumando uno a uno
        indice++
    }
}