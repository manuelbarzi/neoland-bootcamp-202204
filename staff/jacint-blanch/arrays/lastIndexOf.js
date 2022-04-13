function lastIndexOf(array, searchvalue, start = 0) { 
    
    var from = start || array.length - 1
    for(let i = from; i >= 0; i--) {
            if (array[i] === searchvalue) {
            return i
        }
    }
    return -1
} 





