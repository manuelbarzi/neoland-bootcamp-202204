describe('reverse', function() {
    test('array with numbers', function() {
        const numbers = [1, 2, 3, 4, 5, 6]
        // expected = [6, 5, 4, 3, 2, 1]

        reversed = reverse(numbers)
        expect(reversed.length).toBe(6)
        expect(reversed[0]).toBe(6)
        expect(reversed[1]).toBe(5)
        expect(reversed[2]).toBe(4)
        expect(reversed[3]).toBe(3)
        expect(reversed[4]).toBe(2)
        expect(reversed[5]).toBe(1)
    })

    test('array with strings', function() {
        const numbers = ['uno', 'dos', 'tres', 'cuatro']
        // expected = ['cuatro', 'tres', 'dos', 'uno']

        reversed = reverse(numbers)
        expect(reversed.length).toBe(4)
        expect(reversed[0]).toBe('cuatro')
        expect(reversed[1]).toBe('tres')
        expect(reversed[2]).toBe('dos')
        expect(reversed[3]).toBe('uno')
    })
})



/*
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
*/