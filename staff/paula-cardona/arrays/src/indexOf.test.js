console.log('TEST indexOf')



{
    console.log('CASE 1')
    const marcas = ['adidas', 'nike', 'apple', 'windows', 'audi']

    const resultado = indexOf(marcas, 'nike')

    console.assert(resultado === 1)
}

{
    console.log('CASE 2')
    const marcas = ['adidas', 'nike', 'apple', 'windows', 'audi']

    const resultado = indexOf(marcas, 'audi', 2)

    console.assert(resultado === 4)


}


    {console.log ('CASE 3')
    const marcas = ['adidas', 'nike', 'apple', 'windows', 'audi']
    const resultado = indexOf (marcas, 'renault')
    console.assert(resultado === -1)

}

//* me devuelve audi porque es el primer elemento que encuentra 

