describe('Fakay.prototype.copyWithin', () => {

    it('should paste one element in target 0', () => {

        const letters = new Fakay('a', 'b', 'c', 'd', 'e')
        
        const result = letters.copyWithin(0, 3, 4);
        
        const expectedResult = new Fakay('d', 'b', 'c', 'd', 'e')
        
        expect(result).toEqual(expectedResult)

    })

    it('should paste elements from 3 to the end in target 1', () => {

        const letters = new Fakay('d', 'b', 'c', 'd', 'e')
        
        const result = letters.copyWithin(1, 3);
        
        const expectedResult = new Fakay('d', 'd', 'e', 'd', 'e')
        
        expect(result).toEqual(expectedResult)

    })

    it('should work using a negative target', () => {

        const letters = new Fakay('d', 'b', 'c', 'd', 'e')
        
        const result = letters.copyWithin(-1, 3);
        
        const expectedResult = new Fakay('d', 'b', 'c', 'd', 'd')

        expect(result).toEqual(expectedResult)

    })

    it('should work using negatives arguments', () => {

        const letters = new Fakay('a', 'b', 'c', 'd', 'e')
        
        const result = letters.copyWithin(-4, -3, -2);
        
        const expectedResult = new Fakay('a', 'c', 'c', 'd', 'e')

        expect(result).toEqual(expectedResult)

    })

    it('should work using a negative index and without declaring start and end', () => {

        const numbers = new Fakay(1, 2, 3, 4, 5)
        
        const expectedResult = new Fakay(1, 2, 3, 1, 2)
        
        const result = numbers.copyWithin(-2);

        expect(result).toEqual(expectedResult)

    })

    it('should paste elements from index 3 to the end in target 0', () => {

        const numbers = new Fakay(1, 2, 3, 4, 5)
        
        const expectedResult = new Fakay(4, 5, 3, 4, 5)
        
        const result = numbers.copyWithin(0, 3);

        expect(result).toEqual(expectedResult)

    })

    it('should paste the element from index 3 in target 0', () => {

        const numbers = new Fakay(1, 2, 3, 4, 5)
    
        const expectedResult = new Fakay(4, 2, 3, 4, 5)
    
        const result = numbers.copyWithin(0, 3, 4);

        expect(result).toEqual(expectedResult)

    })

    it('should paste elements from -3 to -1 in target -2', () => {

        const numbers = new Fakay(1, 2, 3, 4, 5)
        
        const expectedResult = new Fakay(1, 2, 3, 3, 4)
        
        const result = numbers.copyWithin(-2, -3, -1);

        expect(result).toEqual(expectedResult)

    })

})


