{
    console.log('TEST pop')

    {
        console.log('CASE 1')

        const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
        
        const result = pop(plants)

        console.assert(result === 'tomato')
        console.assert(plants.length === 4)

    }
}