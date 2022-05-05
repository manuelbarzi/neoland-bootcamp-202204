describe('Shift', function () {
    it('caso 1', function () {

    const array1 = new Fakay (1, 2, 3)

    const result = array1.shift()

    const arrayExpected = (2, 3)

    const resultExpected = 1

    expect(result).toBe(resultExpected)

    for (let i = 0; i < arrayExpected.length; i++) {
        expect(array1[i]).toBe(arrayExpected[i])
    }

    })

    it('caso 2', function () {
    const array1 = [];

    const result = array1.shift();

    const arrayExpected = []

    const resultExpected = undefined

    expect(result).toBe(resultExpected)

    for (let i = 0; i < arrayExpected.length; i++) {
    expect(array1[i]).toBe(arrayExpected[i])
    }
    })

    it('caso 3', function () {
    const myFish = new Fakay ('angel', 'clown', 'mandarin', 'surgeon')

    const result = myFish.shift();

    const arrayExpected = new Fakay('clown', 'mandarin', 'surgeon')

    const resultExpected = 'angel'

    expect(result).toBe(resultExpected)

    for (let i = 0; i < arrayExpected.length; i++) {
    expect(myFish[i]).toBe(arrayExpected[i])
    }
    })
})







//     console.log('CASO 1')

    // const array1 = [1, 2, 3];

    // const result = shift(array1);

    // const arrayExpected = [2, 3]

    // const resultExpected = 1

    // console.assert(result === resultExpected)

    // for (let i = 0; i < arrayExpected.length; i++) {
    //     console.assert(array1[i] === arrayExpected[i])
    // }

// }

// {
    
//     console.log('CASO 2')

    // const array1 = [];

    // const result = shift(array1);

    // const arrayExpected = []

    // const resultExpected = undefined

    // console.assert(result === resultExpected)

    // for (let i = 0; i < arrayExpected.length; i++) {
    //     console.assert(array1[i] === arrayExpected[i])
    // }

// }

// {
    
//     console.log('CASO 3')

    // const myFish = ['angel', 'clown', 'mandarin', 'surgeon']

    // const result = shift(myFish);

    // const arrayExpected = ['clown', 'mandarin', 'surgeon']

    // const resultExpected = 'angel'

    // console.assert(result === resultExpected)

    // for (let i = 0; i < arrayExpected.length; i++) {
    //     console.assert(myFish[i] === arrayExpected[i])
    // }

// }