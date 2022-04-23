describe('Fakay.prototype.every', () => {

    it('should check is all numbers are less than 40', () => {

        const numbers = new Fakay(1, 30, 39, 29, 10, 13)
        
        const isBelowThreshold = (currentValue) => currentValue < 40
        
        const result = numbers.every(isBelowThreshold)
        
        expect(result).toBe(true)

    })

    it('should check if all are numbers', () => {

        const fakay = new Fakay(1, 30, 39, 'hola', 29, 10, 13)
        
        const allAreNumbers = currentValue => typeof currentValue === 'number'
        
        const result = fakay.every(allAreNumbers)
        
        expect(result).toBe(false)

    })

    it('should check if all are number from index 5', () => {

        const fakay = new Fakay(1, 30, 39, 'hola', 29, 10, 13)
        
        const allAreNumbers = (currentValue, index) => {
            return index < 5 || typeof currentValue === 'number' 
        }

        const result = fakay.every(allAreNumbers)
        
        expect(result).toBe(true)

    })

})