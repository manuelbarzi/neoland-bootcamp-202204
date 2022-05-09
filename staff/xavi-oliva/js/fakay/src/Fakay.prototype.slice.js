// - Se le añaden un array y dos números
// - La función debe devolver un nuevo array con todos los elementos empezando por el índice del primer número hasta el índice del segundo número
// - Si no se le pasa un tercer parámetro a la función, ésta debería cortar ("slice") hasta el final del array, por defecto.
// - Si el tercer parámetro es mayor que la longitud del array, debe cortar hasta el final del array.

Fakay.prototype.slice = function (start = 0, end = this.length) {
    const result = new Fakay


    if (start >= 0) {
        if (end >= 0)
            for (let i = start; i < end; i++)
                result[i - start] = this[i]
        else
            for (let i = start; i < this.length + end; i++)
                result[i - start] = this[i]
    } else {
        if (end >= 0)
            for (let i = end + start; i < end; i++)
                result[i - end - start] = this[i]
        else
            for (let i = this.length + start; i < this.length + end; i++)
                result[i - this.length - start] = this[i]
    }

    return result
}