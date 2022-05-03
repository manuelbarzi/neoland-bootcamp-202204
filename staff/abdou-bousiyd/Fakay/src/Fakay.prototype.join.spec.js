describe('Fakay join', function() {

    const elements = ['Fire', 'Air', 'Water'];

    it('should return string separated by comma', () => {

        const result = elements.join()
        
        expect(result).toBe('Fire,Air,Water') 
    })

    it('should return array in a string', () => {

        const result = elements.join('')
        
        expect(result).toBe('FireAirWater') 
    })

    it('should return string separated by -', () => {

        const result = elements.join('-')
        
        expect(result).toBe('Fire-Air-Water') 
    })
})