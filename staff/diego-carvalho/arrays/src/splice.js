
function splice(array, start, deleterCount, element) { // recivo el array, el start del recorte, cantidad a reemplazar y el element

    if (deleterCount == 0) {    // if deleterCount is 0
        for (let i = array.length; i > start; i--) {  // empezando por el final, tiro todos los elements 1 posicion para atras
            array[i] = array[i - 1]
        }
        array[start] = element // y pongo el nuevo en la posicion de start
    }


    else { // si deleterCount no es 0
        array[start] = element // y pongo el nuevo en la posicion de start
        if (deleterCount != 1) { // si es 1 ya lo he reemplazado y no hay que hacer nada, si es mayor los muevo todos
            for (let i = start + 1; i < array.length - deleterCount + 1; i++) {
                array[i] = array[i + deleterCount - 1]
            }
        }
        array.length = array.length - deleterCount + 1
    }

}