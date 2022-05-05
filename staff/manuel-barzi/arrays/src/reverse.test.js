describe('reverse', function () {
    test('on three elements', function () {
        const nums = ['one', 'two', 'three']

        const reversed = reverse(nums)
        
        expect(reversed).toBe(nums)
        expect(reversed.length).toBe(3)

        expect(reversed[0]).toBe('three')
        expect(reversed[1]).toBe('two')
        expect(reversed[2]).toBe('one')
    })

    test('on four elements', function () {
        const nums = ['one', 'two', 'three', 'four']

        const reversed = reverse(nums)
        
        expect(reversed).toBe(nums)
        expect(reversed.length).toBe(4)

        expect(reversed[0]).toBe('four')
        expect(reversed[1]).toBe('three')
        expect(reversed[2]).toBe('two')
        expect(reversed[3]).toBe('one')
    })

    test('on four elements', function () {
        const nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']

        const reversed = reverse(nums)
        
        expect(reversed).toBe(nums)
        expect(reversed.length).toBe(7)

        expect(reversed[0]).toBe('seven')
        expect(reversed[1]).toBe('six')
        expect(reversed[2]).toBe('five')
        expect(reversed[3]).toBe('four')
        expect(reversed[4]).toBe('three')
        expect(reversed[5]).toBe('two')
        expect(reversed[6]).toBe('one')
    })
})