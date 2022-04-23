describe('Fakay.prototype.push', () => {

    it('should push one string', () => {
        
        const animals = new Fakay('pigs', 'goats', 'sheep');
        
        const animalsLength = animals.push('cows');
            
        let expectedAnimals = new Fakay('pigs', 'goats', 'sheep', 'cows')
        
        expect(animalsLength).toBe(4);
        
        expect(animals).toEqual(expectedAnimals);

    })

    it('should push three strings', () => {

        const animals = new Fakay('pigs', 'goats', 'sheep', 'cows');

        const animalsLength = animals.push('chickens', 'cats', 'dogs');
    
        const expectedAnimals = new Fakay ('pigs', 'goats', 'sheep', 'cows', 'chickens', 'cats', 'dogs')
        
        expect(animalsLength).toBe(7);
        
        expect(animals).toEqual(expectedAnimals);

    })

    it('should not change the fakay when no arguments are passed through the function', () => {

        const animals = new Fakay('pigs', 'goats', 'sheep', 'cows');

        const animalsLength = animals.push()

        const expectedAnimals = new Fakay('pigs', 'goats', 'sheep', 'cows');

        expect(animalsLength).toBe(4);

        expect(animals).toEqual(expectedAnimals);

    })

})