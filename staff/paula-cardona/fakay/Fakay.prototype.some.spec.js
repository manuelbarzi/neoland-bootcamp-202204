describe('some', function () {
    it('returns true on element matching callback condition', function () {
        const nums = new Fakay (1, 2, 3, 4, 5)

        const even = element => element % 2 === 0

        const contains = nums.some(even)

        expect(contains).toBe(true)
    })

    it('returns false on element not matching callback condition', function () {
        const nums = new Fakay (1, 2, 3, 4, 5)

        const greaterThan7 = element => element > 7 === 0

        const contains = nums.some (greaterThan7)

        expect(contains).toBe(false)
    })
})

