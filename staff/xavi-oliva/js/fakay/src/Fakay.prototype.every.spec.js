describe('Fakay.prototype.every', function () {
    
    it('returns true if all elements match callback condition', function () {
        
        const nums = new Fakay (1, 30, 39, 29, 10, 13)
        
        const isBelowThreshold = nums.every(function (currentValue) {
            if (currentValue < 40)
            return true
        })
        
        expect(isBelowThreshold).toBe(true)
        
    })
    
    it('returns false if all elements does not match callback condition', function () {
        
        const nums = new Fakay (1, 30, 39, 29, 10, 13, 42)
        
        const isBelowThreshold = nums.every(function (currentValue) {
            if (currentValue < 40)
                return true
        })

        expect(isBelowThreshold).toBe(false)

    })
})