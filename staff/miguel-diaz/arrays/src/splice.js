function splice(arr, start, deleteCount = 0) {
    
    let deletedElements = []
    
    if (start > arr.length) {
        start = arr.length
        deleteCount = 0
    } else if (start === -Infinity){
        start = 0
    } else if (start < 0) {
        start = arr.length + start
    }

    if (deleteCount < 0)
        deleteCount = 0

    if (arguments.length < 3)
        deleteCount = arr.length - start

    while (deleteCount > 0) {
        deletedElements.push(arr[start])
        for (let i = start; i < arr.length; i++) {
            arr[i] = arr[i + 1]
        }
        arr.pop()
        deleteCount--
    }

    for (let i = arguments.length - 1; i >= 3; i--) {

        for (let j = arr.length; j >= start; j--) {
            arr[j+1] = arr[j] 
        }

        arr[start] = arguments[i]

    }

    return deletedElements
        
}