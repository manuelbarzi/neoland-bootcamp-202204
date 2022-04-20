describe('join', function() {

    const elements = ['Fire', 'Air', 'Water'];

    test('should return string separated by comma', () => {

        const result = join(elements)
        
        expect(result).toBe('Fire,Air,Water') 
    })

    test('should return array in a string', () => {

        const result = join(elements, '')
        
        expect(result).toBe('FireAirWater') 
    })

    test('should return string separated by -', () => {

        const result = join(elements, '-')
        
        expect(result).toBe('Fire-Air-Water') 
    })
})
