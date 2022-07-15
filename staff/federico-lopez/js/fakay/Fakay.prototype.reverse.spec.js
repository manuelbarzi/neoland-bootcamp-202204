describe('Fakay.prototype.reverse', () => {

    it('should reverse a fakay with odd quantity of elements', () => {

        const stringsOfNumbers = new Fakay('one', 'two', 'three')
        
        const reversed = stringsOfNumbers.reverse()
        
        const expectedStringsOfNumbers = new Fakay("three", "two", "one")

        expect(stringsOfNumbers).toEqual(expectedStringsOfNumbers)
        expect(reversed).toEqual(expectedStringsOfNumbers)
        expect(stringsOfNumbers).toEqual(reversed)

    })

    it('should reverse a fakay with pair quantity of elements', () => {

        const numbers = new Fakay(1, 2, 3, 4, 5, 6)
        
        const reversed = numbers.reverse()
        
        const expectedNumbers = new Fakay(6, 5, 4, 3, 2, 1)

        expect(numbers).toEqual(expectedNumbers)
        expect(reversed).toEqual(expectedNumbers)
        expect(numbers).toEqual(reversed)

    })

    it('should reverse an empty fakay', () => {

        const emptyFakay = new Fakay

        const reversed = emptyFakay.reverse()

        const expectedEmptyFakay = new Fakay

        expect(reversed).toEqual(expectedEmptyFakay)

    })

})