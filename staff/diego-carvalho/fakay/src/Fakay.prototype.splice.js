
Fakay.prototype.splice = function splice(start, deleteCount, element) { // recivo el this, el inicio del recorte, cantidad a reemplazar y el elemento

    if (deleteCount == 0) {    // si deleteCount es 0
        for (let i = this.length; i > start; i--) {  // empezando por el final, tiro todos los elementos 1 posicion para atras
            this[i] = this[i -1]
        }
        if (this[start] = element){
            this.length = this.length + 1
        }  // y pongo el nuevo en la posicion de start

        //this.length = this.length + 1//y le en el lenght
    }


    else { // si deleteCount no es 0
        this[start] = element // y pongo el nuevo en la posicion de start
        if (deleteCount != 1) { // si es 1 ya lo he reemplazado y no hay que hacer nada, si es mayor los muevo todos
            for (let i = start + 1; i < this.length - deleteCount + 1; i++) {
                this[i] = this[i + deleteCount - 1]
            }
        }
        this.length = this.length - deleteCount + 1
    }

}