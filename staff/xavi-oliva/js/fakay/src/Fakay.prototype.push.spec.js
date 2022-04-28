describe('Fakay.prototype.push', function() {
    it('push one element', function() {
        const animals = new Fakay ('pigs', 'goats', 'sheep')
        
        let count = animals.push('cows')
        
        expect(count).toBe(4)
        expect(animals[0]).toBe('pigs')
        expect(animals[1]).toBe('goats')
        expect(animals[2]).toBe('sheep')
        expect(animals[3]).toBe('cows')
    
        count = animals.push('elephants')
    
        expect(count).toBe(5)
        expect(animals[0]).toBe('pigs')
        expect(animals[1]).toBe('goats')
        expect(animals[2]).toBe('sheep')
        expect(animals[3]).toBe('cows')
        expect(animals[4]).toBe('elephants')
    })

    it('push multiple elements', function() {
        const animals = new Fakay ('pigs', 'goats', 'sheep')

        let count = animals.push('cows', 'koalas', 'lions')

        expect(count).toBe(6)
        expect(animals[0]).toBe('pigs')
        expect(animals[1]).toBe('goats')
        expect(animals[2]).toBe('sheep')
        expect(animals[3]).toBe('cows')
        expect(animals[4]).toBe('koalas')
        expect(animals[5]).toBe('lions')

        count = animals.push('elephants', 'gazelles')

        expect(count).toBe(8)
        expect(animals[0]).toBe('pigs')
        expect(animals[1]).toBe('goats')
        expect(animals[2]).toBe('sheep')
        expect(animals[3]).toBe('cows')
        expect(animals[4]).toBe('koalas')
        expect(animals[5]).toBe('lions')
        expect(animals[6]).toBe('elephants')
        expect(animals[7]).toBe('gazelles')
    })
})
