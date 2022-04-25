function flat(arr, deepth = 1) {
    
    const newArray = []    
    for (element of arr) 
        newArray.push(element)
    
    for (let i = 0; i < newArray.length; i++) {
        for (let j = 1; j <= deepth; j++) {
            if (newArray[i] instanceof Array) {
                for (let k = newArray[i].length - 1; k >= 0; k--) {
                    newArray.splice(i + 1, 0, newArray[i][k])
                }
            } else {
                newArray.splice(i + 1, 0, newArray[i])
                j = deepth
            }
            newArray.splice(i, 1)
        }
    }
}       