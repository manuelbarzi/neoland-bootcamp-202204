describe('unshift', function () {
    it('add one number', function () {
        const numbers = [1, 2, 3, 4, 5, 6]
        // expected = [7, 1, 2, 3, 4, 5, 6]
        
        const result = unshift(numbers, 7)
        expect(result).toBe(7) // el largo del array sera ahora 7
        expect(numbers[0]).toBe(7) //  el valor en la posicion 1 sera 7
        expect(numbers[1]).toBe(1) // el valor 1 pasara a estar en la segunda posicion
    })

    it('add four number', function () {
        const numbers = [1, 2, 3, 4, 5, 6]
        // expected = [7, 8, 9, 10, 1, 2, 3, 4, 5, 6]

        const result = unshift(numbers, 7, 8, 9, 10)

        expect(result).toBe(10) // el largo del array sera ahora 10
        expect(numbers[0]).toBe(7) //  el valor en la posicion 1 sera 7
        expect(numbers[1]).toBe(8)
        expect(numbers[2]).toBe(9)
        expect(numbers[3]).toBe(10)
        expect(numbers[4]).toBe(1) // el valor 1 pasara a estar en la segunda posicion
        expect(numbers[5]).toBe(2)
        expect(numbers[6]).toBe(3)
        expect(numbers[7]).toBe(4)
        expect(numbers[8]).toBe(5)
        expect(numbers[9]).toBe(6)
    })

})