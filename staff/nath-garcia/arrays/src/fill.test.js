console.log('TEST fill')
{
    const nums = [1, 2, 3, 4];

    {
        console.log('CASE 1')

        const result = fill(nums, 0, 2, 4)

        const resultExpected = [1, 2, 0, 0]

        console.assert(result.length === resultExpected.length)

        console.assert(resultExpected[0] === 1)
        console.assert(resultExpected[1] === 2)
        console.assert(resultExpected[2] === 0)
        console.assert(resultExpected[3] === 0)
    }
}