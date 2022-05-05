describe('Fakay.prototype.filter', () => {
    it('filters words longer than 6 characters', () => {
        const words = new Fakay('spray', 'limit', 'elite', 'exuberant', 'destruction', 'present')

        const result = words.filter(word => word.length > 6);

        const expected = new Fakay('exuberant', 'destruction', 'present')

        expect(result).toBeInstanceOf(Fakay)
        // expect(result.length === expected.length).toBe(true)
        expect(result.length).toBe(expected.length)
        
        //for (let i = 0; i < expected.length; i++)
        //    expect(result[i]).toBe(expected[i])
        expect(result).toEqual(expected)
    })

    it('returns empty instance on non-matching words longer than 20', () => {
        const words = new Fakay('spray', 'limit', 'elite', 'exuberant', 'destruction', 'present')

        const result = words.filter(word => word.length > 20);

        const expected = new Fakay

        expect(result).toBeInstanceOf(Fakay)
        expect(result.length).toBe(expected.length)
    })
})