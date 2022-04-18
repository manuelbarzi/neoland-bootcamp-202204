{
    console.log('TEST map')

    const numbers = [1, 4, 9, 16]

    {
        console.log('CASE 1')

        let doubles = map(numbers, function (elem) {
            return elem * 2
        })
        console.assert(doubles[0] === 2)
        console.assert(doubles[1] === 8)
        console.assert(doubles[2] === 18)
        console.assert(doubles[3] === 32)
    }
}

/* TODO hacer ejemplo de Manu 14/4 10.00 caso de perros y caso de volumenes
{
    const dogAges = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
}
*/