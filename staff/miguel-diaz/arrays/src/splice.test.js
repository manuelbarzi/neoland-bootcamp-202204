describe('splice', () => {
    test('inserts a Feb between Jan and March', () => {

    })
})






{

    console.log('CASO 1')
    
    const months = ['Jan', 'March', 'April', 'June'];

    const result = splice(months, 1, 0, 'Feb')

    const expectedMonths = ["Jan", "Feb", "March", "April", "June"]

    const expectedResult = []

    console.assert(expectedResult.length === result.length)

    for (let i = 0; i < result.length; i++) {
        console.assert(result[i] === expectedResult[i])
    }

    for (let i = 0; i < expectedMonths.length; i++) {
        console.assert(months[i] === expectedMonths[i])
    }

}

{

    console.log('CASO 2')
    
    const months = ["Jan", "Feb", "March", "April", "June"]

    const result = splice(months, 4, 1, 'May')

    const expectedMonths = ["Jan", "Feb", "March", "April", "May"]

    const expectedResult = ['June']

    console.assert(expectedResult.length === result.length)

    for (let i = 0; i < result.length; i++) {
        console.assert(result[i] === expectedResult[i])
    }

    for (let i = 0; i < expectedMonths.length; i++) {
        console.assert(months[i] === expectedMonths[i])
    }

}

{

    console.log('CASO 3')

    const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']

    const result = splice(myFish, 2, 0, 'drum')

    const expectedFish = ["angel", "clown", "drum", "mandarin", "sturgeon"]

    const expectedResult = []

    console.assert(expectedResult.length === result.length)

    for (let i = 0; i < result.length; i++) {
        console.assert(result[i] === expectedResult[i])
    }

    for (let i = 0; i < expectedFish.length; i++) {
        console.assert(myFish[i] === expectedFish[i])
    }

}

{

    console.log('CASO 4')

    const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']

    const result = splice(myFish, 2, 0, 'drum', 'guitar')

    const expectedFish = ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]

    const expectedResult = []

    console.assert(expectedResult.length === result.length)

    for (let i = 0; i < result.length; i++) {
        console.assert(result[i] === expectedResult[i])
    }

    for (let i = 0; i < expectedFish.length; i++) {
        console.assert(myFish[i] === expectedFish[i])
    }

}

{

    console.log('CASO 5')

    const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']

    const result = splice(myFish, 3, 1)

    const expectedFish = ["angel", "clown", "drum", "sturgeon"]

    const expectedResult = ["mandarin"]

    console.assert(expectedResult.length === result.length)

    for (let i = 0; i < result.length; i++) {
        console.assert(result[i] === expectedResult[i])
    }

    for (let i = 0; i < expectedFish.length; i++) {
        console.assert(myFish[i] === expectedFish[i])
    }

}

{

    console.log('CASO 6')

    const myFish = ['angel', 'clown', 'drum', 'sturgeon']

    const result = splice(myFish, 2, 1, 'trumpet')

    const expectedFish = ["angel", "clown", "trumpet", "sturgeon"]

    const expectedResult = ["drum"]

    console.assert(expectedResult.length === result.length)

    for (let i = 0; i < result.length; i++) {
        console.assert(result[i] === expectedResult[i])
    }

    for (let i = 0; i < expectedFish.length; i++) {
        console.assert(myFish[i] === expectedFish[i])
    }

}

{

    console.log('CASO 7')

    const myFish = ['angel', 'clown', 'trumpet', 'sturgeon']

    const result = splice(myFish, 0, 2, 'parrot', 'anemone', 'blue')

    const expectedFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"]

    const expectedResult = ["angel", "clown"]

    console.assert(expectedResult.length === result.length)

    for (let i = 0; i < result.length; i++) {
        console.assert(result[i] === expectedResult[i])
    }

    for (let i = 0; i < expectedFish.length; i++) {
        console.assert(myFish[i] === expectedFish[i])
    }

}

{

    console.log('CASO 8')

    const myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']

    const result = splice(myFish, 2, 2)

    const expectedFish = ["parrot", "anemone", "sturgeon"]

    const expectedResult = ["blue", "trumpet"]

    console.assert(expectedResult.length === result.length)

    for (let i = 0; i < result.length; i++) {
        console.assert(result[i] === expectedResult[i])
    }

    for (let i = 0; i < expectedFish.length; i++) {
        console.assert(myFish[i] === expectedFish[i])
    }

}

{

    console.log('CASO 9')

    const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']

    const result = splice(myFish, -2, 1)

    const expectedFish = ["angel", "clown", "sturgeon"]

    const expectedResult = ["mandarin"]

    console.assert(expectedResult.length === result.length)

    for (let i = 0; i < result.length; i++) {
        console.assert(result[i] === expectedResult[i])
    }

    for (let i = 0; i < expectedFish.length; i++) {
        console.assert(myFish[i] === expectedFish[i])
    }

}

{

    console.log('CASO 10')

    const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']

    const result = splice(myFish, 2)

    const expectedFish = ["angel", "clown"]

    const expectedResult = ["mandarin", "sturgeon"]

    console.assert(expectedResult.length === result.length)

    for (let i = 0; i < result.length; i++) {
        console.assert(result[i] === expectedResult[i])
    }

    for (let i = 0; i < expectedFish.length; i++) {
        console.assert(myFish[i] === expectedFish[i])
    }

}
