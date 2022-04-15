console.log('TEST every') 

{
    console.log('CASE 1')

    const array = [1, 30, 39, 29, 10, 13];

    const result = every(array, function(element) {
        const num = 40
        return element > num


    })
    console.assert(result === true)
}

{
    console.log('CASE 2')

    const array = [1, 30, 39, 29, 10, 13];

    const result = every(array, function(element) {
        const num = 40
        return element < num


    })
    console.assert(result === false)
}