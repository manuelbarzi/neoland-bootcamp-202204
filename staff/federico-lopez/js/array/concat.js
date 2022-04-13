/*function concat(array1, array2, array3 = []) {
    let newArray = []
    for (let value of array1) {
        newArray.push(value)    
    }
    for (let value of array2) {
        newArray.push(value)    
    }
    for (let value of array3) {
        newArray.push(value)    
    }
    return newArray
} 
*/

function concat() {
    let newArray = [];
    for (let i = 0; i < arguments.length; i++) {
        for (let element of arguments[i]) {
            newArray.push(element)
        }
    }
    return newArray
}

// concepto arguments