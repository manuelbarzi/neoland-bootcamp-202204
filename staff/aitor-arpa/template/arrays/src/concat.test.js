/* console.log('TEST concat')



{
    console.log('CASE 1')

    const result = concat(array1, array2)

    console.assert(result.length === array1.length + array2.length)
    console.assert(result[0] === array1[0])
    console.assert(result[1] === array1[1])
    console.assert(result[2] === array1[2])
    console.assert(result[3] === array2[0])
    console.assert(result[4] === array2[1])
    console.assert(result[5] === array2[2])
} */
describe('Concat', function() {
    const array1 = ['a', 'b', 'c']
    const array2 = ['d', 'e', 'f']

    test('Concat two array for only array', function(){
    const result = concat(array1, array2)

    expect(result[0]).toBe('a')
    expect(result[1]).toBe('b')
    expect(result[2]).toBe('c')
    expect(result[3]).toBe('d')
    expect(result[4]).toBe('e')
    expect(result[5]).toBe('f')
    expect(result.length === 6).toBe(true)
    })
    

})