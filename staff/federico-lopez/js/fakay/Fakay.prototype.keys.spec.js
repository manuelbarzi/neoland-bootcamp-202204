describe('Fakay.prototype.keys', () => {

    it('should return a fakay with numbers from 0 to 2', () => {

        const abcFakay = new Fakay('a', 'b', 'c')

        const result = abcFakay.keys()

        const expectedResult = new Fakay(0, 1, 2)

        expect(result).toEqual(expectedResult)

    })

})