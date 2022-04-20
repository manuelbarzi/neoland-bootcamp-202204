
describe('indexOf', function() {

    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

    test('return position of element', () => {
        const result = indexOf(beasts, 'bison')
        expect(result).toBe(1)
    })

    test('return the second assigned element', () => {
        const result = indexOf(beasts, 'bison', 2)
        expect(result).toBe(4)
    })
})
