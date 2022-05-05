console.log('TEST indexOf')

const marcas = ['adidas', 'nike', 'apple', 'windows', 'audi']

{
    console.log('CASO 1')

    const resultado = indexOf(marcas, 'nike')

    console.assert(resultado === 1)
}

{
    console.log('CASO 2')

    const resultado = indexOf(marcas, 'audi', 2)

    console.assert(resultado === 4)
}