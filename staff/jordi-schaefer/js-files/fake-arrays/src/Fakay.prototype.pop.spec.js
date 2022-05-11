describe ('Fakay.prototype.pop', function () {
    it('should delete the last element', function () {
        const animals = new Fakay('vaca', 'cabra', 'oveja', 'cerdo', 'caballo')
        
        const result = animals.pop()
        expect(result).toBe('caballo')
        expect(animals.length).toBe(4)
        expect(animals[4]).toBeUndefined()
        expect(animals.hasOwnProperty(4)).toBeFalsy()
    })

    it('should not delete without elements', function () {
        const animals = new Fakay()
        
        const result = animals.pop()
        expect(result).toBe(undefined)
        expect(animals.length).toBe(0)
        expect(animals[0]).toBeUndefined()
    })

})
