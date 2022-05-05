function sort(arr) {
    
    arrayOfTypeNumbers = []

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            arrayOfTypeNumbers.push(arr[0])
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined)
            arr[i] = String(arr[i])
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let smallestValue = arr[i]
        let smallestIndex
        for (let j = 1 + i; j < arr.length; j++) {
            if (arr[j] < arr[i] && arr[j] < smallestValue) {
                smallestIndex = j
                smallestValue = arr[j]
            }
        }
        if (smallestIndex !== undefined) {
            for (let k = smallestIndex; k >= i + 1; k--) {
                arr[k] = arr[k-1]
            }
            arr[i] = smallestValue
        }
    }

    for (let i = 0; i < arrayOfTypeNumbers.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr[j] = Number(arr[j])
                j = arr.length
            }
        }
    }

    return arr
}