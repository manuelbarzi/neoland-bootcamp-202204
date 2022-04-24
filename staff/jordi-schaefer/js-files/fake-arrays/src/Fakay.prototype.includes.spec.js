describe('Fakay.prototype.includes', function() {
    
    it('includes specific char (true)', function() {
        const chars = new Fakay ('a', 'b', 'c', 'd', 'e', 'f')
        const result = chars.includes ('d')
        expect(result).toBe(true)
    })

    it('includes specific char (false)', function() {
        const chars = new Fakay ('a', 'b', 'c', 'd', 'e', 'f')
        const result = chars.includes('j')
        expect(result).toBe(false)
    })

    it('includes specific number (true)', function() {
        const nums = new Fakay (100, 104, 203, 506)
        const result = nums.includes(203)
        expect(result).toBe(true)
    })

    it('includes specific number (false)', function() {
        const nums = new Fakay (100, 104, 203, 506)
        const result = nums.includes(1000)
        expect(result).toBe(false) 
    })

})