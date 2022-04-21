describe('Fakay.prototype.at', function() {
    const nums = new Fakay (5, 12, 8, 130, 44)

    it('positive index', function() {
        const result = nums.at(2)

        expect(result).toBe(8)
    })

    it('negative index', function() {
        const result = nums.at(-2)
    
        expect(result).toBe(130)
    })
})