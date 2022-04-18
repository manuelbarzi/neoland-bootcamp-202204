/*
- iterar para cada elemento del array
*/

/*function map(numbers, callback){
    newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(callback(array[i]))
    } 
    return newArray
}
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

/* TODO hacer función hecha por Manu 14/4 10.18
function 
 */