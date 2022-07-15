describe('Fakay.prototype.reduce', () => {

    it('should sum all the elements', () => {

        const numbers = new Fakay(1, 2, 3, 4)
        
        const sumWithoutInitial = numbers.reduce( 
            (previousValue, currentValue) => previousValue + currentValue)

            expect(sumWithoutInitial).toBe(10)
            
            
        })
    
    it('should sum using initial value', () => {
        
        const numbers = new Fakay(1, 2, 3, 4)
        
        
        const sumWithInitial = numbers.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            2)
        
        expect(sumWithInitial).toBe(12)

    })

    it('should concatenate the elements of the fakay', () => {

        const phrase = new Fakay('hello', ' world. ', '1,', ' 2,', ' 3!')

        const expectedResult = 'hello world. 1, 2, 3!'

        const result = phrase.reduce((previousElement, currentElement) => previousElement + currentElement)

        expect(result).toBe(expectedResult)

    })

})