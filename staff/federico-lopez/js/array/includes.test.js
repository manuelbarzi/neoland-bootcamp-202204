describe('includes', () => {
    const array4 = [1, 2, 3];

    test('Look for a number', () => {
        
        expect(includes(array4, 2)).toBe(true);

    })

    const pets = ['cat', 'dog', 'bat', 'elephant', 'bird'];

    test('Look for a string', () => {
        expect(includes(pets, 'cat')).toBe(true);

    })
    
    test('A string not included', () =>{
        expect(includes(pets, 'at')).toBe(false);

    })

    test('A string included in a previous index', () => {
        expect(includes(pets, 'cat', 3)).toBe(false);
    })

})