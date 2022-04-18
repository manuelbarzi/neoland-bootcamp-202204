{
    console.log('TEST every')

    const randomNums = [1, 30, 39, 29, 10, 13];

    {
        console.log('case 1')

        const result = every(randomNums, function (currentValue) {
            return currentValue < 40
        })

        console.assert(result === true)
    }
}