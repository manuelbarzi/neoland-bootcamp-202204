
function map(array, callback){
    let new_array = []
    for (let i = 0; i < array.length; i++){
        const currElem = array[i]  // la variable es constante, pero elimina y genera una nueva en cada ciclo
        new_array[i]=callback(currElem) // llamo a la funcion y le envio el elemento
    }
    return new_array
}