describe('concat', function() {

    test('should merge two arrays', function() {
    const array1 = ['a', 'b', 'c']
    const array2 = ['d' ,'e', 'f']

    const result = concat(array1, array2)

    expect(result.length).toBe(array1.length + array2.length)
    expect(result[0]).toBe(array1[0])
    expect(result[1]).toBe(array1[1])
    expect(result[2]).toBe('c')
    expect(result[3]).toBe('d')
    expect(result[4]).toBe('e')
    expect(result[5]).toBe('f')
})

/*const array3 = ['g', 'h', '1']

{
    console.log('CASE 2')

    const result = concat(array1, array2, array3)

    console.assert(result.length === array1.length + array2.length + array3.length)
    console.assert(result[0] === array1[0])
    console.assert(result[1] === array1[1])
    console.assert(result[2] === array1[2])
    console.assert(result[3] === array2[0])
    console.assert(result[4] === array2[1])
    console.assert(result[5] === array2[2])
    console.assert(result[6] === array3[0])
    console.assert(result[7] === array3[1])
    console.assert(result[8] === array3[2])
}*/
})