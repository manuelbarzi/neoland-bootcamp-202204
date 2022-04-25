Fakay.prototype.copyWithin = function(index, start, lastindex = this.length){
    //let currElem
    for (let i = start; i < lastindex; i++){
        //this[i] = this[index]
        this[index++] = this[i]
        // el valor que quiero incrementar es index porque si no pongo index++ sino solo index, me vuelve a reemplazar
    }    
}