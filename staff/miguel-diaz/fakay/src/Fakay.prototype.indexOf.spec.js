describe('indexOf', function () {
    it('caso 1', function () {

    const marcas = new Fakay('adidas', 'nike', 'apple', 'windows', 'audi')
    const resultado = marcas.indexOf('nike')

    expect(resultado).toBe(1)

    })

    it('caso 2', function () {
    
    const marcas = new Fakay ('adidas', 'nike', 'apple', 'windows', 'audi')
    const resultado = marcas.indexOf('audi', 2)

    expect(resultado).toBe(4)
    })
})
