describe('Fakay.prototype.pop', () => {
    
    it('it should pop - first case', () => {

        const plants = new Fakay('broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato')
    
        const result = plants.pop()
        
        const expectedPlants = new Fakay('broccoli', 'cauliflower', 'cabbage', 'kale')
    
        expect(result).toBe('tomato')
        expect(expectedPlants).toEqual(plants)
    
    })

    it('it should pop - second case', () => {
        
        const plants = new Fakay('broccoli', 'cauliflower', 'cabbage', 'kale')

        const result = plants.pop()

        const expectedPlants = new Fakay('broccoli', 'cauliflower', 'cabbage')

        expect(result).toBe('kale')
        expect(expectedPlants).toEqual(plants)

    })

})