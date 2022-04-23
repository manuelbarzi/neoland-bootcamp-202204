describe('sort', () => {

    test('sort an array of strings', () => {

        const months = ['March', 'Jan', 'Feb', 'Dec']
        
        sort(months)
        
        const expectedMonths = ["Dec", "Feb", "Jan", "March"]
    
        checkArrays(months, expectedMonths)

    })

    test('sort an array of numbers', () => {

        const array1 = [1, 30, 4, 21, 100000]
        
        sort(array1)
        
        const expectedArray = [1, 100000, 21, 30, 4]

        checkArrays(array1, expectedArray)

    })

    test('sort another array of numbers', () =>{

        const array1 = [40, 1, 5, 200];
        
        sort(array1)
        
        const expectedArray = [1, 200, 40, 5]

        checkArrays(array1, expectedArray)

    })

    test('sort an array of strings 2', () => {

        const array1 = ['Blue', 'Humpback', 'Beluga']

        sort(array1)
    
        const expectedArray = ['Beluga', 'Blue', 'Humpback']

        checkArrays(array1, expectedArray)

    })
    
    test('sort an array of strings that contain character numbers', () => {

        const array1 = ['80', '9', '700']

        sort(array1)
    
        const expectedArray = ['700', '80', '9']

        checkArrays(array1, expectedArray)

    })

    test('sort an array with both numbers and strings', () => {

        const array1 = ['80', '9', '700', 40, 1, 5, 200];

        sort(array1)
    
        const expectedArray = [1, 200, 40, 5, '700', '80', '9']

        checkArrays(array1, expectedArray)

    })

    test('sort an array that includes undefined as one of the elements', () => {

        const array1 = ['Blue', 'Humpback', undefined, 'Beluga']

        sort(array1)
    
        const expectedArray = ['Beluga', 'Blue', 'Humpback', undefined]

        checkArrays(array1, expectedArray)

    })

})