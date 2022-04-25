describe('Fakay.prototype.findIndex' , () => {

    it('should return the first number bigger than 13', () => {

        const numbers = new Fakay(5, 12, 8, 130, 44)

        const isLargeNumber = (element) => element > 13

        const result = numbers.findIndex(element => element > 13)

        expect(result).toBe(3)

    })

    it('should return -1 when there is no element bigger than 13', () => {

        const numbers = new Fakay(5, 12, 8, 11, 13)

        const isLargeNumber = (element) => element > 13

        const result = numbers.findIndex(element => element > 13)

        expect(result).toBe(-1)

    })

    it('should return -1 when the fakay has length 0', () => {

        const numbers = new Fakay

        const isLargeNumber = (element) => element > 13

        const result = numbers.findIndex(element => element > 13)

        expect(result).toBe(-1)

    })

})