/*

- crear un for donde el valor positivo recorra el array desde 0
- dentro del 1er for validar las posiciones
- crear otro for donde el valor negativo recorra el array desde el final -1 de su length
- dentro del 2ndo for validar las posiciones negativas
*/

describe('at', function () {
    it('...', function () {
        const marcasv2 = new Fakay('nike', 'adidas', 'rebook', 'apple')

        const indice = 2

        const resultado = marcasv2.at(indice)

        expect(resultado).toBe('rebook')
    })

    it('...', function () {
        const marcasv2 = new Fakay('nike', 'adidas', 'rebook', 'apple')

        const indice = -1

        const resultado = marcasv2.at(indice)

        expect(resultado).toBe('apple')
    })

    it('...', function () {
        const marcasv2 = new Fakay('nike', 'adidas', 'rebook', 'apple')

        const indice = 10

        const resultado = marcasv2.at(indice)

        expect(resultado).toBeUndefined()
    })
})



