describe('pop', () => {
    
    test('1', () => {

        const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
    
        const result = pop(plants);
        
        const arrayExpected = ["broccoli", "cauliflower", "cabbage", "kale"];
    
        expect(result).toBe('tomato');
    
       

    })

    test('2', () => {
        
        const plants = ["broccoli", "cauliflower", "cabbage", "kale"];

        const result = pop(plants);

        const arrayExpected = ["broccoli", "cauliflower", "cabbage"];

        checkArrays(arrayExpected, plants);
    })

})