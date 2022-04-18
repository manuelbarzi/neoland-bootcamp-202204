console.log('POP TEST')



{

    console.log('CASO 1')

    const plantas = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

    const result = pop(plantas);
    
    const arrayExpected = ["broccoli", "cauliflower", "cabbage", "kale"]

    console.assert(result === 'tomato')

    for (i in plantas) {
        console.assert(plantas[i] === arrayExpected[i])
    }
    
}

{

    console.log('CASO 2')

    const plantas = ["broccoli", "cauliflower", "cabbage", "kale"]

    const result = pop(plantas)

    const arrayExpected = ["broccoli", "cauliflower", "cabbage"]

    for (i in plantas) {
        console.assert(plantas[i] === arrayExpected[i])
    }

}