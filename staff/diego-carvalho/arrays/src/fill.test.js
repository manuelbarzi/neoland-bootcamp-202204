console.log('TEST fill')

{
    console.log('CASE 01')

    const array1 = [1, 2, 3, 4]

    // fill with 0 from position 2 until position 4
    array1.fill(0, 2, 4)

    console.assert(array1[0] === 1)
    console.assert(array1[1] === 2)
    console.assert(array1[2] === 0)
    console.assert(array1[3] === 0)
    // expected output: [1, 2, 0, 0]
}

{
    console.log('CASE 02')

    const array2 = [1, 2, 3, 4, 5, 8, 7]

    array2.fill(6, 2, 5)

    console.assert(array2[0] === 1)
    console.assert(array2[1] === 2)
    console.assert(array2[2] === 6)
    console.assert(array2[3] === 6)
    console.assert(array2[4] === 6)
    console.assert(array2[5] === 8)
    console.assert(array2[6] === 7)

}

{
    console.log('CASE 03')

    const array3 = [1, 2, 3, 4, 5, 8, 7]

    fill(array3, 6, 2, 5)//array(array3),elemente(6),start(2) y end(5)

    console.assert(array3[0] === 1)
    console.assert(array3[1] === 2)
    console.assert(array3[2] === 6)
    console.assert(array3[3] === 6)
    console.assert(array3[4] === 6)
    console.assert(array3[5] === 8)
    console.assert(array3[6] === 7)
    // [1, 2, 6, 6, 6, 8, 7])
}

{
    function fill(array3, element, start = 2, end = array3.length) {

        const newArr = [] // creo un nuevo array vacio

        for (let i = start; i < end; i++) { // recorre desde la i= al valor START(2), hasta el valor END(5), de 1 en 1
            newArr[i] = element  //el newArr[i] es igual a element (6) (newAR = [1, 2, 6, 6, 6, 6, 7])
        }
        return newArr  // devuelto el nuevo array ENTERO, con los cambios ya hechos
        // [1, 2, 6, 6, 6, 8, 7]
    }
}