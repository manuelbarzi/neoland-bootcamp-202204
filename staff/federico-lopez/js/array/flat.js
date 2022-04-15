function flat(arr, deepth = 1) {
    const newArray = []
    for (element of arr) {
        if (element instanceof Array) {
            for (elem of element) {
                newArray.push(elem)
            }
        } else {
            newArray.push(element)
        }
    }
    return newArray
}