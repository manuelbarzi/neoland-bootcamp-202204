function reverse(array){
    const reversed = []

    for(let i = array.length - 1; i >= 0; i--){
        reversed[reversed.length] = array[i]
    }


    for(index in reversed) {
        array[index] = reversed[index]
    }

}