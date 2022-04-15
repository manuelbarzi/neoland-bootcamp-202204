console.log('TEST some')

{
    console.log('CASE 1')

    const numeros = [1, 2, 3, 4, 5] 

    const result = some(numeros, function(numero) {
        return numero > 4
    })
    console.assert(result === true)
}

{
    console.log('CASE 2')

    const numeros = [1, 2, 3, 4, 5, 6, 7]

    const result = some(numeros, function(numero) {
        return numero < 2
    })
    console.assert(result === true)
}

{
    console.log('CASE 3')

    const numeros = [1, 2, 3, 4, 5, 6, 7]

    const result = some(numeros, function(numero) {
        return numero > 22
    })
    console.assert(result === false)
}
