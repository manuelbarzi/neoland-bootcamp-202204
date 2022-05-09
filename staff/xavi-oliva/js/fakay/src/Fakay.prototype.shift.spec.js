describe('Fakay.prototype.shift', () => {
    it('should extract first element from non-empty instance', () => {
        const nums = new Fakay (1, 2, 3)

        const num = nums.shift()

        expect(num).toBe(1)
        expect(nums.length).toBe(2)
        expect(nums[0]).toBe(2)
        expect(nums[1]).toBe(3)
    })

    it('should return undefined on empty instance', () => {
        const nums = new Fakay ()

        const num = nums.shift()

        expect(num).toBe(undefined)
    })
})