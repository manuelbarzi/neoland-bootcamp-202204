console.log('TEST SORT')

{

    console.log('TEST 1')

    const months = ['March', 'Jan', 'Feb', 'Dec']

    sort(months)

    const expectedMonths = ["Dec", "Feb", "Jan", "March"]

    for (let i = 0; i < expectedMonths.length; i++) {
        console.assert(months[i] === expectedMonths[i])
    }

}

{

    console.log('TEST 2')

    const array1 = [1, 30, 4, 21, 100000]

    sort(array1)

    const expectedArray = [1, 100000, 21, 30, 4]

    for (let i = 0; i < expectedArray.length; i++) {
        console.assert(array1[i] === expectedArray[i])
    }

}

{

    console.log('TEST 3')

    const array1 = [40, 1, 5, 200];

    sort(array1)

    const expectedArray = [1, 200, 40, 5]

    for (let i = 0; i < expectedArray.length; i++) {
        console.assert(array1[i] === expectedArray[i])
    }

}

{

    console.log('TEST 4')

    const array1 = ['Blue', 'Humpback', 'Beluga']

    sort(array1)

    const expectedArray = ['Beluga', 'Blue', 'Humpback']

    for (let i = 0; i < expectedArray.length; i++) {
        console.assert(array1[i] === expectedArray[i])
    }

}

{

    console.log('TEST 5')

    const array1 = ['80', '9', '700'];

    sort(array1)

    const expectedArray = ['700', '80', '9']

    for (let i = 0; i < expectedArray.length; i++) {
        console.assert(array1[i] === expectedArray[i])
    }

}

{

    console.log('TEST 6')

    const array1 = ['80', '9', '700', 40, 1, 5, 200];

    sort(array1)

    const expectedArray = [1, 200, 40, 5, '700', '80', '9']

    for (let i = 0; i < expectedArray.length; i++) {
        console.assert(array1[i] === expectedArray[i])
    }

}

{

    console.log('TEST 7')

    const array1 = ['Blue', 'Humpback', undefined, 'Beluga']

    sort(array1)

    const expectedArray = ['Beluga', 'Blue', 'Humpback', undefined]

    for (let i = 0; i < expectedArray.length; i++) {
        console.assert(array1[i] === expectedArray[i])
        }

}