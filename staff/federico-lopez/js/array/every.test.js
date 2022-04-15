console.log('TEST EVERY')

{

    console.log('CASE 1')

    const numbs = [1, 30, 39, 29, 10, 13]

    const isBelowThreshold = (currentValue) => currentValue < 40

    const result = every(numbs, isBelowThreshold)

    console.assert(result === true)

}

{

    console.log('CASE 2')

    const array = [1, 30, 39, 'hola', 29, 10, 13]
    
    const allAreNumbers = currentValue => typeof currentValue === 'number'
    
    const result = every(array, allAreNumbers)
    
    console.assert(result === false)
    
}

{

    console.log('CASE 3')

    const array = [1, 30, 39, 'hola', 29, 10, 13]
    
    const allAreNumbers = (currentValue) => typeof currentValue === 'number'
    
    const result = every(array, allAreNumbers, 5)
    
    console.assert(result === true)

}