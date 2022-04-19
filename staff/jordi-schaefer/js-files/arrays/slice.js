
function slice(array, inicio = 0, fin = array.length) { // recivo el array, el inicio del recorte que en su defecto es 0, y el final del recorte que en su defecto es el final
    const new_array = []  // creo mi nuevo array vacio que devolvere
    let n = 0 // creo una variable para ir anadiendo valores al nuevo array

    let final = fin
    if (fin < 0) {
        final = array.length+fin
    }

    for (let i = inicio; i < final; i++) {  // paso los valores solo de inicio a fin
        new_array[n] = array[i]
        n++                          // subo contador del nuevo array
    }
    return new_array  // devuelvo nuevo array
}