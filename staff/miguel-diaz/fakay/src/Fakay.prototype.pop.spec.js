describe('pop', function () {
    it('returns last element', function () {
        const plants = new Fakay('broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato')

        let plant = plants.pop()
        expect(plant).toBe('tomato')
        
        expect(plants.length).toBe(4)
        expect(plants[0]).toBe('broccoli')
        expect(plants[1]).toBe('cauliflower')
        expect(plants[2]).toBe('cabbage')
        expect(plants[3]).toBe('kale')
        //expect(plants[4]).toBeUndefined()
        expect(plants.hasOwnProperty(4)).toBeFalsy()

        plant = plants.pop()
        expect(plant).toBe('kale')

        expect(plants.length).toBe(3)
        expect(plants[0]).toBe('broccoli')
        expect(plants[1]).toBe('cauliflower')
        expect(plants[2]).toBe('cabbage')
    })

    it('return undefined on empty array', function() {
        const fakay = new Fakay

        const element = fakay.pop()

        expect(element).toBe(undefined)
    })
})







































// console.log('POP TEST')



// {

//     console.log('CASO 1')

//     const plantas = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

//     const result = pop(plantas);
    
//     const arrayExpected = ["broccoli", "cauliflower", "cabbage", "kale"]

//     console.assert(result === 'tomato')

//     for (i in plantas) {
//         console.assert(plantas[i] === arrayExpected[i])
//     }
    
// }

// {

//     console.log('CASO 2')

//     const plantas = ["broccoli", "cauliflower", "cabbage", "kale"]

//     const result = pop(plantas)

//     const arrayExpected = ["broccoli", "cauliflower", "cabbage"]

//     for (i in plantas) {
//         console.assert(plantas[i] === arrayExpected[i])
//     }

// }