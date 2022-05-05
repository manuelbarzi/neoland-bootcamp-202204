console.log('FILL TEST')

{

    const array1 = [1, 2, 3, 4]

    {
        console.log('CASO 1')

        const result = fill(array1, 0, 2, 4)

        const expectedResult = [1, 2, 0, 0]

        console.assert(result.length === expectedResult.length)

        for(let i = 0; i < expectedResult.length; i++) {
            console.assert(expectedResult[i] === result[i])
            console.assert(expectedResult[i] === array1[i])
        }

    }

    {
        console.log('CASO 2')

        const result = fill(array1, 5, 1)

        const expectedResult = [1, 5, 5, 5]

        console.assert(result.length === expectedResult.length)

        for(let i = 0; i < expectedResult.length; i++) {
            console.assert(expectedResult[i] === result[i])
            console.assert(expectedResult[i] === array1[i])
        }

    }

    {

        console.log('CASE 3')

        const result = fill(array1, 6)

        const expectedResult = [6, 6, 6, 6]

        console.assert(result.length === expectedResult.length)

        for(let i = 0; i < expectedResult.length; i++) {
            console.assert(expectedResult[i] === result[i])
            console.assert(expectedResult[i] === array1[i])
        }
        
    }

}