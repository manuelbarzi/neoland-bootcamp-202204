console.log('TEST SLICE')

{

    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    {

        console.log('TEST 1')

        const result = slice(animals, 2)

        const expectedResult = ["camel", "duck", "elephant"]
        
        for (let i = 0; i < expectedResult.length; i++) {
            console.assert(result[i] === expectedResult[i])
        }

    }

    {

        console.log('TEST 2')

        const result = slice(animals, 2, 4)

        const expectedResult = ["camel", "duck"]
        
        for (let i = 0; i < expectedResult.length; i++) {
            console.assert(result[i] === expectedResult[i])
        }

    }

    {

        console.log('TEST 3')

        const result = slice(animals, 1, 5)

        const expectedResult = ["bison", "camel", "duck", "elephant"]
        
        for (let i = 0; i < expectedResult.length; i++) {
            console.assert(result[i] === expectedResult[i])
        }

    }

    {

        console.log('TEST 4')

        const result = slice(animals, -2)

        const expectedResult = ["duck", "elephant"]
        
        for (let i = 0; i < expectedResult.length; i++) {
            console.assert(result[i] === expectedResult[i])
        }

    }

    {

        console.log('TEST 5')

        const result = slice(animals, 2, -1)

        const expectedResult = ["camel", "duck"]
        
        for (let i = 0; i < expectedResult.length; i++) {
            console.assert(result[i] === expectedResult[i])
        }

    }

    {

        console.log('TEST 6')

        const result = slice(animals)

        const expectedResult = ["ant", "bison", "camel", "duck", "elephant"]
        
        for (let i = 0; i < expectedResult.length; i++) {
            console.assert(result[i] === expectedResult[i])
        }

    }

}