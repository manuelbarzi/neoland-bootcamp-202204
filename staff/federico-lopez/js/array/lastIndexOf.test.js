console.log('TEST LAST INDEX')

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo']

{
    console.log('CASE 1')
    console.assert(lastIndexOf(animals, 'Dodo') === 3)
}


{
    console.log('CASE 2')
    console.assert(lastIndexOf(animals, 'Tiger') === 1)
}

