console.log('JOIN TEST')

const elements = ['Fire', 'Air', 'Water'];

{
    console.log('CASO 1')

    const result = join(elements)

    console.assert(result === 'Fire,Air,Water')
}

{
    console.log('CASO 2')

    const result = join(elements, '')

    console.assert(result === 'FireAirWater')
}

{
    console.log('CASO 3')

    const result = join(elements, '-')

    console.assert(result === 'Fire-Air-Water')
}

