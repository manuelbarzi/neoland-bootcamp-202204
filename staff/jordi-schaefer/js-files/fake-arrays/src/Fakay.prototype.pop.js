Fakay.prototype.pop = function(){
    const last = this[this.length-1]

    this[this.length-1] = undefined // borro la ultima posicion pero NO la elimina
    delete this[this.length-1]

    if (this.length) //si tiene longitud, le resto 1
        this.length--

    return last
}
