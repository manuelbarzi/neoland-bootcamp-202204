describe('Fakay.prototype.includes', function () {

    
    it('return true if the element is included', function() {
        
        const nums = new Fakay (1, 2, 3)

        expect(nums.includes(2)).toBe(true)

    })

    
    it('return false if it is not included', function() {
        
        const pets = new Fakay ('cat', 'dog', 'bat')

        expect(pets.includes('at')).toBe(false)

    })

})