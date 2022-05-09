/*
    [1, 2, 3] => unshift 4,5 => [4, 5, 1, 2, 3]
    iterate array backward
        place current elem in next index
    iterate elemnts forward
        place each element in array (same index)
    returns array length
*/

function unshift(array, ...elements) {
    for (let i = array.length - 1; i > -1; i--)
        array[i + elements.length] = array[i]

    for (let i = 0; i < elements.length; i++)
        array[i] = elements[i]

    return array.length
}