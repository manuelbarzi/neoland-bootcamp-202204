describe('splice', () => {

    test('adding one element', () => {

        const months = ['Jan', 'March', 'April', 'June'];
        
        const result = splice(months, 1, 0, 'Feb')
        
        const expectedMonths = ["Jan", "Feb", "March", "April", "June"]
        
        const expectedResult = []
        
        checkArrays(expectedResult, result)
        checkArrays(expectedMonths, months)

    })

    test('adding one element and deleting one element', () => {

        const months = ["Jan", "Feb", "March", "April", "June"]
        
        const result = splice(months, 4, 1, 'May')
        
        const expectedMonths = ["Jan", "Feb", "March", "April", "May"]
        
        const expectedResult = ['June']

        checkArrays(expectedResult, result)
        checkArrays(expectedMonths, months)

    })

    test('adding one element, no delete', () => {

        const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
        
        const result = splice(myFish, 2, 0, 'drum')
        
        const expectedFish = ["angel", "clown", "drum", "mandarin", "sturgeon"]
        
        const expectedResult = []

        checkArrays(expectedResult, result)
        checkArrays(expectedFish, myFish)

    })

    test('adding two elements, no deleting', () => {

        const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
        
        const result = splice(myFish, 2, 0, 'drum', 'guitar')
        
        const expectedFish = ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
        
        const expectedResult = []

        checkArrays(expectedResult, result)
        checkArrays(expectedFish, myFish)

    })

    test('no adding, deleting one element', () => {

        const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
        
        const result = splice(myFish, 3, 1)
        
        const expectedFish = ["angel", "clown", "drum", "sturgeon"]
        
        const expectedResult = ["mandarin"]

        checkArrays(expectedResult, result)
        checkArrays(expectedFish, myFish)

    })

    test('adding one element, deleting one element', () => {

        const myFish = ['angel', 'clown', 'drum', 'sturgeon']
        
        const result = splice(myFish, 2, 1, 'trumpet')
        
        const expectedFish = ["angel", "clown", "trumpet", "sturgeon"]
        
        const expectedResult = ["drum"]

        checkArrays(expectedResult, result)
        checkArrays(expectedFish, myFish)

    })

    test('adding three elements, deleting two elements', () => {

        const myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
        
        const result = splice(myFish, 0, 2, 'parrot', 'anemone', 'blue')
        
        const expectedFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
        
        const expectedResult = ["angel", "clown"]

        checkArrays(expectedResult, result)
        checkArrays(expectedFish, myFish)

    })

    test('only deleting two elements', () => {

        const myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
        
        const result = splice(myFish, 2, 2)
        
        const expectedFish = ["parrot", "anemone", "sturgeon"]
        
        const expectedResult = ["blue", "trumpet"]

        checkArrays(expectedResult, result)
        checkArrays(expectedFish, myFish)

    })

    test('negative index', () => {

        const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
        
        const result = splice(myFish, -2, 1)
        
        const expectedFish = ["angel", "clown", "sturgeon"]
        
        const expectedResult = ["mandarin"]

        checkArrays(expectedResult, result)
        checkArrays(expectedFish, myFish)

    })

    test('remove all elements, from index 2', () => {

        const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
        
        const result = splice(myFish, 2)
        
        const expectedFish = ["angel", "clown"]
        
        const expectedResult = ["mandarin", "sturgeon"]

        checkArrays(expectedResult, result)
        checkArrays(expectedFish, myFish)

    })
})