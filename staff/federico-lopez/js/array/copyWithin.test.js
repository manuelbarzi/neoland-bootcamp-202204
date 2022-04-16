console.log('TEST Copy Within')

{

    console.log('TEST 1')

    const arr = ['a', 'b', 'c', 'd', 'e'];

    // copy to index 0 the element at index 3
    const result = copyWithin(arr, 0, 3, 4)

    const expectedResult = ["d", "b", "c", "d", "e"]

    for (let i = 0; i < arr.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }

}

{

    console.log('TEST 2')

    const arr = ["d", "b", "c", "d", "e"]

    const result = copyWithin(arr, 1, 3);

    const expectedResult = ["d", "d", "e", "d", "e"]

    for (let i = 0; i < arr.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }


}

{

    console.log('TEST 3')

    const arr = ["d", "b", "c", "d", "e"]

    const result = copyWithin(arr, -1, 3);

    const expectedResult = ["d", "b", "c", "d", "d"]

    for (let i = 0; i < arr.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }


}

{

    console.log('TEST 4')

    const arr = ["a", "b", "c", "d", "e"]

    const result = copyWithin(arr, -4, -3, -2);

    const expectedResult = ["a", "c", "c", "d", "e"]

    for (let i = 0; i < arr.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }


}

{

    console.log('TEST 5')

    const arr = [1, 2, 3, 4, 5]
    
    const expectedResult = [1, 2, 3, 1, 2]

    const result = copyWithin(arr, -2)
    
    for (let i = 0; i < arr.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }

}

{

    console.log('TEST 6')

    const arr = [1, 2, 3, 4, 5]
    
    const expectedResult = [4, 5, 3, 4, 5]

    const result = copyWithin(arr, 0, 3)
    
    for (let i = 0; i < arr.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }

}

{

    console.log('TEST 7')

    const arr = [1, 2, 3, 4, 5]
    
    const expectedResult = [4, 2, 3, 4, 5]

    const result = copyWithin(arr, 0, 3, 4)
    
    for (let i = 0; i < arr.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }

}

{

    console.log('TEST 8')

    const arr = [1, 2, 3, 4, 5]
    
    const expectedResult = [1, 2, 3, 3, 4]

    const result = copyWithin(arr, -2, -3, -1)
    
    for (let i = 0; i < arr.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }

}


