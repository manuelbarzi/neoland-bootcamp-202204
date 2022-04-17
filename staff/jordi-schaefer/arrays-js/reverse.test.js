{
    console.log('TEST reverse')

    
    {
        console.log('CASE: 1')
        const numbers = [1, 2, 3, 4, 5, 6]
        // expected = [6, 5, 4, 3, 2, 1]
        
        const result = reverse(numbers)
        console.assert(result.length === 6) // el array debe ser igual de largo
        console.assert(result[0] === 6) //  el valor en la posicion 1 sera 1
        console.assert(result[5] === 1) // y el 1 para a la ultima posicion
    }


    {
        console.log('CASE: 2')
        const numbers = ['uno', 'dos', 'tres', 'cuatro']
        // expected = ['cuatro', 'tres', 'dos', 'uno']
        
        const result = reverse(numbers)
        console.assert(result.length === 4) // el array debe ser igual de largo
        console.assert(result[0] === 'cuatro') //  el valor en la posicion 1 sera 1
        console.assert(result[3] === 'uno') // y el 1 para a la ultima posicion
    }



}