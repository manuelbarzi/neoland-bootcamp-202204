/*

- crear un for donde el valor positivo recorra el array desde 0
- dentro del 1er for validar las posiciones
- crear otro for donde el valor negativo recorra el array desde el final -1 de su length
- dentro del 2ndo for validar las posiciones negativas
*/

describe('AT', function () {
    it('caso1', function() {
    const marcasv2 = new Fakay('nike', 'adidas', 'rebook', 'apple')
    let indice = 2
    const resultado = marcasv2.at(indice)
    console.log(resultado) 

    })

    it('caso2', function() {
        const marcasv2 = new Fakay ('nike', 'adidas', 'rebook', 'apple')
        let indice = -1
        const resultado = marcasv2.at(indice)
        console.log(resultado) 
    })
})



