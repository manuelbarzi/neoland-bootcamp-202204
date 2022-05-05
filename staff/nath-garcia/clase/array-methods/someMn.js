/**
 - iterate array
 - run callback with each element of array 
 - if callback returns true, then returns true
 - if callback never retorn true 
 */

 function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const currentEl = array[i]
        const matches = callback(currentEl)
        if (matches) return true
    }
    return false
 }