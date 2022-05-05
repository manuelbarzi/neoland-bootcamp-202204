describe('push', function() {
    it('should push one element', function() {
        const animals = new Fakay('pigs', 'goats', 'sheep')
        
        let count = animals.push('cows')
        
        expect(count).toBe(4)
        expect(animals[0]).toBe('pigs')
        expect(animals[1]).toBe('goats')
        expect(animals[2]).toBe('sheep')
        expect(animals[3]).toBe('cows')
    
        count = animals.push('elephants')
    
        expect(count).toBe(5)
        expect(animals[0]).toBe('pigs')
        expect(animals[1]).toBe('goats')
        expect(animals[2]).toBe('sheep')
        expect(animals[3]).toBe('cows')
        expect(animals[4]).toBe('elephants')
    })

    it('should push multiple elements', function() {
        const animals = new Fakay('pigs', 'goats', 'sheep')

        let count = animals.push('cows', 'koalas', 'lions')

        expect(count).toBe(6)
        expect(animals[0]).toBe('pigs')
        expect(animals[1]).toBe('goats')
        expect(animals[2]).toBe('sheep')
        expect(animals[3]).toBe('cows')
        expect(animals[4]).toBe('koalas')
        expect(animals[5]).toBe('lions')

        count = animals.push('elephants', 'gazelles')

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






















// console.log('TEST PUSH')

// {

//     console.log('CASO 1')

//     const animales = ['cerdo', 'cabra', 'oveja'];

//     const count = push(animales, 'vaca');
        
//     const expectedResult = ['cerdo', 'cabra', 'oveja', 'vaca']

//     console.assert(count === 4)

//     for (i in animales)
//         console.assert(animales[i] === expectedResult[i])

// }

// {

//     console.log('CASO 2')

//     const animales = ['cerdo', 'cabra', 'oveja', 'vaca'];

//     const count = push(animales, 'gato', 'pollo', 'perro');

//     const expectedResult = ['cerdo', 'cabra', 'oveja', 'vaca', 'gato', 'pollo', 'perro']
    
//     console.assert(count === 7)
    
//     for (i in animales)
//         console.assert(animales[i] === expectedResult[i])
    
// }