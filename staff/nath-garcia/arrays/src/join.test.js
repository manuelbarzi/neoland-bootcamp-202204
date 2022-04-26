describe('join', function () {
    const elements = ['Fire', 'Air', 'Water']

    test('should create and return a new string', () => {
        

        const result = join(elements)

        expect(result).toBe('Fire,Air,Water')
    })

    test('should create and return a new string no spaces', function () {

        const result = join(elements, '')

        expect(result).toBe('FireAirWater')
    })

    test('should create and return a new string with middle bars', function () {
        
        const result = join(elements, '-')

        expect(result).toBe('Fire-Air-Water')
    })
})