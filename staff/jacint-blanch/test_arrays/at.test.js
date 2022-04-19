console.log('Test at')

{
    console.log('Case')

    const array1 = [5, 12, 8, 130, 44];

    const index = at(array1, 3)

    const reverseIndex = at(array1, -3)


    console.assert(index === 130)

    console.assert(reverseIndex === 8)



}