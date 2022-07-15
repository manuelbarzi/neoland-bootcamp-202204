describe('last index', () => {
    const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo', undefined]

    test('Look for an element that is repeated', () => {
        
        const result = lastIndexOf(animals, 'Dodo')
        
        expect(result).toBe(3)

    })

    test('Look for an element that is only once', () =>{
        
        const result = lastIndexOf(animals, 'Tiger')
        
        expect(result).toBe(1);

    })    

    test('Look for undefined', () => {
        
        const result = lastIndexOf(animals, undefined)
        
        expect(result).toBe(4);

    })

})