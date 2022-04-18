console.log('COPY WITHIN TEST')

{

    console.log('CASO 1')

    const array = ['a', 'b', 'c', 'd', 'e'];

    // copy to index 0 the element at index 3
    const result = copyWithin(array, 0, 3, 4)

    const expectedResult = ["d", "b", "c", "d", "e"]

    for (let i = 0; i < array.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }

}

{

    console.log('CASO 2')

    const array = ["d", "b", "c", "d", "e"]

    const result = copyWithin(array, 1, 3);

    const expectedResult = ["d", "d", "e", "d", "e"]

    for (let i = 0; i < array.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }


}

{

    console.log('CASO 3')

    const array = ["d", "b", "c", "d", "e"]

    const result = copyWithin(array, -1, 3);

    const expectedResult = ["d", "b", "c", "d", "d"]

    for (let i = 0; i < array.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }


}

{

    console.log('CASO 4')

    const array = ["a", "b", "c", "d", "e"]

    const result = copyWithin(array, -4, -3, -2);

    const expectedResult = ["a", "c", "c", "d", "e"]

    for (let i = 0; i < arr.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }


}

{

    console.log('CASO 5')

    const array = [1, 2, 3, 4, 5]
    
    const expectedResult = [1, 2, 3, 1, 2]

    const result = copyWithin(array, -2)
    
    for (let i = 0; i < array.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }

}

{

    console.log('CASO 6')

    const array = [1, 2, 3, 4, 5]
    
    const expectedResult = [4, 5, 3, 4, 5]

    const result = copyWithin(array, 0, 3)
    
    for (let i = 0; i < arr.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }

}

{

    console.log('CASO 7')

    const array = [1, 2, 3, 4, 5]
    
    const expectedResult = [4, 2, 3, 4, 5]

    const result = copyWithin(array, 0, 3, 4)
    
    for (let i = 0; i < array.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }

}

{

    console.log('CASO 8')

    const array = [1, 2, 3, 4, 5]
    
    const expectedResult = [1, 2, 3, 3, 4]

    const result = copyWithin(array, -2, -3, -1)
    
    for (let i = 0; i < array.length; i++) {
        console.assert(result[i] === expectedResult[i])
     }

}
