describe('push', () => {

    test('push one string', () => {
        
        const animals = ['pigs', 'goats', 'sheep'];
        
        const count = push(animals, 'cows');
            
        const expectedResult = ['pigs', 'goats', 'sheep', 'cows'];
        
        expect(count).toBe(4);
        


    })

    test('push three strings', () => {

        const animals = ['pigs', 'goats', 'sheep', 'cows'];

        const count = push(animals, 'chickens', 'cats', 'dogs');
    
        const expectedResult = ['pigs', 'goats', 'sheep', 'cows', 'chickens', 'cats', 'dogs']
        
        expect(count).toBe(7);
        
        checkArrays(animals, expectedResult);

    })
})