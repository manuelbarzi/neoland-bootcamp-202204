
function copyWithin (array, indice, inicio, fin=array.length){

    for (let i = inicio; i < fin; i++){ // copio desde el inicio hasta el final
        array[indice] = array[i] // se los copio a partir del indicie, y voy sumando uno a uno
        indice++
    }
}