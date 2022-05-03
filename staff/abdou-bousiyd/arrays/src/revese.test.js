// console.log('TEST reverse')

// {
//     console.log('CASE 1')

//     const array1 = ['one', 'two', 'three'];
//     const result = ['three', 'two', 'one'] ;

//     reverse(array1)

//     console.assert(array1[i] === result[i])
//     console.assert(array1[0] === 'three')
//     console.assert(array1[1] === 'two')
//     console.assert(array1[2] === 'one')
// }

describe('reverse', function () {
    test('on three elements', function () {
        const nums = ['one', 'two', 'three']

        const reversed = reverse(nums)
        
        expect(reversed).toBe(nums)
        expect(reversed.length).toBe(3)

        expect(reversed[0]).toBe('three')
        expect(reversed[1]).toBe('two')
        expect(reversed[2]).toBe('one')
    })

    test('on four elements', function() {
        const nums = ['one', 'two', 'three', 'four']

        const reversed = reverse(nums)
        
        expect(reversed.length).toBe(4)
        expect(reversed[0]).toBe('four')
        expect(reversed[1]).toBe('three')
        expect(reversed[2]).toBe('two')
        expect(reversed[3]).toBe('one')
        
    })




})