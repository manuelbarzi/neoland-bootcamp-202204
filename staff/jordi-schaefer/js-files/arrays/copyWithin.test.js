
describe ('copyWithin', function() {
    
    it ('start + end index', function() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // expected = [1, 4, 5, 6, 7, 6, 7, 8, 9, 10]
        copyWithin(numbers, 1, 3, 7) // copio al indice 0, desde la posicion 3 a la 6
        expect(numbers.length).toBe(10) // el array debe ser igual de largo
        expect(numbers[0]).toBe(1) //  el valor en la posicion 1 sera 1
        expect(numbers[1]).toBe(4) // posicion 1 sera 4
        expect(numbers[2]).toBe(5)
        expect(numbers[3]).toBe(6)
        expect(numbers[4]).toBe(7)
        expect(numbers[5]).toBe(6)
        expect(numbers[6]).toBe(7)
        expect(numbers[7]).toBe(8)
    })

    it ('only start index', function() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // expected = [1, 2, 3, 7, 8, 9, 10, 8, 9, 10]
        copyWithin(numbers, 3, 6) // copio al indice 3, todos los elementos de la posicion 6 hasta el final
        expect(numbers.length).toBe(10) // el array debe ser igual de largo
        expect(numbers[0]).toBe(1) //  el valor en la posicion 1 sera 1
        expect(numbers[1]).toBe(2) // posicion 1 sera 4
        expect(numbers[2]).toBe(3)
        expect(numbers[3]).toBe(7)
        expect(numbers[4]).toBe(8)
        expect(numbers[5]).toBe(9)
        expect(numbers[6]).toBe(10)
        expect(numbers[7]).toBe(8)
        expect(numbers[8]).toBe(9)
        expect(numbers[9]).toBe(10)
    })

})