
function slice(array, inic = 0, fin = array.length) { // recivo el array, el inicio del recorte que en su defecto es 0, y el final del recorte que en su defecto es el final
    const new_array = []  // creo mi nuevo array vacio que devolvere

    let inicio = inic  // los valores de inicio fin los dejo tal cual llegan
    let final = fin
    if (inic<0)                       // pero si son negativos
        inicio = array.length + inic  // se lo resto al largo total del array
    if (fin < 0)                      // empezando desde el final le quito lo que reste
        final = array.length+fin


    for (let i = inicio; i < final; i++) {  // paso los valores solo de inicio a fin
        new_array[i-inicio] = array[i]
    }
    return new_array  // devuelvo nuevo array
}