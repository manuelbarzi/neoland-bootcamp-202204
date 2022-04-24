console.log('Test flat')

{
    console.log('Case')

    const numbers = [1, 5, 8, [10, 40, [55, 34, [98, 21]]]]

    const allNumbers = flat(numbers,)


    console.assert(allNumbers[3] === 10)
    console.assert(allNumbers[4] === 40)



}