describe('Fakay.prototype.some', function() {

    it('even numbers', function() {
        const num = new Fakay(1, 2, 3, 4, 5, 6)
        const n = num.some(function (elem) {
            return elem % 2 == 0
        })
        expect(n).toBe(true)
    })

    it('element includes specific char (true)', function() {
        const elements = new Fakay('fire', 'air', 'water')
        const n = elements.some(function (elem) {
            if (elem.includes('t'))
                return true
        })
        expect(n).toBe(true)
    })

    it('element includes specific char (false)', function() {
        const elements = new Fakay('fire', 'air', 'water')
        const n = elements.some(function (elem) {
            if (elem.includes('p'))
                return true
        })
        expect(n).toBe(false)
    })

    it('string arrays includes numbers (false)', function() {
        const elements = new Fakay('fire', 'air', 'water')
        const n = elements.some(function (elem) {
            if (elem.includes(4))
                return true
        })
        expect(n).toBe(false)
    })

})