describe('concat', () => {
    
    const array1 = ['a', 'b', 'c']
    const array2 = ['d' ,'e', 'f']

    test('should merge two arrays', () => {

    const result = concat(array1, array2)

    expect(result.length).toBe(array1.length + array2.length)
    expect(result[0]).toBe(array1[0])
    expect(result[1]).toBe(array1[1])
    expect(result[2]).toBe(array1[2])
    expect(result[3]).toBe(array2[0])
    expect(result[4]).toBe(array2[1])
    expect(result[5]).toBe(array2[2])
})

test('sum three arrays', () =>{

    const array3 = ['g', 'h', '1']

    const result = concat(array1, array2, array3)

    expect(result.length).toBe(array1.length + array2.length + array3.length)
    expect(result[0]).toBe(array1[0])
    expect(result[1]).toBe(array1[1])
    expect(result[2]).toBe(array1[2])
    expect(result[3]).toBe(array2[0])
    expect(result[4]).toBe(array2[1])
    expect(result[5]).toBe(array2[2])
    expect(result[6]).toBe(array3[0])
    expect(result[7]).toBe(array3[1])
    expect(result[8]).toBe(array3[2])
})
})