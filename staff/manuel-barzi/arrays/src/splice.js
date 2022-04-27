function splice(array, index, deleteCount, newElement) {
    const deletedElements = []

    if (deleteCount === 1) {
        deletedElements[0] = array[index]

        array[index] = newElement
    } else {
        for (let i = array.length - 1; i >= index; i--)
            array[i + 1] = array[i]

        array[index] = newElement
    }

    return deletedElements
}