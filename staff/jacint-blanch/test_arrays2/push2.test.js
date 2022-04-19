console.log('Test push')

{
    console.log('Case')

    const animals = ['pigs', 'goats', 'sheep'];

    const newAnimal = push(animals, 'vaca')

    
    console.assert(animals[3] === 'vaca')
    console.assert(animals.length === 4)
}