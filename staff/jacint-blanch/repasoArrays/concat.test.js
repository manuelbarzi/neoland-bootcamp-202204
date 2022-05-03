console.log('Test concat')

// {
//     console.log('Join 2 or more arrays in a new array')

//     const array1 = ['a', 'b', 'c'];
//     const array2 = ['d', 'e', 'f'];


//     const result = concat(array1, array2)

    
//     console.assert(result[0] === 'a')
//     console.assert(result[1] === 'b')
//     console.assert(result[2] === 'c')
//     console.assert(result[3] === 'd')
//     console.assert(result[4] === 'e')
//     console.assert(result[5] === 'f')
// }

// {
//     console.log('Join 2 arrays or more and one element inside a new array')

//     const array1 = ['a', 'b', 'c'];
//     const array2 = ['d', 'e', 'f'];

//     const result = concat(array1, array2, 1)

    
//     console.assert(result[0] === 'a')
//     console.assert(result[1] === 'b')
//     console.assert(result[2] === 'c')
//     console.assert(result[3] === 'd')
//     console.assert(result[4] === 'e')
//     console.assert(result[5] === 'f')
//     console.assert(result[6] === 1)
// }

{
    console.log('Join various elements inside an erray returning a new array')

    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];

    const result = concat(array1, array2, 1, 50)

    console.log(result)
    console.assert(result[0] === 'a')
    console.assert(result[1] === 'b')
    console.assert(result[2] === 'c')
    console.assert(result[3] === 'd')
    console.assert(result[4] === 'e')
    console.assert(result[5] === 'f')
    console.assert(result[6] === 1)
    console.assert(result[7] === 50)
}