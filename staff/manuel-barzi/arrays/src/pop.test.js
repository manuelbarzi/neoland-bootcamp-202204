describe('pop', function () {
    test('returns last element', function () {
        const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

        let plant = pop(plants)
        expect(plant).toBe('tomato')
        
        expect(plants.length).toBe(4)
        expect(plants[0]).toBe('broccoli')
        expect(plants[1]).toBe('cauliflower')
        expect(plants[2]).toBe('cabbage')
        expect(plants[3]).toBe('kale')

        plant = pop(plants)
        expect(plant).toBe('kale')

        expect(plants.length).toBe(3)
        expect(plants[0]).toBe('broccoli')
        expect(plants[1]).toBe('cauliflower')
        expect(plants[2]).toBe('cabbage')
    })

    test('return undefined on empty array', function() {
        const array = []

        const element = pop(array)

        expect(element).toBe(undefined)
    })
})