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
Fakay.prototype.map = function(callback) {
    const result = new Fakay

    for (let i = 0; i < this.length; i++) {
        const element = this[i]
       result[i] = callback(element)
       result ++
    }
    return result 
}

/* TODO hacer función hecha por Manu 14/4 10.18
function 
 */