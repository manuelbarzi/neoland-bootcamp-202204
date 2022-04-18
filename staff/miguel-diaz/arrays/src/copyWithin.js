function copyWithin(array, target, start = 0, end = array.length) {
    newArray = []
    
    if (target < 0) {
        target = array.length + target
    }
    if (start < 0) {
        start = array.length + start
    }
    if (end < 0) {
        end = array.length + end
    }

    for (let i = start; i < end; i++) {
        newArray[target] = arr[i]
        target++
        if (target === array.length) {
            for (let j = 0; j < newArray.length; j++) {
                if (newArray[j] !== undefined) {
                    array[j] = newArray[j]
                }
            }
            return array
        }
    }
    for (let j = 0; j < newArray.length; j++) {
        if (newArray[j] !== undefined) {
            array[j] = newArray[j]
        }
    }
    return array
}