// slice (array, start, end)devuelve una copia desde indice start hasta indice fin (no incluido)

describe('slice', function () {

    test('only with start index', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

        const result = slice(animals, 2)
        // ['camel', 'duck', 'elephant']

        expect(result.length).toBe(3)
        expect(result[0]).toBe('camel')
        expect(result[1]).toBe('duck')
        expect(result[2]).toBe('elephant')
    })

    test('with start and end indexes', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

        const result = slice(animals, 2, 4)
        // ['camel', 'duck']

        expect(result.length).toBe(2)
        expect(result[0]).toBe('camel')
        expect(result[1]).toBe('duck')
    })

    test('with negative start index', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

        const result = slice(animals, -2)
        // ['duck', 'elephant']

        expect(result.length).toBe(2)
        expect(result[0]).toBe('duck')
        expect(result[1]).toBe('elephant')
    })

    test('with positive start and negative end indexes', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

        const result = slice(animals, 2, -1)
        // ['camel', 'duck']

        expect(result.length).toBe(2)
        expect(result[0]).toBe('camel')
        expect(result[1]).toBe('duck')
    })

    

    test('with 0 value indexes', function () {
        const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

        const result = slice(animals, 0, 0)
        // []

        expect(result.length).toBe(0)
    })

   
})
