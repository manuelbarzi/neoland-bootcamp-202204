describe('every', () => {

    test('check is every number is less than 40', () => {

        const numbs = [1, 30, 39, 29, 10, 13];
        
        const isBelowThreshold = (currentValue) => currentValue < 40;
        
        const result = every(numbs, isBelowThreshold);
        
        expect(result).toBe(true);

    })

    test('check if every are numbers', () => {

        const array = [1, 30, 39, 'hola', 29, 10, 13];
        
        const allAreNumbers = currentValue => typeof currentValue === 'number';
        
        const result = every(array, allAreNumbers);
        
        expect(result).toBe(false);

    })

})