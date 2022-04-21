
function reduce(array, callback, inicio=0){  // recibo array, funcion y el inicio si es necesario
    let total = callback(inicio, array[0]) // inicializo la variacon en el resultado del callback, inicio + primer valor
                                           // podria poner total = inicio y empezar el for desde 0 

    for (let i = 1; i < array.length; i++){
        total = callback(total, array[i]) // continuo con callback para todos los valores
    }
    return total
}