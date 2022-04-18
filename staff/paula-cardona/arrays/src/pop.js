function pop(array){
    if (array.length === 0) {
        return undefined
    }
    else {
        const result = array[array.length-1]
        array.length = array.length-1
        return result
    }
  
    
}