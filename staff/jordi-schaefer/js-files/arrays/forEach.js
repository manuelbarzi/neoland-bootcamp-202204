
function forEach(array, callback){
    for (let i = 0; i < array.length; i++){
        const currElem = array[i]  // la variable es constante, pero elimina y genera una nueva en cada ciclo
        callback(currElem) // llamo a la funcion y le envio el elemento
    }
}