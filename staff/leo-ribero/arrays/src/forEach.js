/*
- iterar para cada elemento del array
- llamar a la funcion callback con cada elemento
*/

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const currElem = array[i]

        callback(currElem)
    }
}