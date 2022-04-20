describe('At', () =>{
    const array7 = [5, 12, 8, 130, 44];
    
    test('postive index', () => {
        let index = 2;
        expect(at(array7, index)).toBe(8);
    })

    test('negative index', () => {
        let index = -2;
        expect(at(array7, index)).toBe(130);
    })
    
})
