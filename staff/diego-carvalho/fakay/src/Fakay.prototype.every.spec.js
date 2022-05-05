describe('Faray.prototype.every', function () {
    const numbers = new Fakay(2, 4, 6, 0)

    it('check is every number is bigger than one', function () {

        //here is the function that will check if every value inside of the array is bigger than 1
        function isBiggerThanOne(value) {
            if (value > 1) {
                return true //if every value is bigger than 1 it will return true
            } else {
                return false//if one value is smaller than 1 it will return false
            }
        }

        let every1 = numbers.every(isBiggerThanOne)

        expect(every1).toBe(false)


    })

    it('check if is all are numbers', function () {
        const numbers1 = new Fakay(1, 30, 39, 'hola', 29, 10, 13)

        const allAreNumbers = currentValue => typeof currentValue === 'number'

        const result = numbers1.every(allAreNumbers)

        expect(result).toBe(false)

    })

})
