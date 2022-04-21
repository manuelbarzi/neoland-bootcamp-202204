function reverse(){
    const elem1 = array[0]
    const elem2 = array[array.length-1]

    array[0] = elem2
    array[array.length-1] = elem1
    return array

}