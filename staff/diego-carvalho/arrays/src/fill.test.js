console.log('TEST fill')

{
    console.log('CASE 01')

    const array1 = [1, 2, 3, 4, 5, 8, 7]

    fill(array1, 6, 2, 5)//array(array3),elemente(6),start(2) y end(5)

    console.assert(array1[0] === 1)
    console.assert(array1[1] === 2)
    console.assert(array1[2] === 6)
    console.assert(array1[3] === 6)
    console.assert(array1[4] === 6)
    console.assert(array1[5] === 8)
    console.assert(array1[6] === 7)
    // [1, 2, 6, 6, 6, 8, 7])
}

{
    console.log('CASE 02')

    const array2= [1, 2, 3, 4, 5, 6, 7]

    fill(array2, 6, 2)//array(array3),elemente(6),start(2) y end(until the end of array3)

    console.assert(array2[0] === 1)
    console.assert(array2[1] === 2)
    console.assert(array2[2] === 6)
    console.assert(array2[3] === 6)
    console.assert(array2[4] === 6)
    console.assert(array2[5] === 6)
    console.assert(array2[6] === 6)
    // [1, 2, 6, 6, 6, 6, 6])
}

{
    console.log('CASE 03')

    const array3= [1, 2, 3, 4, 5, 6, 7]

    fill(array3, 6)//the function fill change all elements from array3 to be 6

    console.assert(array3[0] === 6)
    console.assert(array3[1] === 6)
    console.assert(array3[2] === 6)
    console.assert(array3[3] === 6)
    console.assert(array3[4] === 6)
    console.assert(array3[5] === 6)
    console.assert(array3[6] === 6)
    // [6, 6, 6, 6, 6, 6, 6])
}
