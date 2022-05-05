describe('Fakay.prototype.join', function () {

    const elements = new Fakay('Fire', 'Air', 'Water')

    it('should create and return a new string', () => {

        const result = elements.join()

        expect(result).toBe('Fire,Air,Water')
    })

    it('should create and return a new string no spaces', function () {

        const result = elements.join('')

        expect(result).toBe('FireAirWater')
    })

    it('should create and return a new string with middle bars', function () {
        
        const result = elements.join('-')

        expect(result).toBe('Fire-Air-Water')
    })
})