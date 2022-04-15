console.log('TEST find')
{
    console.log('CASE 1')

    const numeros = [1, 2, 3, 4, 5, 6]

    const result = find(numeros, function(numero) {
        return numero > 3
    })
    console.assert(result === 4)
}

{
    console.log('CASE 2')

    const numeros = [11, 32, 83, 40, 5, 16]

    const result = find(numeros, function(numero) {
        return numero > 3
    })
    console.assert(result === 11)
}