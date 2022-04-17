/*

VERSION caso 1

*/

function pop(array) {
    const newArrayFormerLast = array[array.length-1]
    const formerArrayLength = array.length-1
    array.length = formerArrayLength
    return array
}

