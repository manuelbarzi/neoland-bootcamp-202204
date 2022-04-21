function unshift(array, element) {
    /*
    [1, 2, 3] => unshift 4 => [4, 1, 2, 3]
    iterate array backwards
        place current elem in next index
    places element in index 0
    returns array length
    */

    for (let i = array.length - 1; i > -1; i--) {
        const currElem = array[i]

        array[i + 1] = currElem
    }

    array[0] = element

    return array.length
}