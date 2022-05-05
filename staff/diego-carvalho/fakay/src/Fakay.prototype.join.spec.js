describe('Fakay.prototype.join', function() {
    it('join without parameters', function() {
        const elements = new Fakay('fire', 'air', 'water')
        
        const result = elements.join( )

        expect(result).toBe('fire,air,water')
    })

    it('join with space', function() {
        const elements = new Fakay('fire', 'air', 'water')

        const result = elements.join('')

        expect(result).toBe('fireairwater')
    })

    it('join with  - ', function() {
        const elements = new Fakay('fire', 'air', 'water')

        const result = elements.join('-')

        expect(result).toBe('fire-air-water')
    })

})