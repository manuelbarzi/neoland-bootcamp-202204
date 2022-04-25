describe('Fakay.prototype.join', () => {

    it('Should return an string with the default connector', () => {

        //const elements = ['Fire', 'Air', 'Water'];
        const elements = new Fakay('Fire', 'Air', 'Water')

        //const result = join(elements)
        const result = elements.join()

        //console.assert(result === 'Fire,Air,Water')
        expect(result).toBe('Fire,Air,Water')

    })


    it('Should return an string without connector ', () => {

        //const elements = ['Fire', 'Air', 'Water'];
        const elements = new Fakay('Fire', 'Air', 'Water')

        //const result = join(elements)
        const result = elements.join('')

        //console.assert(result === 'Fire,Air,Water')
        expect(result).toBe('FireAirWater')

    })


    it('Should return an string with the connector hyphen ', () => {

        //const elements = ['Fire', 'Air', 'Water'];
        const elements = new Fakay('Fire', 'Air', 'Water')

        //const result = join(elements)
        const result = elements.join('-')

        //console.assert(result === 'Fire,Air,Water')
        expect(result).toBe('Fire-Air-Water')

    })


})