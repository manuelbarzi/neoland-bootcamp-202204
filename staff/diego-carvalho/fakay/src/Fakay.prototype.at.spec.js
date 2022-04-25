describe('Fakay.prototype.at', function () {
    const nums = new Fakay(5, 12, 8, 130, 44)

    it('positive index', function () {
        const result = nums.at(2)

        expect(result).toBe(8)
    })
    it('negative index', function () {
        const result = nums.at(-2)

        expect(result).toBe(130)
    })

    it('undefined index', function () {
        const numbers = new Fakay(1, 2, 3, 4, undefined)

        const result = numbers.at(4)

        expect(result).toBe(undefined)
    })


})  