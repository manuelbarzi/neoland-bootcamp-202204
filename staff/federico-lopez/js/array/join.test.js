describe('join', () => {
    
    const elements = ['Fire', 'Air', 'Water'];
    
    test('join with \',\'', () => {
        const result = join(elements);
        expect(result).toBe('Fire,Air,Water');
    })

    test('join with empty string', () => {
        const result = join(elements, '');
        expect(result).toBe('FireAirWater');
    })

    test('join with \'-\'', () => {
        const result = join(elements, '-')
        expect(result).toBe('Fire-Air-Water')
    })

})