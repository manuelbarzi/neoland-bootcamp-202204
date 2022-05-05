/*{ //CUANTO MÁS EXAUSTIVO ES EL TEST MEJOR ES!!!
    console.log('TEST push')
    {
        console.log('CASE push one element')
        const animals = ['pigs', 'goats', 'sheep'];

        let count = push(animals, 'cows');

        console.assert(count === 4)

        console.assert(animals[0] === 'pigs')
        console.assert(animals[1] === 'goats')
        console.assert(animals[2] === 'sheep')
        console.assert(animals[3] === 'cows')
        //console.assert(animals[animals.length - 1] === 'cows')

        count = push(animals, 'elephants')

        console.assert(count === 5)

        console.assert(animals[4] === 'elephants')
    }
    //TODO transcribir segundo caso
}*/