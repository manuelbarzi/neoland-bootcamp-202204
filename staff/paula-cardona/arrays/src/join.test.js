console.log('TEST join')

const elements = ['Fire', 'Air', 'Water'];

{
    console.log('CAS0 1')

    const resultado = join(elements)

    console.assert(resultado === 'Fire,Air,Water')
}

{
    console.log('CASO 2')

    const resultado = join(elements, '')

    console.assert(resultado === 'FireAirWater')
}

{
    console.log('CASO 3')

    const resultado = join(elements, '-')

    console.assert(resultado === 'Fire-Air-Water')
}


{
console.log('CASO 4')
const resultado = join(elements, '*')
console.assert(resultado === 'Fire*Air*Water')

}