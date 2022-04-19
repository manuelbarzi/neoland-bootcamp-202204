{
    console.log('TEST push')

    {
        console.log('CASE push one element')

        const animals = ['pigs', 'goats', 'sheep']

        let count = push(animals, 'cows')

        console.assert(count === 4)
        console.assert(animals[0] === 'pigs')
        console.assert(animals[1] === 'goats')
        console.assert(animals[2] === 'sheep')
        console.assert(animals[3] === 'cows')
        // console.assert(animals[animals.length - 1] === 'cows')

        count = push(animals, 'elephants')

        console.assert(count === 5)
        console.assert(animals[0] === 'pigs')
        console.assert(animals[1] === 'goats')
        console.assert(animals[2] === 'sheep')
        console.assert(animals[3] === 'cows')
        console.assert(animals[4] === 'elephants')
        // console.assert(animals[animals.length - 1] === 'elephants')
    }

    {
        console.log('CASE push multiple elements')

        const animals = ['pigs', 'goats', 'sheep']

        let count = push(animals, 'cows', 'koalas', 'lions')

        console.assert(count === 6)
        console.assert(animals[0] === 'pigs')
        console.assert(animals[1] === 'goats')
        console.assert(animals[2] === 'sheep')
        console.assert(animals[3] === 'cows')
        console.assert(animals[4] === 'koalas')
        console.assert(animals[5] === 'lions')

        count = push(animals, 'elephants', 'gazelles')

        console.assert(count === 8)
        console.assert(animals[0] === 'pigs')
        console.assert(animals[1] === 'goats')
        console.assert(animals[2] === 'sheep')
        console.assert(animals[3] === 'cows')
        console.assert(animals[4] === 'koalas')
        console.assert(animals[5] === 'lions')
        console.assert(animals[6] === 'elephants')
        console.assert(animals[7] === 'gazelles')
    }
}

