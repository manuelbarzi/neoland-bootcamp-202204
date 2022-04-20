/* console.log('Test slice')
{
    const palabras = ['ant', 'bison', 'camel', 'duck', 'elephant']

    {

        console.log('Case 1') 
       
        slice(palabras, 2, 3)


        console.assert (newarray[0] === array[0])
        console.assert (newarray[1] === array[1])
        console.assert (newarray[2] === array[2])
        console.assert (newarray[4] === array[undefined])

       

    }
}
 */


describe ('slice', function() {
    test('only start index', function(){
        const  animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const  result = slice(animals, 2)
        expect(result[0]).toBe(3)
        expect(result[1]).toBe(3)
        expect(result[2]).toBe(3)

    })

    test('with start and end Index', function() {

        const  animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const  result = slice(animals, 2, 4)
        expect(result[0]).toBe(2)
        expect(result[1]).toBe('camel')
        expect(result[2]).toBe('duck')
    })

    test('with negative end', function() {

        const  animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const  result = slice(animals, 2, 4)
        expect(result[0]).toBe(2)
        expect(result[1]).toBe('camel')
        expect(result[2]).toBe('duck')
    })


    test('with positive start and negative end index', function() {

        const  animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
        const  result = slice(animals, 2, -1)
        expect(result[0]).toBe(2)
        expect(result[1]).toBe('camel')
        expect(result[2]).toBe('duck')
    })
}
