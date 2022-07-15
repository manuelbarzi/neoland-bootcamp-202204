describe('Fakay.prototype.concat', () => {
    
    const firstLetters = new Fakay('a', 'b', 'c')
    const secondLetters = new Fakay('d', 'e', 'f')
   
    it('should concatenate two fakays', () => {
        
        const result = firstLetters.concat(secondLetters)
        
        const expectedResult = new Fakay('a', 'b', 'c', 'd', 'e', 'f')

        expect(result).toEqual(expectedResult)

    })


    it('should concatenate three fakays', () => {
    
    const thirdLetters = new Fakay('g', 'h', 'l')
    
    const result = firstLetters.concat(secondLetters, thirdLetters)

    const expectedResult = new Fakay('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'l')

    expect(result).toEqual(expectedResult)

    })

    it('should concatenate two fakays, a string, an array and an object', () => {

        const obj = {}
        const array = ['z', 1, undefined]

        const result = firstLetters.concat(secondLetters, 'hello', 'world', obj, array)

        const expectedResult = new Fakay('a', 'b', 'c', 'd', 'e', 'f', 'hello', 'world', obj, ['z', 1, undefined])

        expect(result).toEqual(expectedResult)

    })

})