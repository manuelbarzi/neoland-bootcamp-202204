describe('some', () => {
    
    test('nums array check is some is pair', () => {
        
        const nums = [1, 2, 3, 4, 5];
        
        const even = element => element % 2 === 0;
        
        const result = some(nums, even);
        
        expect(result).toBe(true);

    })

    test('look for a string not included', () => {
        
        const pets = ['dog', 'cat', 'bird', 'elephant'];
        
        const isThereATiger = element => element === "tiger";
        
        const result = some(pets, isThereATiger);
        
        expect(result).toBe(false);

    })

    test('lo for a string included', () => {

        const pets = ['cat', 'dog', 'bird', 'elephant'];

        const isThereACat = element => element === "cat";
    
        const result = some(pets, isThereACat, 1);
    
        expect(result).toBe(false);
    })
})