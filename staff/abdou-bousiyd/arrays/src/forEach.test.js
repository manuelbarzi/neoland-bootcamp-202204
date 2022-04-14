console.log('TEST forEach')

{
    console.log('CASE 1')
    const array = [1, 2, 3, 4, 5] 
    forEach(array, (value, index) => {
        const result = array[index] = value + 10
        console.assert(result === value + 10)
   })
}