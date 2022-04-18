console.log('EVERY TEST')

{

    console.log('CASO 1')

    const numeros = [1, 30, 39, 29, 10, 13]

    const isBelowThreshold = (currentValue) => currentValue < 40

    const result = every(numeros, isBelowThreshold)

    console.assert(result === true)

}

{

    console.log('CASO 2')

    const array = [1, 30, 39, 'palabra', 29, 10, 13]
    
    const allNumbers = currentValue => typeof currentValue === 'numero'
    
    const result = every(array, allNumbers)
    
    console.assert(result === false)
    
}

{

    console.log('CASO 3')

    const array = [1, 30, 39, 'palabra', 29, 10, 13]
    
    const allNumbers = (currentValue) => typeof currentValue === 'numero'
    
    const result = every(array, allNumbers, 5)
    
    console.assert(result === true)

}