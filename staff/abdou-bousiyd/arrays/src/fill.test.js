console.log('TEST fill')

{
    console.log('CASE 1')
    const numeros = [1, 2, 3, 4, 5]
    const value = 1
    const start = 1
    const end = 3
    fill(numeros, value, start, end)
    const array2 = [1, 1, 3, 4, 5] 
    console.assert(numeros.length === array2.length)
    for(let i = 0; i <  numeros.length; i++) {
        console.assert(numeros[i] === array2[i])
    }
}

{
    console.log('CASE 2')
    const numeros = [1, 2, 3, 4, 5]
    const value = 7
    const start = 1

    fill(numeros, value, start)
    
    // console.log(numeros)
    // const array2 = [1, 1, 3, 4, 5] 
    // console.assert(numeros.length === array2.length)

    // for(let i = 0; i <  numeros.length; i++) {
    //     console.assert(numeros[i] === array2[i])
    // }
}