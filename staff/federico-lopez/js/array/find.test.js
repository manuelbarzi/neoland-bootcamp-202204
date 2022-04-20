describe('find', () => {

    test('find the first element greater than 10', () => {
        
        const array1 = [5, 12, 8, 130, 44];
        
        const found = find(array1, function (element, index) {
            return element > 10;
        })
        
        expect(found).toBe(12);

    })
})

