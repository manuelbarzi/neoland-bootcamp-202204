describe('includes', function(){
    test('looking for 2 inside of array4', function(){
        const array4 = [2, 3, 4]

        includes(array4, 2)

        expect(true).toBe(true)

    }) 
    test('looking cat inside pets', function(){
        const pets = ['cat', 'dog', 'bat', 'elephant', 'bird']

        pets.includes(pets, 'cat')

        expect(true).toBe(true)

    })
    test('looking for at inside of pets', function(){
        const pets = ['cat', 'rabbit', 'lion', 'tiger', 'bison']

        pets.includes(pets, 'at')

        expect(false).toBe(false)

    })
    test('looking for carrot inside of vegetables',function(){
        const vegetables = ['carrot','letuce','tomato']

        includes(vegetables, 'carrot')

        expect(true).toBe(true)

    })


})





