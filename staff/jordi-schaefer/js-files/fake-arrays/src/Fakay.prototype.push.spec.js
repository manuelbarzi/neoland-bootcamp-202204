describe('Fakay.prototype.push', function() {
    it('should push one element', function() {

        const animals = new Fakay('vaca', 'cabra', 'oveja', 'cerdo', 'caballo')
        const result = animals.push('elefante')

        //expect(result).toBe(6)
        expect(result).toBe(6)
        expect(typeof result).toBe('number')
        expect(animals[0]).toBe('vaca')
        expect(animals[1]).toBe('cabra')
        expect(animals[2]).toBe('oveja')
        expect(animals[3]).toBe('cerdo')
        expect(animals[4]).toBe('caballo')
        expect(animals[5]).toBe('elefante')
        expect(typeof animals[5] ).toBe('string')

    })


    it('push multiple elements', function() {

        const animals = new Fakay('vaca', 'cabra', 'oveja', 'cerdo', 'caballo')
        const result = animals.push('elefante', 'gallina', 'pato', 'pajaro')

        expect(result).toBe(9)
        expect(typeof result).toBe('number')
        expect(animals[7]).toBe('pato')
        expect(typeof (animals[5] && animals[6]) ).toBe('string')

    })

})