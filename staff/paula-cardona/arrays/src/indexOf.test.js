describe ('indexOf', function (){

    test ('example one', function(){
        const marcas = ['adidas', 'nike', 'apple', 'windows', 'audi']
        const resultado = indexOf (marcas, 'nike')

    expect(resultado).toBe(1)
    })

    test ('example two', function(){
        const marcas = ['adidas', 'nike', 'apple', 'windows', 'audi']
        const resultado = indexOf (marcas, 'audi', 2)

    expect(resultado).toBe(4)
    })

    test ('example no item', function(){
        const marcas = ['adidas', 'nike', 'apple', 'windows', 'audi']
        const resultado = indexOf (marcas, 'renault')

    expect(resultado).toBe(-1)
    })

})








/*----------------------------------------------->

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

}*/
