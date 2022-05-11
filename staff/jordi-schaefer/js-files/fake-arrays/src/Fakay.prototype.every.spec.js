
describe('Fakay.prototype.every', function() {
    it('divide odd numbers by 2 (false)', function() {
        const num = new Fakay(1, 2, 3, 4, 5, 6)
        
        const n = num.every( function (elem) {
            return elem % 2 == 0
        })
        expect(n).toBe(false)
    })

    it('divide even numbers by two (true)', function(){
        const num = new Fakay (8, 2, 6, 4, 10, 6)
        
        const n = num.every( function (elem) {
            return elem % 2 == 0
        })
        expect(n).toBe(true)
    })

    it('string array includes specific char (true)', function() {
        const elements = new Fakay ('fire', 'air', 'water')
        
        const n = elements.every(function (elem) {
            if (elem.includes('r'))
                return true
        })
        expect(n).toBe(true)
    })

    it('string array includes specific char (false)', function() {
        const elements = new Fakay ('fire', 'air', 'water')
        
        const n = elements.every(function (elem) {
            if (elem.includes('t'))
                return true
        })
        expect(n).toBe(false)
    })

})