describe('at', function() {
    const nums = [5, 12, 8, 130, 44]

    test('positive index', function() {
        const result = at(nums, 2)

        expect(result).toBe(8)
    })

    test('negative index', function() {
        const result = at(nums, -2)
    
        expect(result).toBe(130)
    })
})