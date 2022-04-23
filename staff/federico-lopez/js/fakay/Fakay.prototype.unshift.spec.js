describe('Fakay.prototype.unshift', () => {

    it('should unshift two elements', () => {

        const numbers = new Fakay(1, 2, 3)
    
        const result = numbers.unshift(4, 5)
    
        const expectedResult = 5
    
        const expectedNumbers = new Fakay(4, 5, 1, 2, 3)

        expect(result).toBe(expectedResult)

        expect(numbers).toEqual(expectedNumbers)

    })

    it('should unshift three elements', () => {

        const numbers = new Fakay(4, 5, 6)
        
        const result = numbers.unshift(1, 2, 3)
        
        const expectedResult = 6
        
        const expectedNumbers = new Fakay(1, 2, 3, 4, 5, 6)

        expect(result).toBe(expectedResult)

        expect(numbers).toEqual(expectedNumbers)
    })

    it('should unshift three elements, one at the time', () => {

        const numbers = new Fakay(4, 5, 6)
        
        numbers.unshift(1)
        numbers.unshift(2)
        numbers.unshift(3)
        
        const expectedNumbers = new Fakay(3, 2, 1, 4, 5, 6)

        expect(numbers).toEqual(expectedNumbers)

    })

})