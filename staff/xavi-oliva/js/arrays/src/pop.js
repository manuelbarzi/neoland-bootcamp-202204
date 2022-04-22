// function pop(array) {

//     const element = array[array.length - 1]

//     array.length = array.length - 1

//     return element
// }

function pop(array) {

    const lastElem = array[array.length - 1]

    if (array.length)
        array.length--

    return lastElem

}