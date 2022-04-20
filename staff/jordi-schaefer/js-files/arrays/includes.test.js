describe('includes', function() {
    
    it('includes specific char (true)', function() {
        const chars = ['a', 'b', 'c', 'd', 'e', 'f']
        const result = includes(chars, 'd')
        expect(result).toBe(true)
    })

    it('includes specific char (false)', function() {
        const chars = ['a', 'b', 'c', 'd', 'e', 'f']
        const result = includes(chars, 'j')
        expect(result).toBe(false)
    })

    it('includes specific number (true)', function() {
        const nums = [100, 104, 203, 506]
        const result = includes(nums, 203)
        expect(result).toBe(true)
    })

    it('includes specific number (false)', function() {
        const nums = [100, 104, 203, 506]
        const result = includes(nums, 1000)
        expect(result).toBe(false) 
    })

})