describe('Fakay.prototype.slice', () => {

    const animals = new Fakay('ant', 'bison', 'camel', 'duck', 'elephant')

    it('should work with start positive and without end', () => {

        const result = animals.slice(2)
        
        const expectedResult = new Fakay('camel', 'duck', 'elephant')
        
        expect(result).toEqual(expectedResult)
        
    })

    it('should work with start positive and end', () => {

        const result = animals.slice(2, 4)
        
        const expectedResult = new Fakay('camel', 'duck')
        
        expect(result).toEqual(expectedResult)

    })

    it('should work with start positive and end equal to array.length', () => {

        const result = animals.slice(1, 5)
        
        const expectedResult = new Fakay('bison', 'camel', 'duck', 'elephant')

        expect(result).toEqual(expectedResult)

    })

    it('should work with start negative and without end', () => {
        
        const result = animals.slice(-2)

        const expectedResult = new Fakay('duck', 'elephant')
        
        expect(result).toEqual(expectedResult)

    })

    it('should work with start positive and end negative', () => {

        const result = animals.slice(2, -1)
        
        const expectedResult = new Fakay('camel', 'duck')

        expect(result).toEqual(expectedResult)

    })

    it('should work with no arguments', () => {

        const result = animals.slice()
        
        const expectedResult = new Fakay('ant', 'bison', 'camel', 'duck', 'elephant')

        expect(result).toEqual(expectedResult)

    })

})
