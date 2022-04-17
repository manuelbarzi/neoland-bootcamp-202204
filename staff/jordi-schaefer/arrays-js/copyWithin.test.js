{
    console.log('TEST copyWithin')

    
    {
        console.log('CASE: 1')
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // expected = [1, 4, 5, 6, 7, 6, 7, 8, 9, 10]
        
        copyWithin(numbers, 1, 3, 7) // copio al indice 0, desde la posicion 3 a la 6
        console.assert(numbers.length === 10) // el array debe ser igual de largo
        console.assert(numbers[0] === 1) //  el valor en la posicion 1 sera 1
        console.assert(numbers[1] === 4) // posicion 1 sera 4
        console.assert(numbers[2] === 5)
        console.assert(numbers[3] === 6)
        console.assert(numbers[4] === 7)
        console.assert(numbers[5] === 6)
        console.assert(numbers[6] === 7)
        console.assert(numbers[7] === 8)
    }


    {
        console.log('CASE: 2')
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // expected = [1, 2, 3, 7, 8, 9, 10, 8, 9, 10]
        
        copyWithin(numbers, 3, 6) // copio al indice 3, todos los elementos de la posicion 6 hasta el final
        console.assert(numbers.length === 10) // el array debe ser igual de largo
        console.assert(numbers[0] === 1) //  el valor en la posicion 1 sera 1
        console.assert(numbers[1] === 2) // posicion 1 sera 4
        console.assert(numbers[2] === 3)
        console.assert(numbers[3] === 7)
        console.assert(numbers[4] === 8)
        console.assert(numbers[5] === 9)
        console.assert(numbers[6] === 10)
        console.assert(numbers[7] === 8)
        console.assert(numbers[8] === 9)
        console.assert(numbers[9] === 10)
    }


}