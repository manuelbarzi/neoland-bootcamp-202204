{
    console.log('TEST pop')
    {
        console.log('CASE 1')
        const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

        const result = pop(plants);
        // expected output: "tomato"

        const resultExpected = ['broccoli', 'cauliflower', 'cabbage', 'kale'];
        // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

        console.assert(result === 'tomato')

        console.assert(plants[0] === resultExpected[0])
        console.assert(plants[1] === resultExpected[1])
        console.assert(plants[2] === resultExpected[2])
        console.assert(plants[3] === resultExpected[3])
    }

}