console.log('SLICE TEST')

{

    const animales = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    {

        console.log('CASO 1')

        const result = slice(animales, 2)

        const expectedResult = ["camel", "duck", "elephant"]
        
        for (let i = 0; i < expectedResult.length; i++) {
            console.assert(result[i] === expectedResult[i])
        }

    }

    {

        console.log('CASO 2')

        const result = slice(animales, 2, 4)

        const expectedResult = ["camel", "duck"]
        
        for (let i = 0; i < expectedResult.length; i++) {
            console.assert(result[i] === expectedResult[i])
        }

    }

    {

        console.log('CASO 3')

        const result = slice(animales, 1, 5)

        const expectedResult = ["bison", "camel", "duck", "elephant"]
        
        for (let i = 0; i < expectedResult.length; i++) {
            console.assert(result[i] === expectedResult[i])
        }

    }

    {

        console.log('CASO 4')

        const result = slice(animales, -2)

        const expectedResult = ["duck", "elephant"]
        
        for (let i = 0; i < expectedResult.length; i++) {
            console.assert(result[i] === expectedResult[i])
        }

    }

    {

        console.log('CASO 5')

        const result = slice(animales, 2, -1)

        const expectedResult = ["camel", "duck"]
        
        for (let i = 0; i < expectedResult.length; i++) {
            console.assert(result[i] === expectedResult[i])
        }

    }

    {

        console.log('CASO 6')

        const result = slice(animales)

        const expectedResult = ["ant", "bison", "camel", "duck", "elephant"]
        
        for (let i = 0; i < expectedResult.length; i++) {
            console.assert(result[i] === expectedResult[i])
        }

    }

}