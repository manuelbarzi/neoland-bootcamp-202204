console.log ('Test pop')

{
    console.log ('Case 1')
    const array = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
    pop(array)

    console.assert(array[0] === 'broccoli')
    console.assert(array[1] === 'cauliflower')
    console.assert(array[2] === 'cabbage')
    console.assert(array[3] === 'kale')
    console.assert(array[4] === undefined)

}