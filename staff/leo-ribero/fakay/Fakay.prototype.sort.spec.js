describe ('Fakay.prototype.sort', function() {

    it('should sort array of numbers', function () {
        const numbers = new Fakay (4, 3, 7, 1, 5, 6, 2, 10, 9, 8)
        // expected = [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
        
        numbers.sort() // ordenar el array
        expect(numbers.length).toBe(10) // el array debe ser igual de largo
        expect(numbers[0]).toBe(1) 
        expect(numbers[1]).toBe(10)
        expect(numbers[2]).toBe(2) 
        expect(numbers[3]).toBe(3)
        expect(numbers[4]).toBe(4)
        expect(numbers[5]).toBe(5)
        expect(numbers[6]).toBe(6)
        expect(numbers[7]).toBe(7)
        expect(numbers[8]).toBe(8)
        expect(numbers[9]).toBe(9)
    })

    it('should sort array of strings', function () {
        let stringArray = new Fakay ('Bbbblue', 'Humpback', 'Bbbblue', 'Bbbbeluga')
        // ['Beluga', 'Blue', 'Humpback']

        stringArray.sort()
        expect(stringArray[0]).toBe('Bbbbeluga') 
        expect(stringArray[1]).toBe('Bbbblue')
        expect(stringArray[2]).toBe('Bbbblue')
        expect(stringArray[3]).toBe('Humpback')
    })

    it('should sort array of big numbers', function () {
        let numberArray = new Fakay (40, 1, 5, 200)
        // [1, 200, 40, 5]

        numberArray.sort()
        expect(numberArray[0]).toBe(1) 
        expect(numberArray[1]).toBe(200)
        expect(numberArray[2]).toBe(40)
        expect(numberArray[3]).toBe(5)
    })

    it('should sort array of string-numbers', function () {
        let numericStringArray = new Fakay ('80', '9', '700')
        // ['700', '80', '9']

        numericStringArray.sort()
        expect(numericStringArray[0]).toBe('700') 
        expect(numericStringArray[1]).toBe('80')
        expect(numericStringArray[2]).toBe('9')
    })

    it('should sort array of string-numbers and numbers', function () {
        let mixedNumericArray = new Fakay ('80', '9', '700', 40, 1, 5, 200)
        // [1, 200, 40, 5, '700', '80', '9']

        mixedNumericArray.sort()
        expect(mixedNumericArray[0]).toBe(1) 
        expect(mixedNumericArray[1]).toBe(200)
        expect(mixedNumericArray[2]).toBe(40)
        expect(mixedNumericArray[3]).toBe(5) 
        expect(mixedNumericArray[4]).toBe('700')
        expect(mixedNumericArray[5]).toBe('80')
        expect(mixedNumericArray[6]).toBe('9')
    })

})

    

 /*      Test para un sort normal   
    {
        console.log('CASE: 1')
        const numbers = [4, 3, 7, 1, 5, 6, 2, 10, 9, 8]
        // expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        
        sort(numbers) // ordenar el array
        expect(numbers.length).toBe(10) // el array debe ser igual de largo
        expect(numbers[0]).toBe(1) 
        expect(numbers[1]).toBe(2) 
        expect(numbers[2]).toBe(3)
        expect(numbers[3]).toBe(4)
        expect(numbers[4]).toBe(5)
        expect(numbers[5]).toBe(6)
        expect(numbers[6]).toBe(7)
        expect(numbers[7]).toBe(8)
        expect(numbers[8]).toBe(9)
        expect(numbers[9]).toBe(10)
    }


    {
        console.log('CASE: 2')
        const numbers = [4, 10, 10, 3, 7, 9, 5, 6, 4, 1, 2, 7, 3, 5, 1, 6, 8, 5, 9, 4, 2, 6, 10, 9, 8]
        // expected = [1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 9, 10, 10, 10]
        
        sort(numbers) // ordenar el array
        expect(numbers.length).toBe(25) // el array debe ser igual de largo
        expect(numbers[0]).toBe(1) 
        expect(numbers[1]).toBe(1) 
        expect(numbers[2]).toBe(2)
        expect(numbers[3]).toBe(2)
        expect(numbers[4]).toBe(3)
        expect(numbers[5]).toBe(3)
        expect(numbers[6]).toBe(4)
        expect(numbers[7]).toBe(4)
        expect(numbers[8]).toBe(4)
        expect(numbers[9]).toBe(5)

        console.log(numbers)
    }
*/