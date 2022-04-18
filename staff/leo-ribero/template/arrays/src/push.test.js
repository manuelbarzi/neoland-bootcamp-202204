
{
    console.log('TEST push')

    {
        console.log('CASE: 1')

        const animals = ['pigs', 'goats', 'sheep']

        const addone = push(animals, 'gulls')

        console.assert(animals.length === 4)
        console.assert(animals[3] === 'gulls')

    }
    {
        console.log('CASE: 2')

        const animals = ['pigs', 'goats', 'sheep']

        const addsome = push(animals, 'gulls', 'cats', 'dolphins')

        console.assert(animals.length === 6)
        console.assert(animals[4] === 'cats')

    }




}