function reverse(array) {
    for (let i = 0; i < array.length / 2; i++) {
        const elemA = array[i]
        const elemB = array[array.length - 1 - i]

        array[i] = elemB
        array[array.length - 1 - i] = elemA
    }

    return array
}