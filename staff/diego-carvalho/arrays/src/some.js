function some(array, callback) {
    /*
    - iterate array
    - run callback with each element of array
    - if callback returns true, then return true (breaking loop)
    - if callback never returns true, then return false
    */    
    for (let i = 0; i < array.length; i++){
        const element = array[i]
        
        const matches = callback(element)

        if (matches) return true
    }

    return false
}