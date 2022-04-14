console.log('TEST indexOf')

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison', 'camel']

{
    console.log('CASE 1')

    const result = indexOf(beasts, 'bison')

    console.assert(result === 1)
}

{
    console.log('CASE 2')

    const result = indexOf(beasts, 'bison', 2)

    console.assert(result === 4)
}

{
    console.assert('CASE 3')

    const result = indexOf(beasts, 'camel', 1)

    console.assert( result === 2)
}

{
    console.assert('CASE 4')

    const result = indexOf(beasts, 'camel', -2)

    console.assert( result === 2)
}
