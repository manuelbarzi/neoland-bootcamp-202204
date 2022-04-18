/*

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']*/

function concat(array1, array2, array3 = []) {
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