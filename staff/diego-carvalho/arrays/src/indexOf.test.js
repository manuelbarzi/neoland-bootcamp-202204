describe('indexOf', function () {
    test('index of element inside of array', function () {
        const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

        const result = indexOf(beasts, 'bison')

        expect(result).toBe(1)

    })
    test('index of element from element x', function () {
        const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
        
        const result = indexOf(beasts, 'bison', 2)

        expect(result).toBe(4)

    })

})



