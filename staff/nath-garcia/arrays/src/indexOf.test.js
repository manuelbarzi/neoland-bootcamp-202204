describe('indexOf', function () {

    test('returns the first index', function () {
        const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

        const result = indexOf(beasts, 'bison')

        expect(result).toBe(1)
    })
    test('returns the first of another element', function () {
        const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

        const result = indexOf(beasts, 'bison', 2)

        expect(result).toBe(4)
    })
})