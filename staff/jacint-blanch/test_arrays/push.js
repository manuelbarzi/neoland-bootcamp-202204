// function push(array, element) {

//     array[array.length] = element

//     return array.length
    
// }

function push(array) {
    for (let i = 1; i < arguments.length; i++) {
        const element = arguments[i]

        array[array.length] = element
    }

    return array.length
}