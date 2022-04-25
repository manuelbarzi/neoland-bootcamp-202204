describe('Fakay.prototype.at', function () {
    it('positive index', function () {

        const array = new Fakay (5, 12, 8, 130, 44);
        const index=2
        const result = array.at(2)
        expect(result).toBe(8)
    })

    it('negative index', function () {

        const array = new Fakay (5, 12, 8, 130, 44);
        const index= -2
        const result = array.at(-2)
        expect(result).toBe(130)
    })
})
