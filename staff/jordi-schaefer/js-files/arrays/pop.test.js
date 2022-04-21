describe ('pop', function () {
    it('pop one element', function () {
        const animals = ['vaca', 'cabra', 'oveja', 'cerdo', 'caballo']
        
        const result = pop(animals)
        expect(result).toBe('caballo')
        expect(animals.length).toBe(4)
    })
})
