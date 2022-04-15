console.log('TEST POP')



{

    console.log('CASE 1')

    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

    const result = pop(plants);
    
    const arrayExpected = ["broccoli", "cauliflower", "cabbage", "kale"]

    console.assert(result === 'tomato')

    for (i in plants) {
        console.assert(plants[i] === arrayExpected[i])
    }
    
}

{

    console.log('CASE 2')

    const plants = ["broccoli", "cauliflower", "cabbage", "kale"]

    const result = pop(plants)

    const arrayExpected = ["broccoli", "cauliflower", "cabbage"]

    for (i in plants) {
        console.assert(plants[i] === arrayExpected[i])
    }

}