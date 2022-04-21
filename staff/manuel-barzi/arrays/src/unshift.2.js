function unshift(array, ...elements) {
    /*
    [1, 2, 3] => unshift 4,5 => [4, 5, 1, 2, 3]
    iterate array backward
        place current elem in next index
    iterate elemnts forward
        place each element in array (same index)
    returns array length
    */

    for (let i = array.length - 1; i > -1; i--) {
        const currElem = array[i]

        array[i + elements.length] = currElem
    }

    for (let i = 0; i < elements.length; i++) {
        const currElem = elements[i]

        array[i] = currElem
    }

    return array.length
}