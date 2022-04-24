
Fakay.prototype.slice = function (start = 0, end = this.length) { // recivo el array, el inicio del recorte que en su defecto es 0, y el final del recorte que en su defecto es el final
    const q = new Fakay()  // creo mi nuevo array vacio que devolvere

    if (start<0)                       // pero si son negativos
        start = this.length + start  // se lo resto al largo total del array
    if (end < 0)                      // empezando desde el final le quito lo que reste
        end = this.length + end


    for (let i = start; i < end; i++) {  // paso los valores solo de inicio a fin
        q[i-start] = this[i]
        q.length++
    }
    return q  // devuelvo nuevo array
}