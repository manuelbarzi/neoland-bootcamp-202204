console.log('Test includes')

{
    console.log('Case')

    const animals = ['pigs', 'goats', 'sheep', 'vaca', 'jaguar'];

    const isThereAnimal = includes(animals, 'ca')

    console.log(isThereAnimal,99)
    console.assert(isThereAnimal === true)
}