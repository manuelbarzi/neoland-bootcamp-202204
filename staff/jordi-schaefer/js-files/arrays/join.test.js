describe('join', function() {
    
    it('join without parameters', function() {
        const elements = ['fire', 'air', 'water']
        const result = join(elements)
        expect(result).toBe('fire,air,water')
    })

    it('join with space', function() {
        const elements = ['fire', 'air', 'water']
        const result = join(elements,'')
        expect(result).toBe('fireairwater')
    })

    it('join with  - ', function() {
        const elements = ['fire', 'air', 'water']
        const result = join(elements,'-')
        expect(result).toBe('fire-air-water')
    })

})