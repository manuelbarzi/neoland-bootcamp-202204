{
    console.log('TEST sort')


    {
        console.log('CASE: 1')
        const numbers = [4, 3, 7, 1, 5, 6, 2, 10, 9, 8]
        // expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        
        sort(numbers) // ordenar el array
        console.assert(numbers.length === 10) // el array debe ser igual de largo
        console.assert(numbers[0] === 1) 
        console.assert(numbers[1] === 10)
        console.assert(numbers[2] === 2) 
        console.assert(numbers[3] === 3)
        console.assert(numbers[4] === 4)
        console.assert(numbers[5] === 5)
        console.assert(numbers[6] === 6)
        console.assert(numbers[7] === 7)
        console.assert(numbers[8] === 8)
        console.assert(numbers[9] === 9)
    }

    
    {
        console.log('CASE: 2')
        let stringArray = ['Bbbblue', 'Humpback', 'Bbbblue', 'Bbbbeluga'];
        // ['Beluga', 'Blue', 'Humpback']

        sort(stringArray)

        console.assert(stringArray[0] === 'Bbbbeluga') 
        console.assert(stringArray[1] === 'Bbbblue')
        console.assert(stringArray[2] === 'Bbbblue')
        console.assert(stringArray[3] === 'Humpback')
    }


    {
        console.log('CASE: 3')
        let numberArray = [40, 1, 5, 200];
        // [1, 200, 40, 5]

        sort(numberArray)

        console.assert(numberArray[0] === 1) 
        console.assert(numberArray[1] === 200)
        console.assert(numberArray[2] === 40)
        console.assert(numberArray[3] === 5)
    }


    {
        console.log('CASE: 4')
        let numericStringArray = ['80', '9', '700'];
        // ['700', '80', '9']

        sort(numericStringArray)

        console.assert(numericStringArray[0] === '700') 
        console.assert(numericStringArray[1] === '80')
        console.assert(numericStringArray[2] === '9')
    }


    {
        console.log('CASE: 5')
        let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];
        // [1, 200, 40, 5, '700', '80', '9']

        sort(mixedNumericArray)

        console.assert(mixedNumericArray[0] === 1) 
        console.assert(mixedNumericArray[1] === 200)
        console.assert(mixedNumericArray[2] === 40)
        console.assert(mixedNumericArray[3] === 5) 
        console.assert(mixedNumericArray[4] === '700')
        console.assert(mixedNumericArray[5] === '80')
        console.assert(mixedNumericArray[6] === '9')
    }

    

 /*      Test para un sort normal   
    {
        console.log('CASE: 1')
        const numbers = [4, 3, 7, 1, 5, 6, 2, 10, 9, 8]
        // expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        
        sort(numbers) // ordenar el array
        console.assert(numbers.length === 10) // el array debe ser igual de largo
        console.assert(numbers[0] === 1) 
        console.assert(numbers[1] === 2) 
        console.assert(numbers[2] === 3)
        console.assert(numbers[3] === 4)
        console.assert(numbers[4] === 5)
        console.assert(numbers[5] === 6)
        console.assert(numbers[6] === 7)
        console.assert(numbers[7] === 8)
        console.assert(numbers[8] === 9)
        console.assert(numbers[9] === 10)
    }


    {
        console.log('CASE: 2')
        const numbers = [4, 10, 10, 3, 7, 9, 5, 6, 4, 1, 2, 7, 3, 5, 1, 6, 8, 5, 9, 4, 2, 6, 10, 9, 8]
        // expected = [1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 9, 10, 10, 10]
        
        sort(numbers) // ordenar el array
        console.assert(numbers.length === 25) // el array debe ser igual de largo
        console.assert(numbers[0] === 1) 
        console.assert(numbers[1] === 1) 
        console.assert(numbers[2] === 2)
        console.assert(numbers[3] === 2)
        console.assert(numbers[4] === 3)
        console.assert(numbers[5] === 3)
        console.assert(numbers[6] === 4)
        console.assert(numbers[7] === 4)
        console.assert(numbers[8] === 4)
        console.assert(numbers[9] === 5)

        console.log(numbers)
    }
*/

}