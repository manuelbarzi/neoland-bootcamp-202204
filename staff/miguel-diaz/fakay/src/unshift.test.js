console.log('UNSHIFT TEST')

{

    console.log('CASO 1')

    const array1 = [1, 2, 3]

    const result = unshift(array1, 4, 5)

    const expectedResult = 5

    const expectedArray = [4, 5, 1, 2, 3]

    console.assert(result === expectedResult)

    for (let i = 0; i < expectedArray.length; i++) {
        console.assert(array1[i] === expectedArray[i])
    }

}

{

    console.log('CASO 2')

    const array1 = [4, 5, 6]

    const result = unshift(array1, 1, 2, 3)

    const expectedResult = 6

    const expectedArray = [1, 2, 3, 4, 5, 6]

    console.assert(result === expectedResult)

    for (let i = 0; i < expectedArray.length; i++) {
        console.assert(array1[i] === expectedArray[i])
    }
    
}

{

    console.log('CASO 3')

    const array1 = [4, 5, 6]

    unshift(array1, 1)
    unshift(array1, 2)
    unshift(array1, 3)

    const expectedArray = [3, 2, 1, 4, 5, 6]

    for (let i = 0; i < expectedArray.length; i++) {
        console.assert(array1[i] === expectedArray[i])
    }
    
}