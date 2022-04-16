
function at(array, index) {
    if (index < 0)
        index = array.length + index

    const element = array[index]

    return element
}