function unshift( array, ...element) {

    // for(let i = arguments.length -1; i >= 1; i--) {
    //     for(let j = array.length -1; j >= 0; j--){

    //         array[j +1] = array[j]
    //         array[0] = arguments[i]
    //     }

    // }
    // return array.length

    array = `${element},${array}`.split(',')
    return array
}