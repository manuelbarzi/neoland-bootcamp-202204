describe('Fakay.prototype.map', () => {
    const numbers = new Fakay(1, 4, 9, 16)

    it('should return a fakay multipling all the elements for 2', () => {
       
        const doubles = numbers.map(function(elem){
            return elem * 2
        })
        
        const expectedResult = new Fakay(2, 8, 18, 32)

        expect(doubles).toEqual(expectedResult)

    })

    it('should return an fakay summing 10 to all the elements', () => {
        
        const numbersPlus10 = numbers.map(function(elem){
            return elem + 10
        })
        
        const expectedResult = new Fakay(11, 14, 19, 26)

        expect(numbersPlus10).toEqual(expectedResult)

    })

})