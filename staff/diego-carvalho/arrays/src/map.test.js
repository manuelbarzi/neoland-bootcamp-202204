
describe('map', function () {
    test('divide all numbers per 2', function () {
        const num = [10, 20, 40, 30]

        const funcionSecretPassword = map(num, function (number) {
            return number / 2
        })

        expect(funcionSecretPassword[0]).toBe(5)
        expect(funcionSecretPassword[1]).toBe(10)
        expect(funcionSecretPassword[2]).toBe(20)
        expect(funcionSecretPassword[3]).toBe(15)

        // aqui uso la funcion mapa que creare yo
        // para llamar a la FUNCION mapa creada por mi:
        // escribo "mapa()" y dentro del parentesis pongo el array que le envio(num)
        // y la funcion que quiero realizar para cada elemento (la funcion coje cada uno de los valor del index del array y return los numberos divididos)

    })
})



