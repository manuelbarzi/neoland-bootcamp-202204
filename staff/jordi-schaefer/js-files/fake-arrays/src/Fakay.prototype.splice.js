
Fakay.prototype.splice = function (inicio, reemplazo, ...elementos) { // recivo el this, el inicio del recorte, cantidad a reemplazar y el elemento

    result = new Fakay()
    if (reemplazo == 0) {    // si reemplazo es 0
        for (let i = this.length+elementos.length-1; i > inicio; i--) {  // empezando por el final, tiro todos los elementos 1 posicion para atras
            this[i] = this[i - elementos.length]
        }

        for ( let i = 0; i<elementos.length; i++) {
            this[inicio+i] = elementos[i] // y pongo el nuevo en la posicion de inicio
            this.length++
        }
        return result
    }


    // archivo de fede subido por manu, en splice arrays
    
    else { // si reemplazo no es 0

        const index = elementos.length - reemplazo
        // 5 - 3= 2

        // si el index es negativo, tengo que mover elementos hacia la  izquierda
        if (index <= 1){

            for( let i=inicio; i<inicio-index; i++) {
                this[i]=this[i-index]
            }
            
            for( let i= inicio; i<elementos.length; i++){
                this[i]=elementos[i-inicio]
            }

            this.length += index
            
        }
        
        // si el indice es positivo, tengo que mover hacia la derecha
        else {

            for (let i = this.length+index; i > inicio; i--) {
                this[i] = this[i - index]
            }

            for ( let i = 0; i<elementos.length; i++) {
                this[inicio+i] = elementos[i] 
            }
            this.length -= index

        }
        return result





/*         // me guardo los que voy a borrar
        for (let i = inicio; i<inicio+reemplazo; i++){
            result[result.length++]=this[i]
        }

        this[inicio] = elementos[0] // y pongo el nuevo en la posicion de inicio

        if (reemplazo != 1) { // si es 1 ya lo he reemplazado y no hay que hacer nada, si es mayor los muevo todos
            for (let i = inicio + 1; i < this.length - reemplazo + elementos.length; i++) {
                
                
                
                // estoy moviendo hacia delante para quitar todos los que reemplazo

                // tengo que mirar segun la cantidad de elementos introducidos
                // si desplazo hacia atras o hacia adelante
                
                this[i] = this[i + reemplazo - 1]

                // y luego añadir lo que toque


            }

            for ( let i = 1; i<elementos.length; i++) {
                this[inicio+i-1] = elementos[i] // y pongo el nuevo en la posicion de inicio
                this.length++
            }
        }
        this.length = this.length - reemplazo + 1
        return result */
    }

}