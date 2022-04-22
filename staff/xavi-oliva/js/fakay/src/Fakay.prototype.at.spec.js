describe('Fakay.prototype.at', function() {
    
    it('positive index', function() {
        const nums = new Fakay (5, 12, 8, 130, 44)
        
        const result = nums.at(2)
        
        expect(result).toBe(8)
    })
    
    it('negative index', function() {
        const nums = new Fakay (5, 12, 8, 130, 44)

        const result = nums.at(-2)
    
        expect(result).toBe(130)
    })
})