describe('indexOf', function(){

    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

    test('Indexa a partir del primer elemento dado', function() {

        const result = indexOf(beasts, 'bison')

        expect(result).toBe(1)
    })

    test('Indexa a partir del segundo elemento dado', function() {

        const result = indexOf(beasts, 'bison', 2)

        expect(result).toBe(4)
    })
})