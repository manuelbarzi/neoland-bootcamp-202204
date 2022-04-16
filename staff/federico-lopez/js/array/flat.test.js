console.log('TEST FLAT')

{

    console.log('CASE 1')

    const arr1 = [0, 1, 2, [3, 4]]

    const result = flat(arr1) // expected output: [0, 1, 2, 3, 4]

    console.assert(arr1[0] === result[0])
    console.assert(arr1[1] === result[1])
    console.assert(arr1[2] === result[2])
    console.assert(arr1[3][0] === result[3])
    console.assert(arr1[3][1] === result[4])

}

{

    console.log('CASE 2')
    
    const arr2 = [0, 1, 2, [[[3, 4]]]]

    const result = flat(arr2, 2) // expected output: [0, 1, 2, [3, 4]]

    console.assert(result[0] === 0)
    console.assert(result[1] === 1)
    console.assert(result[2] === 2)
    console.assert(result[3][0] === 3)
    console.assert(result[3][1] === 4)

}

{

    console.log('CASE 3')
    
    const arr2 = [0, [1, 2], 3, 4, [[[[3, 4]], 5]]]

    const result = flat(arr2, 3)

    console.assert(result[0] === 0)
    console.assert(result[1] === 1)
    console.assert(result[2] === 2)
    console.assert(result[3] === 3)
    console.assert(result[4] === 4)
    console.assert(result[5][0] === 3)
    console.assert(result[5][1] === 4)
    console.assert(result[6] === 5)

}