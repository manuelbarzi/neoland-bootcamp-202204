describe('Fakay.prototype.pop', () => {
    it('should iterate, remove last element and return new array', () => {
        const plants = new Fakay('broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato')

        const result = plants.pop()
        expect(result).toBe('tomato')

        expect(plants.length).toBe(4)
        expect(plants[0]).toBe('broccoli')
        expect(plants[1]).toBe('cauliflower')
        expect(plants[2]).toBe('cabbage')
        expect(plants[3]).toBe('kale')
        expect(plants.hasOwnProperty(4)).toBeFalsy()
    })
})