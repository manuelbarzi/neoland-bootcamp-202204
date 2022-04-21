describe('SOME', function() {
    it('Comprobar si se cumple la condicion con un elemento', function() {
        const numeros = new Fakay (1,2,3,4,5)
        const even = element => element % 2 === 0

        const result = numeros.some(even)

        expect(result).toBe(true)
    })

    it('Comprobar si uno de los animales existe', function() {

        const animales = new Fakay ('perro', 'unicornio', 'jirafa', 'mariposa')

        const hayUnMamut = element => element === "mamut"
        
        const result = animales.some(hayUnMamut)
        
            expect(result).toBe(false)
    })

    it('Comprobar si el perro está en la lista', function() {

    const animales = new Fakay ('perro', 'unicornio', 'jirafa', 'mariposa')

    const hayUnPerro = element => element === "perro"

    const result = animales.some(hayUnPerro, 1)

    expect(result).toBe(false)
    })

})








// console.log('SOME TEST')

// {

    // console.log('CASO 1')

    // const numeros = [1, 2, 3, 4, 5]

    // const even = element => element % 2 === 0

    // const result = some(numeros, even)

    // console.assert(result === true)

// }

// {

//     console.log('CASO 2')

//     const animales = ['perro', 'unicornio', 'jirafa', 'mariposa']

//     const hayUnMamut = element => element === "mamut"

//     const result = some(animales, hayUnMamut)

//     console.assert(result === false)

// }

// {

//     console.log('CASO 3 - INDICE')

//     const animales = ['perro', 'unicornio', 'jirafa', 'mariposa']

//     const hayUnPerro = element => element === "perro"

//     const result = some(animales, hayUnPerro, 1)

//     console.assert(result === false)

// // }
