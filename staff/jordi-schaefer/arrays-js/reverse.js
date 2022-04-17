
function reverse (array){
    const new_array = []
    for ( let i = 0; i < array.length; i++){
        new_array[array.length-1-i] = array[i]
    }

    return new_array
}