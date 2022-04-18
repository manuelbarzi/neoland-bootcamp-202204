function forEach(array, callback){

    /*
    - iterar para cada elemento del array
    - llamar a la función callback con cada elemento
    */

    for (let i = 0; i < array.length; i++) {
        const currElem = array[i]
        /* este currElem lo tengo que enviar al
         callback que es una función
         por tanto:
         */
        callback(currElem)
    }
}