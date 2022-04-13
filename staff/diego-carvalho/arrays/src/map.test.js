
console.log('TEST MAP')

{
    console.log('CASE 01')

    const num = [10, 20, 40, 30]

    // aqui solo uso el metodo map que ya existe
    // para llamar al metodo map:
    const metodoSecretPassword = num.map(function (number) {
        return number / 2
    })

    // aqui uso la funcion mapa que creare yo
    // para llamar a la FUNCION mapa creada por mi:
    // escribo "mapa()" y dentro del parentesis pongo el array que le envio(num)
    // y la funcion que quiero realizar para cada elemento (la funcion coje cada uno de los valor del index del array y return los numberos divididos)
    const funcionSecretPassword = map(num, function(number){
        return number / 2
    })

    console.assert(funcionSecretPassword[0]===5)
    console.assert(funcionSecretPassword[1]===10)
    console.assert(funcionSecretPassword[2]===20)
    console.assert(funcionSecretPassword[3]===15)

}



