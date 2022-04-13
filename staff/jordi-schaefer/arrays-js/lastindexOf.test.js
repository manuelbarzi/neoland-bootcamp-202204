
console.log('TEST lastindexOf')


const animals = ['ant', 'bison', 'camel', 'duck', 'bison']

{
    console.log('CASE 1')
    const result = lastindexOf(animals, 'bison')
    console.assert(result === 4)
}

{
    console.log('CASE 2')
    const result = lastindexOf(animals, 'camel')
    console.assert(result === 2)
}

{
    console.log('CASE 3')
    const result = lastindexOf(animals, 'ant')
    console.assert(result === 0)
}

{
    console.log('CASE 4')
    const result = lastindexOf(animals, 'bison', 2)
    console.assert(result === 4)
}

{
    console.log('CASE 5')
    const result = lastindexOf(animals, 'bison', -1)
    console.assert(result === 1)
}

{
    console.log('CASE 6')
    const result = lastindexOf(animals, 'bison', -3)
    console.assert(result === 1)
}
