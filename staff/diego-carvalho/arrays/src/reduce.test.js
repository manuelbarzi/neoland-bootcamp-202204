console.log('TEST reduce')
//El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
describe('reduce', () => {

    test('sum all the elements', () => {

        const array1 = [1, 2, 3, 4];

        const sumWithoutInitial = reduce(array1,
            (previousValue, currentValue) => previousValue + currentValue);

        expect(sumWithoutInitial).toBe(10);


    })

    test('sum using initial value', () => {
        
        const array1 = [1, 2, 3, 4];
        
        
        const sumWithInitial = reduce(array1, 
            (previousValue, currentValue) => previousValue + currentValue,
            2)
    
        expect(sumWithInitial).toBe(12)

    })


    

})
