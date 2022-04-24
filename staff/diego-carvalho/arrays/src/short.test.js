describe('sort', () => {

    test('sort an array of strings', function (){

        const months = ['March', 'Jan', 'Feb', 'Dec']
        
        sort(months)

        expect(months[0]).toBe("Dec")
        expect(months[1]).toBe("Feb")
        expect(months[2]).toBe("Jan")
        expect(months[3]).toBe("March")
    
    })

    test('sort an array of numbers', () => {

        const array1 = [1, 30, 4, 21, 100000]
        
        sort(array1)

        expect(array1[0]).toBe(1)
        expect(array1[1]).toBe(100000)
        expect(array1[2]).toBe(21)
        expect(array1[3]).toBe(30)
        expect(array1[4]).toBe(4)

    })

    test('sort another array of numbers', () =>{

        const array2 = [40, 1, 5, 200];
        
        sort(array2)

        expect(array2[0]).toBe(1)
        expect(array2[1]).toBe(200)
        expect(array2[2]).toBe(40)
        expect(array2[3]).toBe(5)

    })

    test('sort an array of strings 2', () => {

        const array3 = ['Blue', 'Humpback', 'Beluga']

        sort(array3)

        expect(array3[0]).toBe('Beluga')
        expect(array3[1]).toBe('Blue')
        expect(array3[2]).toBe('Humpback')

    })
    
    test('sort an array of strings that contain character numbers', () => {

        const array4 = ['80', '9', '700']

        sort(array4)

        expect(array4[0]).toBe('700')
        expect(array4[1]).toBe('80')
        expect(array4[2]).toBe('9')

    })

    test('sort an array with both numbers and strings', () => {

        const array5 = ['80', '9', '700', 40, 1, 5, 200];

        sort(array5)

        expect(array5[0]).toBe(1)
        expect(array5[1]).toBe(200)
        expect(array5[2]).toBe(40)
        expect(array5[3]).toBe(5)
        expect(array5[4]).toBe('700')
        expect(array5[5]).toBe('80')
        expect(array5[6]).toBe('9')

    })

    test('sort an array that includes undefined as one of the elements', () => {

        const array6 = ['Blue', 'Humpback', undefined, 'Beluga']

        sort(array6)

        expect(array6[0]).toBe('Beluga')
        expect(array6[1]).toBe('Blue')
        expect(array6[2]).toBe('Humpback')
        expect(array6[3]).toBe( undefined)
    
    })


})