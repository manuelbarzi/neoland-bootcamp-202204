describe('Fakay.prototype.indexOf', function() {

    it('select string', function() {
        const marcas = new Fakay ('adidas', 'nike', 'apple', 'windows', 'audi')
        const result = marcas.indexOf('nike')
        expect(result).toBe(1)
    })

    it('select string from index 2', function() {
        const marcas = new Fakay ('adidas', 'nike', 'apple', 'windows', 'audi')
        const result = marcas.indexOf('audi', 2)
        expect(result).toBe(4)
    })
    it ('example no item', function(){
        const marcas = new Fakay ('adidas', 'nike', 'apple', 'windows', 'audi')
        const resultado = marcas.indexOf('renault')

    expect(resultado).toBe(-1)
    })


})
