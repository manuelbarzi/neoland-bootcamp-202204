describe('Fakay.prototype.sort', () => {

    it('should sort an fakay of strings', () => {

        const months = new Fakay('March', 'Jan', 'Feb', 'Dec')
        
        months.sort()
        
        const expectedMonths = new Fakay("Dec", "Feb", "Jan", "March")
    
        expect(months).toEqual(expectedMonths)

    })

    it('should sort an fakay of numbers', () => {

        const numbers = new Fakay(1, 30, 4, 21, 100000)
        
        numbers.sort()
        
        const expectedNumbers = new Fakay(1, 100000, 21, 30, 4)

        expect(numbers).toEqual(expectedNumbers)

    })

    it('should sort another fakay of numbers', () =>{

        const numbers = new Fakay(40, 1, 5, 200)
        
        numbers.sort()
        
        const expectedNumbers = new Fakay(1, 200, 40, 5)

        expect(numbers).toEqual(expectedNumbers)

    })

    it('should sort an fakay of strings second version', () => {

        const whales = new Fakay('Blue', 'Humpback', 'Beluga')

        whales.sort()
    
        const expectedWhales = new Fakay('Beluga', 'Blue', 'Humpback')

        expect(whales).toEqual(expectedWhales)

    })
    
    it('should sort an fakay of strings that contain character numbers', () => {

        const stringsOfNumbers = new Fakay('80', '9', '700')

        stringsOfNumbers.sort()
    
        const expectedStringsOfNumbers = new Fakay('700', '80', '9')

        expect(stringsOfNumbers).toEqual(expectedStringsOfNumbers)

    })

    it('should sort an fakay with both numbers and strings', () => {

        const numbersAndStrings = new Fakay('80', '9', '700', 40, 1, 5, 200)

        numbersAndStrings.sort()
    
        const expectedNumbersAndStrings = new Fakay(1, 200, 40, 5, '700', '80', '9')

        expect(numbersAndStrings).toEqual(expectedNumbersAndStrings)

    })

    it('should sort an fakay that includes undefined as one of the elements', () => {

        const whales = new Fakay('Blue', 'Humpback', undefined, 'Beluga')

        whales.sort()
    
        const expectedWhales = new Fakay('Beluga', 'Blue', 'Humpback', undefined)

        expect(whales).toEqual(expectedWhales)

    })

})