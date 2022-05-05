describe('INCLUDES', function () {
    it('caso 1', function() {
    const animales = new Fakay ('leon', 'gato', 'perro', 'cuervo')
    const resultado = animales.includes('gato')
    console.log(resultado)
    })

    it('caso2', function() {
    const animales = new Fakay ('leon', 'gato', 'perro', 'cuervo')
    const resultado = animales.includes('cuervo', 1)
    console.log(resultado)
    })
})
