describe('Fakay.prototype.find', () => {

    it('should find the first element bigger than 10', () => {
        
        const numbers = new Fakay(5, 12, 8, 130, 44)
        
        const found = numbers.find((element, index) => {
            return element > 10
        })
        
        expect(found).toBe(12)

    })

    it('should return undefined because no element is bigger than 10', () => {

        const numbers = new Fakay(5, 1, 3, 4, 8)
        
        const found = numbers.find((element, index) => {
            return element > 10
        })
        
        expect(found).toBeUndefined()

    })

    it('should find the string regardless of upper or lowercase from index 2', () => {

        const strings = new Fakay('HeLlo', 'HELLO', 'heLlo', 'to', 'meet', 'you')

        const found = strings.find((element, index) => {
            return element.toUpperCase() === 'HELLO' && index >= 2
        })

        expect(found).toBe('heLlo')

    })

})
