let plants = new Fakay('broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato')

describe('Fakay pop', function() {
    it('should removes the last element from an array and returns that element', () => {
        
        let element = plants.pop()

        expect(element).toBe('tomato')

        expect(plants.length).toBe(4)
        expect(plants[0]).toBe('broccoli')
        expect(plants[1]).toBe('cauliflower')
        expect(plants[2]).toBe('cabbage')
        expect(plants[3]).toBe('kale')

     })

    it('return undefined on empty array', function() {
        const fakay = new Fakay

        const element = fakay.pop()

        expect(element).toBe(undefined)
    })
})
