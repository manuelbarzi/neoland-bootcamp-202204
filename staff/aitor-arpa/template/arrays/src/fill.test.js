/* console.log('TEST fill')
{    const array = [1, 2, 3, 4]
    {
        console.log('case 1')       

        fill(array, 0, 2, 3)
        
        // console.log(array)
        // console.assert(array === [1, 2, 0, 0])
        console.assert(array[0] === 1)
        console.assert(array[1] === 2)
        console.assert(array[2] === 0)
        console.assert(array[3] === 0)

        /*
        const expectedResult = [1, 2, 0, 0]
    
        for (let i = 0; i < array.length; i++) {
            console.assert(array[i] === expectedResult[i])
        }
        */


 

describe('fill', () => {
    
    const array123 = [1, 2, 3, 4];

    test('fill with zeros from 2 to 4', () => {
        
        const result = fill(array123, 0, 2, 4);
        
        const expectedResult = [1, 2, 0, 0];
        
        checkArrays(expectedResult, array123);
        checkArrays(expectedResult, result);

    })

    test('fill with fives from 1', () => {
        
        const result = fill(array123, 5, 1);
    
        const expectedResult = [1, 5, 5, 5];
    
        checkArrays(expectedResult, array123);
        checkArrays(expectedResult, result);

    })

    test('fill all the array with sixs', () => {
        
        const result = fill(array123, 6);

        const expectedResult = [6, 6, 6, 6];

        checkArrays(expectedResult, array123);
        checkArrays(expectedResult, result);

    })
})