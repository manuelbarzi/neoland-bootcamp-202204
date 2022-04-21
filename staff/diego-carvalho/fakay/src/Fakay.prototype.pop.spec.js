describe('Faray.prototype.pop', function () {
    const plants = new Fakay ('broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato', undefined)

    it('returns last element', function () {
        let plant = plants.pop()

        expect(plant).toBe('tomato')

        expect(plants.length).toBe(4)
        expect(plants[0]).toBe('broccoli')
        expect(plants[1]).toBe('cauliflower')
        expect(plants[2]).toBe('cabbage')
        expect(plants[3]).toBe('kale')

        plant = plants.pop()

        expect(plant).toBe('kale')

        expect(plants.length).toBe(3)
        expect(plants[0]).toBe('broccoli')
        expect(plants[1]).toBe('cauliflower')
        expect(plants[2]).toBe('cabbage')
    })
    
    it('return undefined on empty object', function () {
        const Fakay = []

        const element = plants.pop()

        expect(element).toBe(undefined)
    })



})