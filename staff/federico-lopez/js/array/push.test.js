console.log('TEST PUSH')

{

    console.log('CASE 1')

    const animals = ['pigs', 'goats', 'sheep'];

    const count = push(animals, 'cows');
        
    const expectedResult = ['pigs', 'goats', 'sheep', 'cows']

    console.assert(count === 4)

    for (i in animals)
        console.assert(animals[i] === expectedResult[i])

}

{

    console.log('CASE 2')

    const animals = ['pigs', 'goats', 'sheep', 'cows'];

    const count = push(animals, 'chickens', 'cats', 'dogs');

    const expectedResult = ['pigs', 'goats', 'sheep', 'cows', 'chickens', 'cats', 'dogs']
    
    console.assert(count === 7)
    
    for (i in animals)
        console.assert(animals[i] === expectedResult[i])
    
}