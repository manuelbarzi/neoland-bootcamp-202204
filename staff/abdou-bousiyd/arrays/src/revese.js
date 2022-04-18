function reverse(array) {

    const copy = []
    
    for(let i = array.length -1; i >= 0; i--) {
        copy[copy.length] = array[i]
    }
    
    for (let i = 0; i <= copy.length - 1; i++) {
        array[i] = copy[i]
    }
    return array
}