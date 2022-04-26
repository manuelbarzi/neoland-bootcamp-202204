{
    console.log('TEST push')
    {
        console.log('CASE 1')
        const animals = ['pigs', 'goats', 'sheep'];

        const count = push(animals, 'cows');

        const result = ['pigs', 'goats', 'sheep', 'cows']

        console.assert(count === 4)
        
        console.assert(result[0] === animals[0])
        console.assert(result[1] === animals[1])
        console.assert(result[2] === animals[2])
        console.assert(result[3] === animals[3])
    }
}