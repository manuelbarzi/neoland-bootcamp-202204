// function reverse(){
//     const elem1 = array[0]
//     const elem2 = array[array.length-1]
//     const elem3 = array[array.length-1]

//     array[0] = elem2
//     array[array.length-1] = elem1
//     return array

// }
// manu's version tue 19 april

function reverse(array) {
    for (let i = 0; i < array.length / 2; i++) {
        const elemA = array[i]
        const elemB = array[array.length - 1 - i]

        array[i] = elemB
        array[array.length - 1 - i] = elemA
    }

    return array
}