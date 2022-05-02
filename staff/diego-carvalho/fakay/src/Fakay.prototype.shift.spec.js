describe('Fakay.prototype.shift', () => {

    it('should shift one element', () => {

        const numbers = new Fakay(1, 2, 3)
        
        const result = numbers.shift()
        
        const expectedNumbers = new Fakay(2, 3)
        
        const resultExpected = 1
        
        expect(result).toBe(resultExpected)
        
        expect(numbers).toEqual(expectedNumbers)

    })

    it('should shift and empty array', () => {

        const emptyFakay = new Fakay()
        
        const result = emptyFakay.shift()
        
        const expectedFakay = new Fakay()
        
        const resultExpected = undefined
        
        expect(result).toBe(resultExpected)
        
        expect(emptyFakay).toEqual(expectedFakay)

    })

    it('should shift one element', () => {

        const fishes = new Fakay('angel', 'clown', 'mandarin', 'surgeon')
        
        const result = fishes.shift()
        
        const expectedFishes = new Fakay('clown', 'mandarin', 'surgeon')
        
        const resultExpected = 'angel'

        expect(result).toBe(resultExpected)
    
        expect(fishes).toEqual(expectedFishes)

    })

})