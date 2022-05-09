{
    console.log('TEST flat')

    {
        console.log('CASE 1')

        const array1 = [1, 2, [3, 4]];

        const result = flat(array1)
        // expected output: [1, 2, 3, 4]

        console.assert(array1[0] === result[0])
        console.assert(array1[1] === result[1])
        console.assert(array1[2][0] === result[2])
        console.assert(array1[2][1] === result[3])
    }

}