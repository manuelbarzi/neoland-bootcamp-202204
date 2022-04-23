describe('Fakay.prototype.join', () => {
    
    const elements = new Fakay('Fire', 'Air', 'Water')
    
    it('join the elements with \',\' as separator', () => {
        const result = elements.join()
        expect(result).toBe('Fire,Air,Water')
    })

    it('join the elements with empty string as separator', () => {
        const result = elements.join('')
        expect(result).toBe('FireAirWater')
    })

    it('join the elements with \'-\' as separator', () => {
        const result = elements.join('-')
        expect(result).toBe('Fire-Air-Water')
    })

})