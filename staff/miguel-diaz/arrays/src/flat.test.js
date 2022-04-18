console.log('TEST FLAT')

{

    console.log('CASO 1')

    const array1 = [0, 1, 2, [3, 4]]

    const result = flat(array1) // expected output: [0, 1, 2, 3, 4]

    console.assert(array1[0] === result[0])
    console.assert(array1[1] === result[1])
    console.assert(array1[2] === result[2])
    console.assert(array1[3][0] === result[3])
    console.assert(array1[3][1] === result[4])

}

{

    console.log('CASO 2')
    
    const array2 = [0, 1, 2, [[[3, 4]]]]

    const result = flat(array2, 2) 

    console.assert(result[0] === 0)
    console.assert(result[1] === 1)
    console.assert(result[2] === 2)
    console.assert(result[3][0] === 3)
    console.assert(result[3][1] === 4)

}

{

    console.log('CASO 3')
    
    const array2 = [0, [1, 2], 3, 4, [[[[3, 4]], 5]]]

    const result = flat(array2, 3)

    console.assert(result[0] === 0)
    console.assert(result[1] === 1)
    console.assert(result[2] === 2)
    console.assert(result[3] === 3)
    console.assert(result[4] === 4)
    console.assert(result[5][0] === 3)
    console.assert(result[5][1] === 4)
    console.assert(result[6] === 5)

}