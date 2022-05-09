describe('join', function(){

    const elements = ['Fire', 'Air', 'Water']

    test('Returns a new array with the elements concatenated on a string separated by commas', function(){

        const result = join(elements, ',')

        expect(result).toBe('Fire,Air,Water')
    })

    test('Returns a new array with the elements concatenated on a string with no separation', function(){

        const result = join(elements, '')

        expect(result).toBe('FireAirWater')
    })

    test('Returns a new array with the elements concatenated on a string separated by hyphens', function(){

        const result = join(elements, '-')

        expect(result).toBe('Fire-Air-Water')
    })

})