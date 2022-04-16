
console.log('TEST lastIndexOf')


{
    console.log('CASE 1')

    const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo', 'lorem']

    const result = lastIndexOf(animals, 'Dodo')

    console.assert(result === 3)
}


{
    console.log('CASE 2')

    const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo', undefined]

    const result = lastIndexOf(animals, 'Tiger')

    console.assert(result === 1)
}

{
    console.log('CASE 3')

    const animals = ['Tarzan', 'fish', 'Penguin', 'cat', undefined]

    const result = lastIndexOf(animals, undefined)

    console.assert(result === 4)

}