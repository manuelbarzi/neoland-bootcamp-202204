
function splice(array, inicio, reemplazo, elemento) { // recivo el array, el inicio del recorte, cantidad a reemplazar y el elemento

    if (reemplazo == 0) {    // si reemplazo es 0
        for (let i = array.length; i > inicio; i--) {  // empezando por el final, tiro todos los elementos 1 posicion para atras
            array[i] = array[i - 1]
        }
        array[inicio] = elemento // y pongo el nuevo en la posicion de inicio
    }


    else { // si reemplazo no es 0
        array[inicio] = elemento // y pongo el nuevo en la posicion de inicio
        if (reemplazo != 1) { // si es 1 ya lo he reemplazado y no hay que hacer nada, si es mayor los muevo todos
            for (let i = inicio + 1; i < array.length - reemplazo + 1; i++) {
                array[i] = array[i + reemplazo - 1]
            }
        }
        array.length = array.length - reemplazo + 1
    }

}