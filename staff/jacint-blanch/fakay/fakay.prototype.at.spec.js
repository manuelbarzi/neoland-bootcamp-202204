describe('Fakay.prototype.at', function() {
    const nums = [5, 12, 8, 130, 44]

    test('positive index', function() {
        const result = at(nums, 2)
        expect(result).toBe(8)
    })

    test('negative index', function() { 
        const foo = ['a', 'c', 'b','e','c']
        const index = -2
        const res1 = at(foo, index)
        expect(res1).toBe('e')
    })

    test('should returns element from position', function() { 
        const foo = ['a', 'c', 'b','e','c']
        const index = 2
        const res1 = at(foo, index)
        expect(res1).toBe('b')
    })

    
})