function flat(array, deepth = 1) {

    const newArray = []

    let n = 0
    let c = 1

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object' && c <= deepth) {
            result = flat(array[i], deepth -1)
            for (let j = 0; j < array.length; j++) {
                newArray[n] = result[j]
                n++                
            }
            c++
        }
        else {
            newArray[n] = array[i]
            n++
        }
    }
    return newArray
}