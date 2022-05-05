describe('Join', function() {
    it('creates and returns a new string by concatenating all of the elements in an array', function() {
    
    const elements = new Fakay ('Fire', 'Air', 'Water')
    const result = elements.join()

    expect(result).toBe('Fire,Air,Water')
    
    })

    it('Example 2', function() {
        const elements = new Fakay ('Fire', 'Air', 'Water')
        const result = elements.join('')
        expect(result).toBe('FireAirWater')  
    })

    it('Example 3', function () {
    const elements = new Fakay ('Fire', 'Air', 'Water')
    const result = elements.join('-')
    expect(result).toBe('Fire-Air-Water')
    })
})








// // {
// //     console.log('CASO 2')

//     const result = join(elements, '')

//     console.assert(result === 'FireAirWater')
// // }

//
