/*method is used to merge two or more arrays. This method does not change the existing arrays, 
but instead returns a new array
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, ... , valueN)
*/

describe ('concat', function() {

    it ('sum 2 arrays', function() {
        const array1 = ['a', 'b', 'c']
        const array2 = ['d', 'e', 'f']
        const result = concat(array1, array2)
        expect(result.length).toBe(array1.length+array2.length)
        expect(result.toString()).toBe(['a','b','c','d','e','f'].toString()) //('abcdef)
        /*los arrays juntos no se pueden comparar, se comparan desglosando los elementos
        por eso sino se desglosa de la siguiente forma*/
        expect(result[0]).toBe(array1[0])
        expect(result[1]).toBe(array1[1])
        expect(result[2]).toBe(array1[2])
        expect(result[3]).toBe(array2[0])
        expect(result[4]).toBe(array2[1])
        expect(result[5]).toBe(array2[2])
    })

    it ('sum 3 arrays', function() {
        const array1 = ['a', 'b', 'c']
        const array2 = ['d', 'e', 'f']
        const array3 = ['g', 'h', 'i']
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

/*{
    console.log('TEST concat')

    const array1 = ['a', 'b', 'c']
    const array2 = ['d', 'e', 'f']

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

    }} */