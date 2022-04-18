console.log('TEST pop')

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

{
    console.log('CASE 1')

    pop(plants)

    console.assert(plants.length === 4)
    console.assert(plants[0] === 'broccoli')
    console.assert(plants[1] === 'cauliflower')
    console.assert(plants[2] === 'cabbage')
    console.assert(plants[3] === 'kale')
}

{
    console.log('CASE 2')

    pop(plants)

    const result = ['broccoli', 'cauliflower', 'cabbage']

    console.assert(plants.length === 3)

    for(let i = 0; i < plants.length; i++) {
        console.assert(plants[i] === result[i])
    }
}