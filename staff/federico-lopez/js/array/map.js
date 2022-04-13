/*
    - Crear un nuevo array
    - Recorrer el array
    - Alojar cada elemento en un nuevo array
*/

function map(array, callback) {
    newArray = []
    for (let i = 0; i < array.length; i++) {
        const previousValue = array[i]
        const newValue = callback(previousValue)
        newArray.push(newValue)
    }
    return newArray
}