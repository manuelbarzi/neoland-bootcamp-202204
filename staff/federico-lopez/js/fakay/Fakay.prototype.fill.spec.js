describe('Fakay.prototype.fill', () => {

    const numbers = new Fakay(1, 2, 3, 4)

    it('should fill with zeros from 2 to 4', () => {
        
        const result = numbers.fill(0, 2, 4)
        
        const expectedResult = new Fakay(1, 2, 0, 0)
        
        expect(expectedResult).toEqual(numbers)
        expect(expectedResult).toEqual(result)

    })

    it('should fill with fives from 1', () => {
        
        const result = numbers.fill(5, 1)
    
        const expectedResult = new Fakay(1, 5, 5, 5)
    
        expect(expectedResult).toEqual(numbers)
        expect(expectedResult).toEqual(result)

    })

    it('should fill all the fakay with sixs', () => {
        
        const result = numbers.fill(6)

        const expectedResult = new Fakay(6, 6, 6, 6)

        expect(expectedResult).toEqual(numbers)
        expect(expectedResult).toEqual(result)

    })
})