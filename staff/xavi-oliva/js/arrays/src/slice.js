// - Se le añaden un array y dos números
// - La función debe devolver un nuevo array con todos los elementos empezando por el índice del primer número hasta el índice del segundo número
// - Si no se le pasa un tercer parámetro a la función, ésta debería cortar ("slice") hasta el final del array, por defecto.
// - Si el tercer parámetro es mayor que la longitud del array, debe cortar hasta el final del array.

function slice(array, start = 0, end = array.length) {
    const result = []


    if (start >= 0) {
        if (end >= 0)
            for (let i = start; i < end; i++)
                result[i - start] = array[i]
        else
            for (let i = start; i < array.length + end; i++)
                result[i - start] = array[i]
    } else {
        if (end >= 0)
            for (let i = end + start; i < end; i++)
                result[i - end - start] = array[i]
        else
            for (let i = array.length + start; i < array.length + end; i++)
                result[i - array.length - start] = array[i]
    }

    return result
}