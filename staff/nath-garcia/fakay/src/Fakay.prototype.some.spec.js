describe('Fakay.prototype.some', () => {
    
    it('should iterate and multiplicate numbers', () => {
        const orderedNum = new Fakay(1, 2, 3, 4, 5)
        const n = orderedNum.some(function (element) {
            return element % 2 == 0
        })

        expect(n).toBe(true)
    })

    it('should iterate and return if element is included', () => {

        const element = new Fakay('fire', 'air', 'water')
        const n = element.some(function (elem) {
                if (elem.includes('t'))
                    return true
            })
            expect(n).toBe(true)
    })

    it('should iterate and return if z is included', () => {
        const element = new Fakay('fire', 'air', 'water', 'earth')
        const n = element.some(function (elem) {
            if (elem.includes('z'))
                return true
        })
        expect(n).toBe(false)
    })
})