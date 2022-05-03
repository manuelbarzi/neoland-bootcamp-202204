// console.log('Test push')
// {
//     console.log('CASE')

//     const cars = ["ferrari", "jaguar" ,"nissan", "melon"]
    
//     const totalCars = push(cars, "mazda")

//     console.assert(cars.length === 5 )
//     console.assert(cars[cars.length -1] === "mazda" )
//     console.assert(cars.length === totalCars )
// }


describe('push', function() {
    test('push one element', function() {
        const animals = ['pigs', 'goats', 'sheep']
        
        let count = push(animals, 'cows')
        
        expect(count).toBe(4)
        expect(animals[0]).toBe('pigs')
        expect(animals[1]).toBe('goats')
        expect(animals[2]).toBe('sheep')
        expect(animals[3]).toBe('cows')
    
        count = push(animals, 'elephants')
    
        expect(count).toBe(5)
        expect(animals[0]).toBe('pigs')
        expect(animals[1]).toBe('goats')
        expect(animals[2]).toBe('sheep')
        expect(animals[3]).toBe('cows')
        expect(animals[4]).toBe('elephants')
    })

    test('push multiple elements', function() {
        const animals = ['pigs', 'goats', 'sheep']

        let count = push(animals, 'cows', 'koalas', 'lions')

        expect(count).toBe(6)
        expect(animals[0]).toBe('pigs')
        expect(animals[1]).toBe('goats')
        expect(animals[2]).toBe('sheep')
        expect(animals[3]).toBe('cows')
        expect(animals[4]).toBe('koalas')
        expect(animals[5]).toBe('lions')

        count = push(animals, 'elephants', 'gazelles')

        expect(count).toBe(8)
        expect(animals[0]).toBe('pigs')
        expect(animals[1]).toBe('goats')
        expect(animals[2]).toBe('sheep')
        expect(animals[3]).toBe('cows')
        expect(animals[4]).toBe('koalas')
        expect(animals[5]).toBe('lions')
        expect(animals[6]).toBe('elephants')
        expect(animals[7]).toBe('gazelles')
    })
})















































// {
// console.log("Test push")

// const cars = ["seat", "ferrari", "peugeot", "nissan"];

// const length = push(cars, 'jaguar')

// console.assert(cars.length === 5)
// console.assert(cars[cars.length -1] === 'jaguar')
// console.assert(length === cars.length)



// console.log("Case 1")
// }
