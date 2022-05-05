console.log('SHIFT TEST')

{

    console.log('CASO 1')

    const array1 = [1, 2, 3];

    const result = shift(array1);

    const arrayExpected = [2, 3]

    const resultExpected = 1

    console.assert(result === resultExpected)

    for (let i = 0; i < arrayExpected.length; i++) {
        console.assert(array1[i] === arrayExpected[i])
    }

}

{
    
    console.log('CASO 2')

    const array1 = [];

    const result = shift(array1);

    const arrayExpected = []

    const resultExpected = undefined

    console.assert(result === resultExpected)

    for (let i = 0; i < arrayExpected.length; i++) {
        console.assert(array1[i] === arrayExpected[i])
    }

}

{
    
    console.log('CASO 3')

    const myFish = ['angel', 'clown', 'mandarin', 'surgeon']

    const result = shift(myFish);

    const arrayExpected = ['clown', 'mandarin', 'surgeon']

    const resultExpected = 'angel'

    console.assert(result === resultExpected)

    for (let i = 0; i < arrayExpected.length; i++) {
        console.assert(myFish[i] === arrayExpected[i])
    }

}