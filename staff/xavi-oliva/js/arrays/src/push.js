// function push() {

//     let array = arguments[0]

//     for (let i = 0; i < arguments.length - 1; i++)
//         array[array.length] = arguments[i + 1]

//     return array.length
// }

function push(array) {
    for (let i = 1; i < arguments.length; i++) {
        const element = arguments[i]

        array[array.length] = element
    }

    return array.length
}