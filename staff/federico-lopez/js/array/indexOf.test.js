describe('indexOf', () => {
    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

    test('without indexFrom', () => {
        const result = indexOf(beasts, 'bison');
        expect(result).toBe(1);
    })

    test('with indexFrom', () => {
        const result = indexOf(beasts, 'bison', 2);
        expect(result).toBe(4);
    })

})