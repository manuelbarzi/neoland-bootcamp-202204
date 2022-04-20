describe('copy within', () => {

    test('pasting one element from index 0', () => {

        const arr = ['a', 'b', 'c', 'd', 'e'];
        
        const result = copyWithin(arr, 0, 3, 4);
        
        const expectedResult = ["d", "b", "c", "d", "e"];
        
        checkArrays(result, expectedResult);

    })

    test('pasting elements from 3 to the end in index 1', () => {

        const arr = ["d", "b", "c", "d", "e"];
        
        const result = copyWithin(arr, 1, 3);
        
        const expectedResult = ["d", "d", "e", "d", "e"];
        
        checkArrays(result, expectedResult);

    })

    test('using index negative', () => {

        const arr = ["d", "b", "c", "d", "e"];
        
        const result = copyWithin(arr, -1, 3);
        
        const expectedResult = ["d", "b", "c", "d", "d"];

        checkArrays(result, expectedResult);

    })

    test('using all values in negative', () => {

        const arr = ["a", "b", "c", "d", "e"];
        
        const result = copyWithin(arr, -4, -3, -2);
        
        const expectedResult = ["a", "c", "c", "d", "e"];

        checkArrays(result, expectedResult);

    })

    test('with negative index and without start and end', () => {

        const arr = [1, 2, 3, 4, 5];
        
        const expectedResult = [1, 2, 3, 1, 2];
        
        const result = copyWithin(arr, -2);

        checkArrays(result, expectedResult);

    })

    test('aditional', () => {

        const arr = [1, 2, 3, 4, 5];
        
        const expectedResult = [4, 5, 3, 4, 5];
        
        const result = copyWithin(arr, 0, 3);

        checkArrays(result, expectedResult);

    })

    test('aditional 2', () => {

        const arr = [1, 2, 3, 4, 5];
    
        const expectedResult = [4, 2, 3, 4, 5];
    
        const result = copyWithin(arr, 0, 3, 4);

        checkArrays(result, expectedResult);

    })

    test('all arguments negatives', () => {

        const arr = [1, 2, 3, 4, 5];
        
        const expectedResult = [1, 2, 3, 3, 4];
        
        const result = copyWithin(arr, -2, -3, -1);

        checkArrays(result, expectedResult);

    })

})


