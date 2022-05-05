function slice (array, start){ // Jordi's copyright (c)
    const result = []
    let n=0
    for (let i = start; i < array.length; i++){
        result[n]=array[i]
        n++
    }
    return result
}