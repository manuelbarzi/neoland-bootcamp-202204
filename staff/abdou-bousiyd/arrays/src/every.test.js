console.log('TEST every') 

{
    console.log('CASE 1')

    const array = [1, 30, 39, 29, 10, 13];

    const result = every(array, function(element) {
        const num = 40
        return element > num


    })
    console.assert(result === false)
}

{
    console.log('CASE 2')

    const array = [1, 30, 39, 29, 10, 13];

    const result = every(array, function(element) {
        const num = 40
        return element < num


    })
    console.assert(result === true)
}

{
    console.log('CASE 3')

    const nombres  = ['jorde', 'diego', 'carlos', 'nath', 'federico', 'yassin'];

    const result = every(nombres, function(nombre) {

        const num = 5
        return nombre.length > num
    })
    console.assert(result === true)
}

{
    console.log('CASE 4')

    const nombres  = ['jorde', 'diego', 'carlos', 'nath', 'federico', 'yassin'];

    const result = every(nombres, function(nombre) {

        const num = 2
        return nombre.length < num
    })
    console.assert(result === false)
}