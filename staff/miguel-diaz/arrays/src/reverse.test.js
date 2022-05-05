console.log('REVERSE TEST')

{

    console.log('CASO 1')

    const array1 = ['one', 'two', 'three'];

    const reversed = reverse(array1)

    const expectedArray = ["three", "two", "one"]

    for (let i = 0; i < expectedArray.length; i++) {
        console.assert(array1[i] === expectedArray[i])
        console.assert(reversed[i] === expectedArray[i])
        console.assert(array1[i] === reversed[i])
    }

}

{

    console.log('CASO 2')

    const array1 = [1, 2, 3, 4, 5, 6];

    const reversed = reverse(array1)

    const expectedArray = [6, 5, 4, 3, 2, 1]

    for (let i = 0; i < expectedArray.length; i++) {
        console.assert(array1[i] === expectedArray[i])
        console.assert(reversed[i] === expectedArray[i])
        console.assert(array1[i] === reversed[i])
    }

}