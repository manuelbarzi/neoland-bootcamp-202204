function find(array, callback) {
    for (let i = 0; i < array.length; i++){
        const elem = array[i]
        
        /*
        evaluamos el callback, si es positivo entonces
        retornaremos el valor referenciado en ese momento
        de lo contrario continua con el siguiente
        El Callback esta definido en el TEST en cada caso
        */
        const result = callback(elem)
        if (result) return elem
    }
 
}