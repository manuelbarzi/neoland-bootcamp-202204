function find(nums, callbackll) {
    for (let i = 0; i<array.length; i++){
        const elem = array[i]

        const result = callback(elem)

        if (result) return elem
    }
}            
//TODO objeto.propiedad 14/04 12.20