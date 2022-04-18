function sort(array) {
    
    arrayOfTypeNumbers = []

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            arrayayOfTypeNumbers.push(array[0])
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== undefined)
            array[i] = String(array[i])
    }

    for (let i = 0; i < array.length - 1; i++) {
        let smallestValue = array[i]
        let smallestIndex
        for (let j = 1 + i; j < array.length; j++) {
            if (array[j] < array[i] && array[j] < smallestValue) {
                smallestIndex = j
                smallestValue = array[j]
            }
        }
        if (smallestIndex !== undefined) {
            for (let k = smallestIndex; k >= i + 1; k--) {
                array[k] = array[k-1]
            }
            array[i] = smallestValue
        }
    }

    for (let i = 0; i < arrayayOfTypeNumbers.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                array[j] = Number(array[j])
                j = array.length
            }
        }
    }

    return array
}