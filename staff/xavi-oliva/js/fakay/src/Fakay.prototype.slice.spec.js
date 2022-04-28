// slice (start, end)devuelve una copia desde indice start hasta indice fin (no incluido)

describe('Fakay.prototype.slice', function () {

    it('only with start index', function () {
        const animals = new Fakay ('ant', 'bison', 'camel', 'duck', 'elephant')

        const result = animals.slice(2)
        // ['camel', 'duck', 'elephant']

        expect(result[0]).toBe('camel')
        expect(result[1]).toBe('duck')
        expect(result[2]).toBe('elephant')
    })

    it('with start and end indexes', function () {
        const animals = new Fakay ('ant', 'bison', 'camel', 'duck', 'elephant')

        const result = animals.slice(2, 4)
        // ['camel', 'duck']

        expect(result[0]).toBe('camel')
        expect(result[1]).toBe('duck')
    })

    it('with negative start index', function () {
        const animals = new Fakay ('ant', 'bison', 'camel', 'duck', 'elephant')

        const result = animals.slice(-2)
        // ['duck', 'elephant']

        expect(result[0]).toBe('duck')
        expect(result[1]).toBe('elephant')
    })

    it('with positive start and negative end indexes', function () {
        const animals = new Fakay ('ant', 'bison', 'camel', 'duck', 'elephant')

        const result = animals.slice(2, -1)
        // ['camel', 'duck']

        expect(result[0]).toBe('camel')
        expect(result[1]).toBe('duck')
    })

    it('without indexes', function () {
        const animals = new Fakay ('ant', 'bison', 'camel', 'duck', 'elephant')

        const result = animals.slice()        // ['ant', 'bison', 'camel', 'duck', 'elephant']

        expect(result[0]).toBe('ant')
        expect(result[1]).toBe('bison')
        expect(result[2]).toBe('camel')
        expect(result[3]).toBe('duck')
        expect(result[4]).toBe('elephant')
    })

    it('with 0 value indexes', function () {
        const animals = new Fakay ('ant', 'bison', 'camel', 'duck', 'elephant')

        const result = animals.slice(0, 0)

        expect(result.length).toBe(0)
    })

    it('with negative start and positive end indexes', function () {
        const animals = new Fakay ('ant', 'bison', 'camel', 'duck', 'elephant')

        const result = animals.slice(-4, -2)
        // ['bison', 'camel']

        expect(result[0]).toBe('bison')
        expect(result[1]).toBe('camel')
    })
})