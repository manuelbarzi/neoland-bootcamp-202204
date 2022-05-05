function splice(array, index, deleteCount, ...newElements) {
    const deletedElements = []

    if (deleteCount === 1) {
        deletedElements[0] = array[index]

       for (let i = index; i< array.length - 1; i++)
       array[i] = array [i + 1]

       //array.length = array.length - 1
       //array.length -= 1
       array.length --
    } else if( deleteCount > 1) {
        for (let i = 1; i < deleteCount; i++)
        deletedElements[i] = array [index + i]
    }

    if (newElements.length === 1) {
        for (let i = array.length - 1; i >= index; i--)
            array[i + 1] = array[i]

        array[index] = newElements[0]
    } else if (newElements.length > 1) {
        for (let i= array.length - 1; i >= index; i-- )
    }
}