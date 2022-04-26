describe('Fakay.prototype.every', () => {
    it('should iterate and sum numbers', () => {
        const randomNums = new Fakay(1, 30, 39, 29, 10, 13)

            const result = randomNums.every(function (currentValue) {
                return currentValue < 40
            })

           expect(result).toBe(true)
})
})