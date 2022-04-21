function reverse(array) {
    const elem1 = array[0]
    const elem2 = array[1]
    const elem3 = array[array.length - 2]
    const elem4 = array[array.length - 1]

    array[0] = elem4
    array[1] = elem3
    array[array.length - 2] = elem2
    array[array.length - 1] = elem1

    return array
}