{
    console.log('TEST unshift')

    
    {
        console.log('CASE: 1')
        const numbers = [1, 2, 3, 4, 5, 6]
        // expected = [7, 1, 2, 3, 4, 5, 6]
        
        const result = unshift(numbers, 7)

        console.assert(result === 7) // el largo del array sera ahora 7
        console.assert(numbers[0] === 7) //  el valor en la posicion 1 sera 7
        console.assert(numbers[1] === 1) // el valor 1 pasara a estar en la segunda posicion
    }


    {
        console.log('CASE: 2')
        const numbers = [1, 2, 3, 4, 5, 6]
        // expected = [7, 8, 9, 10, 1, 2, 3, 4, 5, 6]

        const result = unshift(numbers, 7, 8, 9, 10)

        console.assert(result === 10) // el largo del array sera ahora 10
        console.assert(numbers[0] === 7) //  el valor en la posicion 1 sera 7
        console.assert(numbers[1] === 8)
        console.assert(numbers[2] === 9)
        console.assert(numbers[3] === 10)
        console.assert(numbers[4] === 1) // el valor 1 pasara a estar en la segunda posicion
        console.assert(numbers[5] === 2)
        console.assert(numbers[6] === 3)
        console.assert(numbers[7] === 4)
        console.assert(numbers[8] === 5)
        console.assert(numbers[9] === 6)
    }


}