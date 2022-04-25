{
    console.log('TEST concat')

    const array1 = ['a', 'b', 'c']
    const array2 = ['d', 'e', 'f']

    {
        console.log('CASE 1')

        const result = concat(array1, array2)

        console.assert(result.length === array1.length + array2.length)
        console.assert(result[0] === array1[0])
        console.assert(result[1] === array1[1])
        console.assert(result[2] === array1[2])
        console.assert(result[3] === array2[0])
        console.assert(result[4] === array2[1])
        console.assert(result[5] === array2[2])
    }

    const array3 = ['g', 'h', 'i']

    {
        console.log('CASE 2')

        const result = concat(array1, array2, array3)

        console.assert(result.length === array1.length + array2.length + array3.length)
        console.assert(result[0] === array1[0])
        console.assert(result[1] === array1[1])
        console.assert(result[2] === array1[2])
        console.assert(result[3] === array2[0])
        console.assert(result[4] === array2[1])
        console.assert(result[5] === array2[2])
        console.assert(result[6] === array3[0])
        console.assert(result[7] === array3[1])
        console.assert(result[8] === array3[2])
    }

    const array4 = ['j', 'k', 'l']

    {
        console.log('CASE 3')

        const result = concat(array1, array2, array3, array4)

        console.assert(result.length === array1.length + array2.length + array3.length + array4.length)
        console.assert(result[0] === array1[0])
        console.assert(result[1] === array1[1])
        console.assert(result[2] === array1[2])
        console.assert(result[3] === array2[0])
        console.assert(result[4] === array2[1])
        console.assert(result[5] === array2[2])
        console.assert(result[6] === array3[0])
        console.assert(result[7] === array3[1])
        console.assert(result[8] === array3[2])
        console.assert(result[9] === array4[0])
        console.assert(result[10] === array4[1])
        console.assert(result[11] === array4[2])
    }

    const array5 = ['m', 'n', 'o']

    {
        console.log('CASE 4')

        const result = concat(array1, array2, array3, array4, array5)

        console.assert(result.length === array1.length + array2.length + array3.length + array4.length + array5.length)
        console.assert(result[0] === array1[0])
        console.assert(result[1] === array1[1])
        console.assert(result[2] === array1[2])
        console.assert(result[3] === array2[0])
        console.assert(result[4] === array2[1])
        console.assert(result[5] === array2[2])
        console.assert(result[6] === array3[0])
        console.assert(result[7] === array3[1])
        console.assert(result[8] === array3[2])
        console.assert(result[9] === array4[0])
        console.assert(result[10] === array4[1])
        console.assert(result[11] === array4[2])
        console.assert(result[12] === array5[0])
        console.assert(result[13] === array5[1])
        console.assert(result[14] === array5[2])
    }

    {
        console.log('CASE 5')

        const result = concat(array1, array2, array3, array4, array5, 'p')

        console.assert(result.length === array1.length + array2.length + array3.length + array4.length + array5.length + 1)
        console.assert(result[0] === array1[0])
        console.assert(result[1] === array1[1])
        console.assert(result[2] === array1[2])
        console.assert(result[3] === array2[0])
        console.assert(result[4] === array2[1])
        console.assert(result[5] === array2[2])
        console.assert(result[6] === array3[0])
        console.assert(result[7] === array3[1])
        console.assert(result[8] === array3[2])
        console.assert(result[9] === array4[0])
        console.assert(result[10] === array4[1])
        console.assert(result[11] === array4[2])
        console.assert(result[12] === array5[0])
        console.assert(result[13] === array5[1])
        console.assert(result[14] === array5[2])
        console.assert(result[15] === 'p')
    }

    {
        console.log('CASE 6')

        const result = concat(array1, 10, array2)

        console.assert(result.length === array1.length + 1 + array2.length)
        console.assert(result[0] === array1[0])
        console.assert(result[1] === array1[1])
        console.assert(result[2] === array1[2])
        console.assert(result[3] === 10)
        console.assert(result[4] === array2[0])
        console.assert(result[5] === array2[1])
        console.assert(result[6] === array2[2])
    }

    {
        console.log('CASE 7')

        const result = concat(array1, 'hola mundo', array2)

        console.assert(result.length === array1.length + 1 + array2.length)
        console.assert(result[0] === array1[0])
        console.assert(result[1] === array1[1])
        console.assert(result[2] === array1[2])
        console.assert(result[3] === 'hola mundo')
        console.assert(result[4] === array2[0])
        console.assert(result[5] === array2[1])
        console.assert(result[6] === array2[2])
    }
}