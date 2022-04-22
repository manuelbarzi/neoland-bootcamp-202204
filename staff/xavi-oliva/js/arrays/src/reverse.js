// function reverse(array) {
//     for (let i = 0; i < array.length; i++) {
        
//         const lastItem = array[array.length -1 -i];
        
//         const firstItem = array[i]

//         array[i] = lastItem

//         array[array.length -1 -i] = firstItem
        
//         if (i === array.length -1 -i || i + 1 === array.length / 2) 
//             i = array.length
//     }
//     return array
// }

function reverse(array) {
    for (let i = 0; i < array.length / 2; i++) {
        const elemA = array[i]
        const elemB = array[array.length - 1 - i]

        array[i] = elemB
        array[array.length - 1 - i] = elemA
    }

    return array
}