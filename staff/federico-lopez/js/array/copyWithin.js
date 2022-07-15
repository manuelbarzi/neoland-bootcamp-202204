function copyWithin(arr, target, start = 0, end = arr.length) {
    newArray = []
    
    if (target < 0) {
        target = arr.length + target
    }
    if (start < 0) {
        start = arr.length + start
    }
    if (end < 0) {
        end = arr.length + end
    }
    
    /*
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < 0) {
            arguments[i] = arr.length + arguments[i]
        }
    }
    */

    /*
    for (let i = start; i < end; i++) {
        arr[target] = arr[i]
        target++
        if (target === arr.length) {
            return arr
        }
    }
    return arr
    */

    for (let i = start; i < end; i++) {
        newArray[target] = arr[i]
        target++
        if (target === arr.length) {
            for (let j = 0; j < newArray.length; j++) {
                if (newArray[j] !== undefined) {
                    arr[j] = newArray[j]
                }
            }
            return arr
        }
    }
    for (let j = 0; j < newArray.length; j++) {
        if (newArray[j] !== undefined) {
            arr[j] = newArray[j]
        }
    }
    return arr

}