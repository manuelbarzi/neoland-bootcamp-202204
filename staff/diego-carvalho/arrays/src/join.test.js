describe('join', function() {
    
    test('join without parameters', function() {
        const elements = ['fire', 'air', 'water']

        const result = join(elements)
        
        expect(result).toBe('fire,air,water')
    })

    test('join with space', function() {
        const elements = ['fire', 'air', 'water']

        const result = join(elements,'')

        expect(result).toBe('fireairwater')
    })

    test('join with  - ', function() {
        const elements = ['fire', 'air', 'water']

        const result = join(elements,'-')

        expect(result).toBe('fire-air-water')
    })

})