function splice(array, start, removeCount = array.length - start, ...newElements) {
    if (start < 0) {
        // index = index + array.length
        start += array.length
    }

    const removedElements = []

    if (removeCount === 1) {
        removedElements[0] = array[start]

        for (let i = start; i < array.length - 1; i++)
            array[i] = array[i + 1]

        // array.length = array.length - 1
        // array.length -= 1
        array.length--
    } else if (removeCount > 1) {
        for (let i = 0; i < removeCount; i++)
            removedElements[i] = array[start + i]

        for (let i = start; i < array.length - removeCount; i++)
            array[i] = array[i + removeCount]

        // array.length = array.length - deleteCount
        array.length -= removeCount
    }

    if (newElements.length === 1) {
        for (let i = array.length - 1; i >= start; i--)
            array[i + 1] = array[i]

        array[start] = newElements[0]
    } else if (newElements.length > 1) {
        for (let i = array.length - 1; i >= start; i--)
            array[i + newElements.length] = array[i]

        for (let i = 0; i < newElements.length; i++)
            array[start + i] = newElements[i]
    }

    return removedElements
}