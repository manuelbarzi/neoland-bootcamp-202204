
Fakay.prototype.splice = function (inicio, reemplazo, elemento) { // recivo el this, el inicio del recorte, cantidad a reemplazar y el elemento

    if (reemplazo == 0) {    // si reemplazo es 0
        for (let i = this.length; i > inicio; i--) {  // empezando por el final, tiro todos los elementos 1 posicion para atras
            this[i] = this[i - 1]
        }
        this[inicio] = elemento // y pongo el nuevo en la posicion de inicio
        this.length++
    }


    else { // si reemplazo no es 0
        this[inicio] = elemento // y pongo el nuevo en la posicion de inicio
        if (reemplazo != 1) { // si es 1 ya lo he reemplazado y no hay que hacer nada, si es mayor los muevo todos
            for (let i = inicio + 1; i < this.length - reemplazo + 1; i++) {
                this[i] = this[i + reemplazo - 1]
            }
        }
        this.length = this.length - reemplazo + 1
    }

}