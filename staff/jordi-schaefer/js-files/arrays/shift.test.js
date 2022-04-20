describe('shift', function () {
    it('delete the first string', function () {
        const animals = ['vaca', 'cabra', 'oveja', 'cerdo', 'caballo']

        const result = shift(animals)
        expect(result).toBe('vaca')
        expect(animals.length).toBe(4)
    })
})