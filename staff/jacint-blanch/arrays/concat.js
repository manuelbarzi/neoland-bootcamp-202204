function concat(array1, array2, array3 = []) {

    let array = []

    for(var i = 0; i < array1.length; i++) {
        array.push(array1[i])
    }

    for(var i = 0; i < array2.length; i++) {
        array.push(array2[i])
    }

    for(var i = 0; i < array3.length; i++) {
        array.push(array3[i])
    }

    
    return array
}
    let array1 = ['a', 'b', 'c']
    let array2 = ['d', 'e', 'f']
