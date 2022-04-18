console.log('TEST reverse')


{
    console.log('CASE 1')

    const array1 = ['one', 'two', 'three'];
    const result = ['three', 'two', 'one'] ;

    reverse(array1)

    console.assert(array1[i] === result[i])
    console.assert(array1[0] === 'three')
    console.assert(array1[1] === 'two')
    console.assert(array1[2] === 'one')
}