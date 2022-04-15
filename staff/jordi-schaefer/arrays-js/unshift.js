
function unshift (array){

    // los paso todos a atras la cantidad de elementos que reciva
    for (let i = array.length+arguments.length-2; i >= arguments.length-1; i--){ //contando de atras para adelante
        array[i] = array[i-arguments.length+1]
    }

    for (let i = 0; i < arguments.length-1; i++){
        array[i] = arguments[i+1]
    }

    return array.length
}