describe('some', function () {
    test('returns true on element matching callback condition', function () {
        const nums = [1, 2, 3, 4, 5]

        const even = element => element % 2 === 0

        const contains = some(nums, even)

        expect(contains).toBe(true)
    })

    test('returns false on element not matching callback condition', function () {
        const nums = [1, 2, 3, 4, 5]

        const greaterThan7 = element => element > 7 === 0

        const contains = some(nums, greaterThan7)

        expect(contains).toBe(false)
    })

    test('returns false on element not matching callback condition. String', function (){
        const elements = ['fire', 'air', 'water']

        const earthElement = element => element === 'earth'

        const result = some(elements, earthElement)

        expect(result).toBe(false)
    })
})