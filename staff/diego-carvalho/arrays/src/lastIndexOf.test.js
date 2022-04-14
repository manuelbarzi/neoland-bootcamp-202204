
const result = lastIndexOf(['Dodo', 'Tiger', 'Penguin', 'Dodo', 'lorem'])
console.log('TEST LAST INDEX')

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo', undefined]

{
    console.log('CASE 1')

    const result = lastIndexOf(animals, 'Dodo')
    
    console.assert(result === 3)
}


{
    console.log('CASE 2')

    const result = lastIndexOf(animals, 'Tiger')

    console.assert(result === 1)
}

{
    console.log('CASE 3')

    const result = lastIndexOf(animals, undefined)

    console.assert(result === 4)

}